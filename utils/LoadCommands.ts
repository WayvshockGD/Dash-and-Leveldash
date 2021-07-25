import { readdirSync } from "fs";
import { ts_node } from "../config.json";

export default function(type: "dash" | "ld", commands: Map<string, { name: string }>) {
    if (type === "dash") {
        let folder = readdirSync(ts_node ? "./dash/commands/" : "./build/dash/commands/");

        for (let file of folder) {
            let command: { name: string } = require(`../dash/commands/${file}`);
            commands.set(command.name, command);
        }
    } else if (type === "ld") {
        let folder = readdirSync(ts_node ? "./leveldash/commands/" : "./build/leveldash/commands/");

        for (let file of folder) {
            let command: { name: string } = require(`../leveldash/commands/${file}`);
            commands.set(command.name, command);
        }
    }
}