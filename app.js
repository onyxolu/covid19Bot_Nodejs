var botbuilder = require("botbuilder");
var restify = require("restify");
var Botmenu = require("./bot_core/menu");

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s listening.....", server.name);
});

var connector = new botbuilder.ChatConnector({
  appId: "759e7feb-45ac-46dd-bf29-199acda0aecc",
  appPassword: "n4.fnGUFHqc=[x7V[ZFPoczd7UxVguQ4",
});

var inMemoryStorage = new botbuilder.MemoryBotStorage();

var bot = new botbuilder.UniversalBot(connector, (session) => {
  session.beginDialog("/welcomenew");
}).set("storage", inMemoryStorage);

server.post("/api/messages", connector.listen());

var menu = new Botmenu();
menu.init(bot, botbuilder);

bot.on("conversationUpdate", function (message) {
  if (message.membersAdded) {
    message.membersAdded.forEach(function (identity) {
      if (identity.id == message.address.bot.id) {
        // Bot is joining conversation
        // - For WebChat channel you'll get this on page load.
        var reply = new botbuilder.Message()
          .address(message.address)
          .text(
            "Welcome to the Covid-19 bot of Microsoft Tech Community Unilag. Press any key to continue"
          );
        bot.send(reply);
      } else {
        // User is joining conversation
        // - For WebChat channel this will be sent when user sends first message.
        // - When a user joins a conversation the address.user field is often for
        //   essentially a system account so to ensure we're targeting the right
        //   user we can tweek the address object to reference the joining user.
        // - If we wanted to send a private message to teh joining user we could
        //   delete the address.conversation field from the cloned address.
        // var address = Object.create(message.address);
        // address.user = identity;
        // var reply = new botbuilder.Message()
        //   .address(address)
        //   .text("Hello %s", identity.name);
        // bot.send(reply);
      }
    });
  }
});