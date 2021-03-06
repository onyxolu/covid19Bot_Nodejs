const botbuilder = require("botbuilder");
const restify = require("restify");
const Botmenu = require("./bot_core/menu");

const server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s listening.....", server.name);
});

const connector = new botbuilder.ChatConnector({
  appId: "759e7feb-45ac-46dd-bf29-199acda0aecc",
  appPassword: "n4.fnGUFHqc=[x7V[ZFPoczd7UxVguQ4",
});

const inMemoryStorage = new botbuilder.MemoryBotStorage();

const bot = new botbuilder.UniversalBot(connector, (session) => {
  session.beginDialog("/welcome");
}).set("storage", inMemoryStorage);

server.post("/api/messages", connector.listen());

const menu = new Botmenu();
menu.init(bot, botbuilder);

bot.on("conversationUpdate", (message) => {
  if (message.membersAdded) {
    message.membersAdded.forEach((identity) => {
      if (identity.id == message.address.bot.id) {
        let reply = new botbuilder.Message()
          .address(message.address)
          .text(
            "Welcome to the Covid-19 bot of Microsoft Tech Community Unilag. Press any key to continue"
          );
        bot.send(reply);
      } else {
      }
    });
  }
});
