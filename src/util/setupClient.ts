import * as Discord from "discord.js";
import { Command } from "../types";

const { DEFAULT_PREFIX } = process.env as Record<string, string>;

export default function setupClient(commands: Record<string, Command>) {
  const client = new Discord.Client();

  console.info("commands", commands);

  client.on("ready", () => {
    if (client.user) {
      console.info(`Logged in as ${client.user.tag}!`);
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
    if (commands.hasOwnProperty(command)) {
      commands[command](args, msg);
    } else {
      console.info("missing_command", command);
      await msg.channel.send(`missing command: ${command}`);
    }
  });

  return client;
}
