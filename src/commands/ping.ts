import { Command } from "../types";

export const name = "ping";

const ping: Command = async function(args, msg) {
  msg.channel.send("pong");
};

export default ping;
