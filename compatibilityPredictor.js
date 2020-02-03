const data = require("./input");
const applicants = data.input().applicants;

// Attribute weight calculations on Google Spreadsheet
// https://docs.google.com/spreadsheets/d/1PhgRtenUvESLeiJEHZSPalS9fsJnHyIv7a9z8TLHAQo/edit?usp=sharing

const attWeight = {
  intWeight: 0.2,
  strWeight: 0.05,
  endWeight: 0.05,
  spiWeight: 0.7
};

let output = {
  scoredApplicants: []
};

for (let person in applicants) {
  let intSubtotal =
    applicants[person].attributes.intelligence * attWeight.intWeight;
  let strSubtotal =
    applicants[person].attributes.strength * attWeight.strWeight;
  let endSubtotal =
    applicants[person].attributes.endurance * attWeight.endWeight;
  let spiSubtotal =
    applicants[person].attributes.spicyFoodTolerance * attWeight.spiWeight;

  let total = intSubtotal + strSubtotal + endSubtotal + spiSubtotal;

  output.scoredApplicants.push({
    name: applicants[person].name,
    score: Math.round((total / 9) * 10) / 10
  });
}

console.log("Here are your results! ==============================");
console.log(output);
console.log("Here are your results! ==============================");

exports.compatibilityPredictor = function() {
  let lowestScore = 1;
  let compatible = null;

  for (let person in output.scoredApplicants) {
    if (output.scoredApplicants[person].score < lowestScore) {
      lowestScore = output.scoredApplicants[person].score;
      compatible = output.scoredApplicants[person].name;
    }
  }

  return compatible;
};
