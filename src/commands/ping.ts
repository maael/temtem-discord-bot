import { Command } from "../types";

export const name = "ping";

const ping: Command = async function(_args, msg) {
  if (!msg.channel) return;
  await msg.channel.send("pong");
};

export default ping;
