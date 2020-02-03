const predictorModule = require("../compatibilityPredictor");
const chai = require("chai");
const should = chai.should();

// Test check for sample data provided
describe("The most compatible applicant", function() {
  it("should be the applicant with the lowest score", function() {
    let predictor = predictorModule.compatibilityPredictor();
    predictor.should.equal("John");
  });
});
