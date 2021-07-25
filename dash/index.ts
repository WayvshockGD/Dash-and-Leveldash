import { Client, Message } from "eris";
import { dashToken, prefixes } from "../config.json";
import LoadCommands from "../utils/LoadCommands";

let client = new Client(dashToken, { compress: true, messageLimit: 30 });

export let commands = new Map<string, { name: string, [key: string]: any }>();

LoadCommands("dash", commands);

client.on("messageCreate", (message: Message) => {
    if (!message.content.startsWith(prefixes.dash)) return;
    if (message.author.bot) return;

    let args = message.content.slice(prefixes.dash.length).trim().split(" ");

    let command = commands.get(args[0]);
    if (!command) return;
    args = args.slice(1);

    command.run({message, args, client, commands});
})

client.on("ready", () => {
    console.log("ready on dash");
})

client.connect();