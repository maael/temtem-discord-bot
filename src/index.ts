import * as Discord from "discord.js";

const { DISCORD_TOKEN, PORT } = process.env;

if (!DISCORD_TOKEN) {
  console.error("[error]", "Missing DISCORD_TOKEN");
  process.exit(1);
}

const client = new Discord.Client();

client.on("ready", () => {
  if (client.user) {
    console.log(`Logged in as ${client.user.tag}!`);
  } else {
    console.error("[error]", "Could not login");
  }
});

client.on("message", async msg => {
  console.info("incoming_message", msg.content);
});

(async () => {
  await client.login(DISCORD_TOKEN);
  require("http")
    .createServer()
    .listen(PORT);
})();
