import { Client, Message } from "eris";
import { levelDashToken, prefixes } from "../config.json";
import LoadCommands from "../utils/LoadCommands";

let client = new Client(levelDashToken, { compress: true, messageLimit: 60 });

export let commands = new Map<string, { name: string, [key: string]: any }>();

LoadCommands("ld", commands);

client.on("messageCreate", (message: Message) => {
    if (!message.content.startsWith(prefixes.ld)) return;
    if (message.author.bot) return;

    let args = message.content.slice(prefixes.ld.length).trim().split(" ");

    let command = commands.get(args[0]);
    if (!command) return;
    args = args.slice(1);

    command.run({message, args, client, commands});
});

client.on("ready", () => {
    console.log("Ready on leveldash");
})

client.connect();