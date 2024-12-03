import { getInput } from "../utils";

export default function Day03() {
    // Part 1
    let inputString = getInput("03");
    const digit = new RegExp(/^\d+$/);
    let result = 0;
    while (inputString.length > 0) {
        if (!inputString.includes("mul(")) break;
        inputString = inputString.substring(inputString.indexOf("mul(") + 4);
        let firstNumberString = "";
        if (digit.test(inputString[0])) {
            for (let i = 0; i < 4; i++) {
                if (inputString[0] === ",") {
                    inputString = inputString.substring(1);
                    break;
                }
                else {
                    firstNumberString += inputString[0];
                    inputString = inputString.substring(1);
                };
            };
        };
        if (!digit.test(firstNumberString)) continue;
        let secondNumberString = "";
        if (digit.test(inputString[0])) {
            for (let i = 0; i < 4; i++) {
                if (inputString[0] === ")") {
                    inputString = inputString.substring(1);
                    break;
                }
                else {
                    secondNumberString += inputString[0];
                    inputString = inputString.substring(1);
                };
            };
        };
        if (!digit.test(secondNumberString)) continue;
        result += Number(firstNumberString) * Number(secondNumberString)
    };
    console.log(result)
    
    // Part 2 (mostly copied from part 1 for now)
    inputString = getInput("03");
    result = 0;
    let isEnabled = true;
    while (inputString.length > 0) {
        if (!inputString.includes("mul(")) break;
        const indices = [inputString.indexOf("mul("), inputString.indexOf("do()"), inputString.indexOf("don't()")];
        if ((indices[1] !== -1) && (indices[1] < indices[0])) {
            isEnabled = true;
            inputString = inputString.substring(inputString.indexOf("do()") + 4);
            continue;
        }
        if ((indices[2] !== -1) && (indices[2] < indices[0])){
            isEnabled = false;
            inputString = inputString.substring(inputString.indexOf("don't()") + 7);
            continue;
        };
        inputString = inputString.substring(inputString.indexOf("mul(") + 4);
        if (!isEnabled) continue;
        let firstNumberString = "";
        if (digit.test(inputString[0])) {
            for (let i = 0; i < 4; i++) {
                if (inputString[0] === ",") {
                    inputString = inputString.substring(1);
                    break;
                }
                else {
                    firstNumberString += inputString[0];
                    inputString = inputString.substring(1);
                };
            };
        };
        if (!digit.test(firstNumberString)) continue;
        let secondNumberString = "";
        if (digit.test(inputString[0])) {
            for (let i = 0; i < 4; i++) {
                if (inputString[0] === ")") {
                    inputString = inputString.substring(1);
                    break;
                }
                else {
                    secondNumberString += inputString[0];
                    inputString = inputString.substring(1);
                };
            };
        };
        if (!digit.test(secondNumberString)) continue;
        result += Number(firstNumberString) * Number(secondNumberString)
    };
    console.log(result)
    return(
        <div>

        </div>
    )
}