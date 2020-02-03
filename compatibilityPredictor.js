const data = require("./input");
const applicants = data.input().applicants;

// Attribute weightings based on Decision Making Matrix (DMM) linked below
// https://docs.google.com/spreadsheets/d/1PhgRtenUvESLeiJEHZSPalS9fsJnHyIv7a9z8TLHAQo/edit?usp=
const attWeight = {
  intWeight: 0.2,
  strWeight: 0.05,
  endWeight: 0.05,
  spiWeight: 0.7
};

// Output answer
let output = {
  scoredApplicants: []
};

// Loop through the attributes for each app and calculate total scores
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
    score: Math.round((total / 9) * 10) / 10 // Score calculation on DMM linked above
  });
}

setTimeout(function() {
  // Set timeout to prevent log from interfering with test logs
  console.log("Here are your results!");
  console.log(output);
}, 50);

// Function to check for best applicant once/if test is run
exports.compatibilityPredictor = function() {
  let lowestScore = 1;
  let compatible = null;

  // Loop through total scores and find the lowest value
  for (let person in output.scoredApplicants) {
    if (output.scoredApplicants[person].score < lowestScore) {
      lowestScore = output.scoredApplicants[person].score;
      compatible = output.scoredApplicants[person].name;
    }
  }

  // Set timeout to prevent log from interfering with test logs
  setTimeout(function() {
    console.log(
      `Based on the results, your most compatible applicant is ${compatible}`
    );
  }, 50);

  return compatible;
};
