const welcomeMessage = require("./utils/WelcomeMessage");
const Questions = require("./utils/Questions");
const Diagnosis = require("./utils/Diagnosis");
const {
  lowRecommendations,
  mediumRecommendations,
  highRecommendations,
} = require("./utils/Recommendations");

init = function (bot, botbuilder) {
  //Create the dialog cards
  function createHeroCard(session, question) {
    return new botbuilder.HeroCard(session)
      .title(question.title)
      .subtitle(question.subtitle)
      .text(question.text)
      .images(getSampleCardImages(session, question.image));
  }

  function createThumbnailCard(session, Diagnosis) {
    return new botbuilder.ThumbnailCard(session)
      .title(Diagnosis.title)
      .subtitle(Diagnosis.subtitle)
      .text(Diagnosis.text)
      .images(getSampleCardImages(session, Diagnosis.image));
  }

  function createCarouselofCards(session, cardsInfo) {
    const cards = [];
    cardsInfo.map((card) => {
      cards.push(createHeroCard(session, card));
    });
    return cards;
  }

  function getSampleCardImages(session, image) {
    return [botbuilder.CardImage.create(session, image)];
  }

  function getSampleCardActions(session) {
    return [
      botbuilder.CardAction.dialogAction(session, "welcome", "Yes"),
      botbuilder.CardAction.dialogAction(
        session,
        "https://docs.botframework.com/en-us/",
        "No"
      ),
    ];
  }

  function askQuestion(session, question) {
    session.send(
      new botbuilder.Message(session).addAttachment(
        createHeroCard(session, question)
      )
    );
  }

  function showCarousel(session, cardsInfo) {
    var msg = new botbuilder.Message(session);
    msg.attachmentLayout(botbuilder.AttachmentLayout.carousel);
    msg.attachments(createCarouselofCards(session, cardsInfo));
    session.send(msg).endDialog();
  }

  function showThumbNailCard(session, question) {
    session.send(
      new botbuilder.Message(session).addAttachment(
        createThumbnailCard(session, question)
      )
    );
  }

  bot.dialog("/welcome", [
    function (session) {
      session.userData.answers = {};
      session.userData.points = 0;
      session.userData.currentQuestion = 0;
      session.beginDialog("/question");
    },
    function (session, results) {
      // session.beginDialog("/welcomenew");
    },
  ]);

  bot.dialog("/question", [
    function (session) {
      let currentQuestion = session.userData.currentQuestion;
      console.log("current question" + currentQuestion);
      if (currentQuestion > Questions.length - 1) {
        session.beginDialog("/confirmation");
        return;
      }
      askQuestion(session, Questions[session.userData.currentQuestion]);
      session.beginDialog("/option");
    },
    function (session, results) {},
  ]);

  bot.dialog("/option", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      let userData = session.userData;
      let point = Questions[userData.currentQuestion].point;
      switch (results.response.index) {
        case 0:
          userData.points += point;
          userData.answers[`question${userData.currentQuestion + 1}`] =
            results.response.entity;
          userData.currentQuestion += 1;
          session.beginDialog("/question");
          break;
        case 1:
          userData.answers.question2 = results.response.entity;
          userData.currentQuestion += 1;
          session.beginDialog("/question");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/confirmation", [
    function (session) {
      let questions = Questions.length;
      var summarynew = "Kindly confirm your inputs :\n" + "\n" + "\n";
      for (let i = 0; i < questions; i++) {
        let info =
          Questions[i].text +
          ": " +
          session.userData.answers[`question${i + 1}`] +
          "\n" +
          "\n";
        summarynew += info;
      }
      var info = {
        subtitle: summarynew,
      };
      askQuestion(session, info);
      session.beginDialog("/options13");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options13", [
    function (session) {
      botbuilder.Prompts.choice(
        session,
        "Do you want to proceed? :",
        "Yes|I want to start over",
        {
          listStyle: botbuilder.ListStyle.button,
        }
      );
    },
    function (session, results) {
      switch (results.response.index) {
        case 0:
          session.beginDialog("/Diagnosis");
          break;
        case 1:
          session.beginDialog("/welcome");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/Diagnosis", [
    function (session) {
      let DiagnosisData = {};
      if (session.userData.points <= 10) {
        DiagnosisData = Diagnosis[0];
      }
      if (session.userData.points > 10 && session.userData.points < 15) {
        DiagnosisData = Diagnosis[1];
      }
      if (session.userData.points >= 15) {
        DiagnosisData = Diagnosis[2];
      }
      showThumbNailCard(session, DiagnosisData);
      session.beginDialog("/recommendations");
    },
    function (session, results) {},
  ]);

  bot.dialog("/recommendations", [
    function (session) {
      let recommendationData = {};
      if (session.userData.points <= 10) {
        recommendationData = lowRecommendations;
      }
      if (session.userData.points > 10 && session.userData.points < 15) {
        recommendationData = mediumRecommendations;
      }
      if (session.userData.points >= 15) {
        recommendationData = highRecommendations;
      }
      showCarousel(session, recommendationData);
      session.send("Thank You!");
    },
    function (session, results) {},
  ]);
};

module.exports = function () {
  this.init = init;
};
