import { Message, PartialMessage } from "discord.js";

export type Command = (args: string[], msg: Message | PartialMessage) => void;
