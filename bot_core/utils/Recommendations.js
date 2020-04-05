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

module.exports = {
  lowRecommendations,
  mediumRecommendations,
  highRecommendations,
};
