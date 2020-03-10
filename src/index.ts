import http from "http";
import getCommands from "./util/getCommands";
import setupClient from "./util/setupClient";

const { DISCORD_TOKEN, PORT } = process.env as Record<string, string>;

if (!DISCORD_TOKEN) {
  console.error("[error]", "Missing DISCORD_TOKEN");
  process.exit(1);
}

http
  .createServer((_req, res) => {
    res.end("Temtem Discord Bot");
  })
  .listen(PORT);

(async () => {
  const commands = await getCommands();
  const client = setupClient(commands);
  await client.login(DISCORD_TOKEN);
})().catch(e => console.error(e));
