const welcomeMessage = require("./utils/WelcomeMessage");
const Questions = require("./utils/Questions");
const Diagnosis = require("./utils/Diagnosis");
const {
  lowRecommendations,
  mediumRecommendations,
  highRecommendations,
} = require("./utils/Recommendations");

init = function (bot, botbuilder) {
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
      botbuilder.Prompts.text(session, welcomeMessage);
      // showCarousel(session, highRecommendations);

      // askQuestion(session, Questions[0]);
      // // startOptions(session);
      // session.beginDialog("/options1");
    },
    function (session, results) {
      session.beginDialog("/welcomenew");
    },
  ]);

  bot.dialog("/welcomenew", [
    function (session) {
      session.userData.answers = {};
      session.userData.points = 0;
      askQuestion(session, Questions[0]);
      startOptions(session);
      session.beginDialog("/options1");
    },
    function (session, results) {
      // session.beginDialog("/welcomenew");
    },
  ]);

  function startOptions(session) {
    for (let i = 0; i < 8; i++) {
      session.beginDialog("/questionnew");
    }
  }

  bot.dialog("/questionnew", [
    function (session) {
      askQuestion(session, Questions[1]);
      session.beginDialog("/optionnew");
    },
    function (session, results) {},
  ]);

  bot.dialog("/optionnew", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 3;
          session.userData.answers.question2 = results.response.entity;
          // session.beginDialog("/question3");
          break;
        case 1:
          session.userData.answers.question2 = results.response.entity;
          // session.beginDialog("/question3");
          break;
        default:
          // session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/options1", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          console.log(results.response);
          session.userData.points += 3;
          session.userData.answers.question1 = results.response.entity;
          session.beginDialog("/question2");
          break;
        case 1:
          session.userData.answers.question1 = results.response.entity;
          session.beginDialog("/question2");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question2", [
    function (session) {
      askQuestion(session, Questions[1]);
      session.beginDialog("/options2");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options2", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 3;
          session.userData.answers.question2 = results.response.entity;
          session.beginDialog("/question3");
          break;
        case 1:
          session.userData.answers.question2 = results.response.entity;
          session.beginDialog("/question3");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question3", [
    function (session) {
      askQuestion(session, Questions[2]);
      session.beginDialog("/options3");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options3", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 3;
          session.userData.answers.question3 = results.response.entity;
          session.beginDialog("/question4");
          break;
        case 1:
          session.userData.answers.question3 = results.response.entity;
          session.beginDialog("/question4");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question4", [
    function (session) {
      askQuestion(session, Questions[3]);
      session.beginDialog("/options4");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options4", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 2;
          session.userData.answers.question4 = results.response.entity;
          session.beginDialog("/question5");
          break;
        case 1:
          session.userData.answers.question4 = results.response.entity;
          session.beginDialog("/question5");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question5", [
    function (session) {
      askQuestion(session, Questions[4]);
      session.beginDialog("/options5");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options5", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 2;
          session.userData.answers.question5 = results.response.entity;
          session.beginDialog("/question6");
          break;
        case 1:
          session.userData.answers.question5 = results.response.entity;
          session.beginDialog("/question6");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question6", [
    function (session) {
      askQuestion(session, Questions[5]);
      session.beginDialog("/options6");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options6", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question6 = results.response.entity;
          session.beginDialog("/question7");
          break;
        case 1:
          session.userData.answers.question6 = results.response.entity;
          session.beginDialog("/question7");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question7", [
    function (session) {
      askQuestion(session, Questions[6]);
      session.beginDialog("/options7");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options7", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question7 = results.response.entity;
          session.beginDialog("/question8");
          break;
        case 1:
          session.userData.answers.question7 = results.response.entity;
          session.beginDialog("/question8");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question8", [
    function (session) {
      askQuestion(session, Questions[7]);
      session.beginDialog("/options8");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options8", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question8 = results.response.entity;
          session.beginDialog("/question9");
          break;
        case 1:
          session.userData.answers.question8 = results.response.entity;
          session.beginDialog("/question9");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question9", [
    function (session) {
      askQuestion(session, Questions[8]);
      session.beginDialog("/options9");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options9", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question9 = results.response.entity;
          session.beginDialog("/question10");
          break;
        case 1:
          session.userData.answers.question9 = results.response.entity;
          session.beginDialog("/question10");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question10", [
    function (session) {
      askQuestion(session, Questions[9]);
      session.beginDialog("/options10");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options10", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question10 = results.response.entity;
          session.beginDialog("/question11");
          break;
        case 1:
          session.userData.answers.question10 = results.response.entity;
          session.beginDialog("/question11");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question11", [
    function (session) {
      askQuestion(session, Questions[10]);
      session.beginDialog("/options11");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options11", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question11 = results.response.entity;
          session.beginDialog("/question12");
          break;
        case 1:
          session.userData.answers.question11 = results.response.entity;
          session.beginDialog("/question12");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/question12", [
    function (session) {
      askQuestion(session, Questions[11]);
      session.beginDialog("/options12");
    },
    function (session, results) {},
  ]);

  bot.dialog("/options12", [
    function (session) {
      botbuilder.Prompts.choice(session, "Select an Option:", "Yes|No", {
        listStyle: botbuilder.ListStyle.button,
      });
    },
    function (session, results) {
      console.log("NA me");
      switch (results.response.index) {
        case 0:
          session.userData.points += 1;
          session.userData.answers.question12 = results.response.entity;
          console.log(session.userData.answers);
          console.log(session.userData.points);
          session.beginDialog("/confirmation");
          break;
        case 1:
          session.userData.answers.question12 = results.response.entity;
          session.beginDialog("/confirmation");
          break;
        default:
          session.endDialog();
          break;
      }
    },
  ]);

  bot.dialog("/confirmation", [
    function (session) {
      var summary =
        "Kindly confirm your inputs :\n" +
        "\n" +
        "\n" +
        Questions[0].text +
        ": " +
        session.userData.answers.question1 +
        "\n" +
        "\n" +
        Questions[1].text +
        ": " +
        session.userData.answers.question2 +
        "\n" +
        "\n" +
        Questions[2].text +
        ": " +
        session.userData.answers.question3 +
        "\n" +
        "\n" +
        Questions[3].text +
        ": " +
        session.userData.answers.question4 +
        "\n" +
        "\n" +
        Questions[4].text +
        ": " +
        session.userData.answers.question5 +
        "\n" +
        "\n" +
        Questions[5].text +
        ": " +
        session.userData.answers.question6 +
        "\n" +
        "\n" +
        Questions[6].text +
        ": " +
        session.userData.answers.question7 +
        "\n" +
        "\n" +
        Questions[7].text +
        ": " +
        session.userData.answers.question8 +
        "\n" +
        "\n" +
        Questions[8].text +
        ": " +
        session.userData.answers.question9 +
        "\n" +
        "\n" +
        Questions[9].text +
        ": " +
        session.userData.answers.question10 +
        "\n" +
        "\n" +
        Questions[10].text +
        ": " +
        session.userData.answers.question11 +
        "\n" +
        "\n" +
        Questions[11].text +
        ": " +
        session.userData.answers.question12 +
        "\n";
      var info = {
        subtitle: summary,
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
      console.log("NA me");
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
