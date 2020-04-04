const welcomeMessage =
  "Welcome to the Covid-19 bot of Microsoft Tech Community Unilag. Press any key to continue";

const questions = [
  {
    text:
      "Do you have direct contact or is taking care of a positive COVID-19 PATIENT?",
    image:
      "https://cdn.vox-cdn.com/thumbor/q9HCGGBsFhA8ImJDT20XxH13e60=/0x0:5816x3877/1200x800/filters:focal(2443x1474:3373x2404)/cdn.vox-cdn.com/uploads/chorus_image/image/66527471/1209198461.jpg.0.jpg",
  },
  {
    text: "Do you have a travel history to a Covid-19 infected area?",
    image:
      "https://scitechdaily.com/images/COVID-19-Coronavirus-Map-March-5.jpg",
  },
  {
    text: "Have you travelled recently during the last 14 days?",
    image:
      "https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg",
  },
  {
    text: "Are you experiencing fatigue?",
    image:
      "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/chronic-kidney-disease/extremefatiguecontent.ashx?h=400&la=en&mh=400&mw=670&w=582&hash=17A847C40A36BE9A7B2F3409009741B20B8965C6",
  },
  {
    text: "Are you having dificulty breathing?",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/lady-struggling-with-breath.jpg",
  },
  {
    text: "Do you have fever (Temperature 37.8C and above) ?",
    image:
      "https://www.osfhealthcare.org/blog/wp-content/uploads/2019/12/what-is-a-fever-ft.jpg",
  },
  {
    text: "Do you have headache?",
    image:
      "https://www.health.qld.gov.au/__data/assets/image/0020/675101/3-Headache.jpg",
  },
  {
    text: "Do you have MALAGIA or body aches?",
    image:
      "https://www.pickaremedy.com/wp-content/uploads/2016/02/man-with-body-pain.jpg",
  },
  {
    text: "Do you have sore throat? ",
    image:
      "https://www.healthxchange.sg/sites/hexassets/Assets/head-neck/sore-throat-causes-symptoms-treatment.jpg",
  },
  {
    text: "Do you have Diarrhea?",
    image:
      "https://www.doctordoctor.com.au/wp-content/uploads/2018/02/Causes-and-Treatment-of-Diarrhoea-1.jpg ",
  },
  {
    text: "you have cold?",
    image:
      "https://imgix.bustle.com/uploads/shutterstock/2019/9/18/1e9cb9c7-a01c-427c-8406-b455769cfa38-shutterstock-1216573804.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
  },
  {
    text: "Do you have cough?",
    image:
      "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2962/man-cough.jpg?itok=k2wtyMxW",
  },
];

const diagnosis = [
  {
    title: "Low",
    subtitle: "You are Covid 19 Free",
    text: "Kindly see suggestions below on how to prevent Covid 19",
    image:
      "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/82893/2012/04/93124-89483.jpg?itok=t2DayNm8",
  },
  {
    title: "Medium",
    subtitle:
      "There is a slight possibility that you might be infected with Covid 19",
    text: "Kindly see recommendations below on next steps",
    image:
      "https://central-training.co.uk/wp-content/uploads/2018/10/Risk-Medium-600.jpg",
  },
  {
    title: "High Risk",
    subtitle:
      "There is a high possibility that you might be infected with Covid 19",
    text: "Kindly see recommendations below on next steps",
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/96/70/risk-icon-on-speedometer-high-risk-meter-vector-27389670.jpg",
  },
];

const stayHome = {
  title: "Stay Home",
  subtitle: "Stay home and stay safe",
  text:
    "Stay at home to prevent any contact between you and an infected person",
  image:
    "https://www.todaysparent.com/wp-content/uploads/2019/11/in-the-battle-of-the-better-stay-at-home-parent-my-hubby-wins-1280x960-1024x576-1573005978.jpg",
};

const CleanHand = {
  title: "Hand ",
  subtitle: "Clean your hands often",
  text:
    "If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry and Avoid touching your eyes, nose, and mouth with unwashed hands.",
  image: "https://www.unitypoint.org/filesimages/Articles/HandWashing.jpg",
};

const CloseContact = {
  title: "Avoid Close Contact",
  subtitle: "Use Gloves",
  text:
    "Avoid close contact with people who are sick and Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.",
  image: "https://alexis.lindaikejisblog.com/photos/shares/5e7b5f63a48a2.jpg",
};

const Clean = {
  title: "Clean and Disinfect",
  text:
    "Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection.",
  image:
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/cleanup_after_illness_slideshow/493ss_thinkstock_rf_young_man_cleaning_kitchen_countertop.jpg",
};

const CoverCough = {
  title: "Cover Cough",
  text:
    "Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow. Throw used tissues in the trash. Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.",
  image:
    "https://www.lung.ca/sites/default/files/styles/menu_image_block/public/images/menu_images/ElbowCough_000011189334Medium.jpg?itok=5Y2EAfCG",
};

const DoTest = {
  title: "Visit Test Centre",
  text: "Kindly visit a test centre to test for the virus",
  image:
    "https://www.clickondetroit.com/resizer/h9R2KqoiyBk3pq3eTCiMG4eVRy8=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/XB7KBFVCN5DD3MB7FJUCIARPPM.jpg",
};

const Contact = {
  title: "Contact CDC",
  text: "Conatact CDC for more information",
  image: "https://pbs.twimg.com/media/EUB0jLIXYAAAdb3.jpg",
};

const overCrowded = {
  title: "Avoid overcrowded areas",
  text:
    "Avoid staying in places that are overcrowded as it aids transmission of the virus",
  image:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
};

const lowRecommendations = [
  Clean,
  CleanHand,
  CloseContact,
  CoverCough,
  overCrowded,
];

const mediumRecommendations = [
  stayHome,
  CleanHand,
  CloseContact,
  Clean,
  overCrowded,
];

const highRecommendations = [DoTest, Contact, CoverCough, overCrowded];

init = function (bot, botbuilder) {
  function createHeroCard(session, question) {
    return new botbuilder.HeroCard(session)
      .title(question.title)
      .subtitle(question.subtitle)
      .text(question.text)
      .images(getSampleCardImages(session, question.image));
  }

  function createThumbnailCard(session, diagnosis) {
    return new botbuilder.ThumbnailCard(session)
      .title(diagnosis.title)
      .subtitle(diagnosis.subtitle)
      .text(diagnosis.text)
      .images(getSampleCardImages(session, diagnosis.image));
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

      // askQuestion(session, questions[0]);
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
      askQuestion(session, questions[0]);
      // startOptions(session);
      session.beginDialog("/options1");
    },
    function (session, results) {
      // session.beginDialog("/welcomenew");
    },
  ]);

  function startOptions(session) {
    session.beginDialog("/options1");
  }

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
      askQuestion(session, questions[1]);
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
      askQuestion(session, questions[2]);
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
      askQuestion(session, questions[3]);
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
      askQuestion(session, questions[4]);
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
      askQuestion(session, questions[5]);
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
      askQuestion(session, questions[6]);
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
      askQuestion(session, questions[7]);
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
      askQuestion(session, questions[8]);
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
      askQuestion(session, questions[9]);
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
      askQuestion(session, questions[10]);
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
      askQuestion(session, questions[11]);
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
        questions[0].text +
        ": " +
        session.userData.answers.question1 +
        "\n" +
        "\n" +
        questions[1].text +
        ": " +
        session.userData.answers.question2 +
        "\n" +
        "\n" +
        questions[2].text +
        ": " +
        session.userData.answers.question3 +
        "\n" +
        "\n" +
        questions[3].text +
        ": " +
        session.userData.answers.question4 +
        "\n" +
        "\n" +
        questions[4].text +
        ": " +
        session.userData.answers.question5 +
        "\n" +
        "\n" +
        questions[5].text +
        ": " +
        session.userData.answers.question6 +
        "\n" +
        "\n" +
        questions[6].text +
        ": " +
        session.userData.answers.question7 +
        "\n" +
        "\n" +
        questions[7].text +
        ": " +
        session.userData.answers.question8 +
        "\n" +
        "\n" +
        questions[8].text +
        ": " +
        session.userData.answers.question9 +
        "\n" +
        "\n" +
        questions[9].text +
        ": " +
        session.userData.answers.question10 +
        "\n" +
        "\n" +
        questions[10].text +
        ": " +
        session.userData.answers.question11 +
        "\n" +
        "\n" +
        questions[11].text +
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
          session.beginDialog("/diagnosis");
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

  bot.dialog("/diagnosis", [
    function (session) {
      let diagnosisData = {};
      if (session.userData.points <= 10) {
        diagnosisData = diagnosis[0];
      }
      if (session.userData.points > 10 && session.userData.points < 15) {
        diagnosisData = diagnosis[1];
      }
      if (session.userData.points >= 15) {
        diagnosisData = diagnosis[2];
      }
      showThumbNailCard(session, diagnosisData);
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
