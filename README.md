# Temtem Discord Bot

## Initial Setup

### Clone

```sh
git clone git@github.com:maael/temtem-discord-bot.git
```

### Install

```sh
yarn
```

### Dependencies/Notes

- Uses Typescript
- Lints with tslint
- Prettifies on commit with `prettier`
- Node version used: `v12.0.0`
- Yarn version used: `1.21.1`

## Config

### Seting up on Discord

1. Go to the [Discord developers panel](https://discordapp.com/developers).
2. Create a new application.
3. Click on the **Bot** link in the sidebar on the left.
4. Click on the **Add Bot** button.
5. Get the token it generates and save it somewhere (in the `.env` for the project would be a good idea).

### Setting up Database

Uses a graphql database on [FaunaDB](https://dashboard.fauna.com/).

See the graphql schema used to generate the FaunaDB configuration [here](./docs/faunadb.gql).

### Environment Variables

| Name            | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `PORT`          | The port for the empty HTTP server used for Zeit Now.          |
| `DISCORD_TOKEN` | The token from [Setting up on Discord](#seting-up-on-discord). |
| `FAUNA_SECRET`  | The secret for the [FaunaDB](https://dashboard.fauna.com/).    |

You can see the expected environment variables in `.env.schema`, and the defaults in `.env.defaults`. Put your own values in `.env` so they don't end up in source control, this is what the bot will use when running locally. For deployment, see [Setting up on Zeit Now](#setting-up-on-zeit-now).

#### Setting up on Zeit Now

You will need to make sure the environment variables are created on Zeit Now, using the mappings in `now.json` under the `build.env` field.

You do this by adding secrets with:

1. Login to your now account on the CLI.

```sh
npx now login
```

2. Add the secrets you need, using the variable name without the `@` at the start.

```sh
npx now secrets add <env variable name> <env variable value>
```

For example, to add this mapping:

```sh
"DISCORD_TOKEN": "@temtem-discord-bot-discord-token"
```

You would do:

```sh
npx now secrets add temtem-discord-bot-discord-token <env variable value>
```

> Note: You can't override now secrets, you have to remove them with `npx now secrets remove <env variable name>` and then re-add them.

## Running

### Development

Will auto restart on changes.

```sh
yarn dev
```

### Production

```sh
yarn build
yarn start
```

## Deployment

Deployed via [Zeit Now](https://zeit.co/now).

## Commands

The default prefix to use the bot is `!tem`. It can be changed with the `change-command` command.

| Command          | Description                                        |
| ---------------- | -------------------------------------------------- |
| `change-command` | Allows you to change the prefix to invoke the bot. |
