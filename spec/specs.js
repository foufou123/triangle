describe("Triangle", function() {
  describe("invalid", function() {
    it("should be invalid if one side is equal to or more than the other 2 sides combined", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.s1 = 3;
      testTriangle.s2 = 4;
      testTriangle.s3 = 55;
      testTriangle.invalid().should.equal(true);
    });
  });
  describe("invalid", function() {
    it("should be valid/false if triangle is valid", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.s1 = 7;
      testTriangle.s2 = 8;
      testTriangle.s3 = 9;
      testTriangle.invalid().should.equal(false);
    });
  });
});
