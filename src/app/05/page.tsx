import { getInputLines } from "../utils";

export default function Day05() {
    // Part 1
    const lines = getInputLines("05");
    const rules: string[][] = [];
    let midSum = 0;
    lines.forEach(line => {
        if (line.includes("|")) {
            const rule = line.split("|");
            rules.push(rule);
        }
        else if (line.includes(",")) {
            let hasCorrectOrder = true;
            const update = line.split(",");
            for (let i = 0; i < rules.length; i++) {
                const smaller = rules[i][0];
                const bigger = rules[i][1];
                if (update.includes(smaller) && update.includes(bigger)) {
                    if (update.indexOf(smaller) > update.indexOf(bigger)) {
                        hasCorrectOrder = false;
                        break;
                    };
                };
            };
            if (hasCorrectOrder) midSum += Number(update[(update.length-1)/2]);
        };
    });
    console.log("Result: " + midSum)
    return(
        <div>

        </div>
    )
}