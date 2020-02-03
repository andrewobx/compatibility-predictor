# Compatibility Predictor: A coding challenge
Ensure that your machine has [Node.js](https://nodejs.org/en/download/) installed prior to the following instructions. Clone down the repository and run the command `npm install`. Once all the dependencies have been installed, you may execute the command `npm test` in your terminal. *Voila!* The resulting output will then be printed (based off of the sample input data below).

Attribute weightings have been calculated in a Decision Making Matrix (DMM) linked [here](https://docs.google.com/spreadsheets/d/1PhgRtenUvESLeiJEHZSPalS9fsJnHyIv7a9z8TLHAQo/edit?usp=sharing).

## Sample Code
**Input:**
```
{
      “team” : [
            {
                  “name” : “Eddie”,
                  “attributes” : {
                        “intelligence” : 1,
                        “strength” : 5,
                        “endurance” : 3,
                        “spicyFoodTolerance” : 1
                  }
            }, {
                  “name” : “Will”,
                  “attributes” : {
                        “intelligence” : 9,
                        “strength” : 4,
                        “endurance” : 1,
                        “spicyFoodTolerance” : 6
                  }
            }, {
                  “name” : “Mike”,
                  “attributes”: {
                        “intelligence” : 3,
                        “strength” : 2,
                        “endurance” : 9,
                        “spicyFoodTolerance” : 5
                  }
            }
      ],
      “applicants” : [
            {
                  “name” : “John”,
                  “attributes”: {
                        “intelligence” : 4,
                        “strength” : 5,
                        “endurance” : 2,
                        “spicyFoodTolerance” : 1
                  }
            }, {
                  “name” : “Jane”
                  “attributes”: {,
                        “intelligence” : 7,
                        “strength” : 4,
                        “endurance” : 3,
                        “spicyFoodTolerance” : 2
                  }
            }, {
                  “name” : “Joe”,
                  “attributes”: {
                        “intelligence” : 1,
                        “strength” : 1,
                  “endurance” : 1,
                  “spicyFoodTolerance” : 10
                  }
            }
      ]
}
```

**Output:**
```
{
      “scoredApplicants” : [
            {
                  “name” : “John”,
                  “score” : 0.2
            }, {
                  “name” : “Jane”,
                  “score” : 0.4
            }, {
                  “name” : “Joe”,
                  “score” : 0.9
            }
      ]
}
```
