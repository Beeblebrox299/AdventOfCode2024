import { getInputLines } from "../utils";

export default function Day04() {
    // Part 1
    const lines = getInputLines("04");
    let xmasCounter = 0;
    lines.forEach((line, lineIndex) => {
        line.split("").forEach((char, charIndex) => {
            if (char === "X") {
                // horizontal, right
                if (line[charIndex+1] === "M") {
                    if (line[charIndex+2] === "A") {
                        if (line[charIndex+3] === "S") {
                            xmasCounter += 1;
                        }
                    }
                }
                // horizontal, left
                if (line[charIndex-1] === "M") {
                    if (line[charIndex-2] === "A") {
                        if (line[charIndex-3] === "S") {
                            xmasCounter += 1;
                        }
                    }
                }
                if (lines[lineIndex+3] !== undefined) {
                    // vertical, down
                    if (lines[lineIndex+1][charIndex] === "M") {
                        if (lines[lineIndex+2][charIndex] === "A") {
                            if (lines[lineIndex+3][charIndex] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                    // diagonal, right & down
                    if (lines[lineIndex+1][charIndex+1] === "M") {
                        if (lines[lineIndex+2][charIndex+2] === "A") {
                            if (lines[lineIndex+3][charIndex+3] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                    // diagonal, left & down
                    if (lines[lineIndex+1][charIndex-1] === "M") {
                        if (lines[lineIndex+2][charIndex-2] === "A") {
                            if (lines[lineIndex+3][charIndex-3] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                };
                if (lines[lineIndex-3] !== undefined) {
                    // vertical, up
                    if (lines[lineIndex-1][charIndex] === "M") {
                        if (lines[lineIndex-2][charIndex] === "A") {
                            if (lines[lineIndex-3][charIndex] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                    // diagonal, right & up
                    if (lines[lineIndex-1][charIndex+1] === "M") {
                        if (lines[lineIndex-2][charIndex+2] === "A") {
                            if (lines[lineIndex-3][charIndex+3] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                    // diagonal, left & up
                    if (lines[lineIndex-1][charIndex-1] === "M") {
                        if (lines[lineIndex-2][charIndex-2] === "A") {
                            if (lines[lineIndex-3][charIndex-3] === "S") {
                                xmasCounter += 1;
                            }
                        }
                    }
                };
            }
        })
    })
    console.log("XMAS count: " + xmasCounter)

    // Part 2
    let XmasCounter = 0;
    lines.forEach((line, lineIndex) => {
        if (lines[lineIndex-1] === undefined || lines[lineIndex+1] === "undefined") return;
        line.split("").forEach((char, charIndex) => {
            if (char === "A") {
                if (lines[lineIndex-1][charIndex-1] === "M" && lines[lineIndex+1][charIndex+1] === "S") {
                    if ((lines[lineIndex-1][charIndex+1] === "M" && lines[lineIndex+1][charIndex-1] === "S") || (lines[lineIndex-1][charIndex+1] === "S" && lines[lineIndex+1][charIndex-1] === "M")) XmasCounter += 1;
                }
                else if (lines[lineIndex-1][charIndex-1] === "S" && lines[lineIndex+1][charIndex+1] === "M") {
                    if ((lines[lineIndex-1][charIndex+1] === "M" && lines[lineIndex+1][charIndex-1] === "S") || (lines[lineIndex-1][charIndex+1] === "S" && lines[lineIndex+1][charIndex-1] === "M")) XmasCounter += 1;
                };
            };
        });
    });
    console.log("X-MAS count: " + XmasCounter)
    return(
        <div>

        </div>
    )
}