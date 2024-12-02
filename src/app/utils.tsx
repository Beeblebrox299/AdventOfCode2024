import { readFileSync } from "fs";

export const getInputLines = (day: string):string[] => {
    const input = readFileSync('./src/app/' + day + '/input.txt').toString();
    const lines = input.split("\n");
    return lines
}
