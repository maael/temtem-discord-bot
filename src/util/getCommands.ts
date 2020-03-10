import p from "path";
import { promises as fs } from "fs";
import { Command } from "../types";

const COMMANDS_BASE = p.resolve(p.join(__dirname, "..", "commands"));

export default async function getCommands(): Promise<Record<string, Command>> {
  const commandNames = (await fs.readdir(COMMANDS_BASE)).map(
    n => p.parse(n).name
  );
  return (
    await Promise.all(
      commandNames.map(async name => {
        const path = `${COMMANDS_BASE}/${name}`;
        return import(path);
      })
    )
  ).reduce((acc, { name, default: fn }) => ({ ...acc, [name]: fn }), {});
}
