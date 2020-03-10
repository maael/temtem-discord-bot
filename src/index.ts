import * as Discord from "discord.js";

const { DISCORD_TOKEN, PORT, DEFAULT_PREFIX } = process.env as Record<
  string,
  string
>;

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
  const content = msg.content || "";
  if (
    !content.startsWith(DEFAULT_PREFIX) ||
    (msg.author && msg.author.bot) ||
    !msg.channel
  )
    return;

  const args = content.slice(DEFAULT_PREFIX.length).split(/ +/);
  const command = (args.shift() || "").toLowerCase();
  console.info("incoming_message", command, args);
  msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
});

(async () => {
  await client.login(DISCORD_TOKEN);
  require("http")
    .createServer()
    .listen(PORT);
})();
