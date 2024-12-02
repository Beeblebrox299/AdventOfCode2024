import { getInputLines } from "../utils";

export default function Day02() {
    // Part 1
    const lines = getInputLines("02");
    const reports:number[][] = []
    lines.forEach(report => {
        const levelStrings = report.split(" ");
        const levels:number[] = [];
        levelStrings.forEach(level => {
            levels.push(Number(level));
        });
        reports.push(levels);
    });
    const isSafe = (report:number[], errorAllowed:boolean):boolean => {
        if (report[0] < report[1]) {
            let i = 1;
            while (i < report.length) {
                if (report[i-1] >= report[i] || (report[i] - report[i-1]) > 3) {
                    if (errorAllowed) {
                        const reportCopy = [...report]
                        reportCopy.splice(i-1, 1)
                        if (isSafe(reportCopy, false)) {
                            return true;
                        }
                        else {
                            const anotherCopy = [...report]
                            anotherCopy.splice(i, 1)
                            return isSafe(anotherCopy, false);
                        };
                    }
                    else {
                        return false;
                    };
                }
                else i += 1;
            };
        }
        else if (report[0] > report[1]) {
            let i = 1;
            while (i < report.length) {
                if (report[i-1] <= report[i] || (report[i-1] - report[i]) > 3) {
                    if (errorAllowed) {
                        const reportCopy = [...report]
                        reportCopy.splice(i-1, 1)
                        if (isSafe(reportCopy, false)) {
                            return true;
                        }
                        else {
                            const anotherCopy = [...report]
                            anotherCopy.splice(i, 1)
                            return isSafe(anotherCopy, false);
                        };
                    }
                    else {
                        return false;
                    };
                }
                else i += 1;
            };
        }
        else if (errorAllowed) {
            const reportCopy = [...report]
            reportCopy.splice(0, 1)
            if (isSafe(reportCopy, false)) {
                return true;
            }
            else {
                const anotherCopy = [...report]
                anotherCopy.splice(1, 1)
                return isSafe(anotherCopy, false);
            };
        }
        else return false;
        return true;
    };
    let safeReportCounter: number = 0;
    reports.forEach(report => {
        if (isSafe(report, false)) safeReportCounter += 1;
    });
    console.log(safeReportCounter + " safe reports out of " + reports.length);

    // Part 2
    safeReportCounter = 0;
    reports.forEach(report => {
        const safe = isSafe(report,true)
        if (safe) safeReportCounter += 1;
        else {
            report.splice(0, 1);
            if (isSafe(report, false)) safeReportCounter += 1;
        }
    });
    console.log(safeReportCounter + " safe reports out of " + reports.length + " with error toleration");
    return(
        <div>

        </div>
    )
};
