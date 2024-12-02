import { getInputLines } from "../utils";

export default function Day01() {
  // Part 1
  const lines = getInputLines("01")
  const list1:number[] = [];
  const list2:number[] = [];
  const numberOfPairs = lines.length;
  lines.forEach((pairString, i) => {
    const getNextLocationId = (): number => {
      let locationIdString:string = "";
      while(pairString && pairString[0] !== " ") {
        locationIdString = locationIdString + pairString[0];
        pairString = pairString.substring(1);
      }
      return Number(locationIdString)
    }

    list1.push(getNextLocationId());
    while(pairString[0] == " ") {
      pairString = pairString.substring(1)
    }
    list2.push(getNextLocationId());
  });
  list1.sort();
  list2.sort();
  let totalDiff: number = 0;
  list1.forEach((item, i) => {
    totalDiff += Math.abs(item - list2[i]);
  });
  console.log("Total Distance: " + totalDiff);

  // Part 2
  let similarityScore:number = 0;
  list1.forEach(locationId => {
    const similarity = list2.filter(x => x === locationId).length * locationId;
    similarityScore += similarity;
  });
  console.log("Similarity Score: " + similarityScore);
  return (
    <div>

    </div>
  );
}
