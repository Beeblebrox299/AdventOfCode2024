import { readFileSync } from "fs";

export const getInput = (day:string):string => {
    return readFileSync('./src/app/' + day + '/input.txt').toString();
}

export const getInputLines = (day: string):string[] => {
    const input = getInput(day);
    const lines = input.split("\n");
    return lines
}
