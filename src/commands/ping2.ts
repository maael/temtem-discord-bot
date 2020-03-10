import { Command } from "../types";

export const name = "ping2";

const ping2: Command = async function(args, msg) {
  await msg.channel.send("pong2");
};

export default ping2;
