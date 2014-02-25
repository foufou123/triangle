var Triangle = {
  type: function() {
    var s1 = this.s1;
    var s2 = this.s2;
    var s3 = this.s3;
    if ((s1 > 0) && (s1 === s2 && s1 === s3)) {
      return "Equilateral";
    } else if ((s1 === s2 && s1 !== s3) || (s1 === s3 && s1 !== s2) || (s2 === s3 && s2 !== s1)) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  },

  invalid: function() {
    var sides = [this.s1, this.s2, this.s3];
    sides.sort();
    console.log(sides);
    console.log(sides[2]);
    var added = sides[0] + sides[1];
    console.log(added);
    var isInvalid = (sides[2] >= (sides[0] + sides[1]));
    console.log(isInvalid);
    return isInvalid;
  }
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    var s1 = parseInt($("input#side1").val());
    var s2 = parseInt($("input#side2").val());
    var s3 = parseInt($("input#side3").val());

    var newTri = Object.create(Triangle);
    newTri.s1 = s1;
    newTri.s2 = s2;
    newTri.s3 = s3;

    if (!newTri.invalid()) {
      var type = newTri.type();
    }
    
    console.log(type);

    //var type = (!newTri.invalid()) ? newTri.type() : "Invalid";

    $(".triangle_type").text(type);
    $("#result").show();

    if (type==="Equilateral") {
      $(".types ul#equilaterals").append("<li><span class='newType'>" + newTri.s1 + ", " + newTri.s2 + ", " + newTri.s3 + "</span></li>");
    } else if (type==="Isosceles") {
      $(".types ul#isosceles").append("<li><span class='newType'>" + newTri.s1 + ", " + newTri.s2 + ", " + newTri.s3 + "</span></li>");
    } else if (type==="Scalene") {
      $(".types ul#scalenes").append("<li><span class='newType'>" + newTri.s1 + ", " + newTri.s2 + ", " + newTri.s3 + "</span></li>");
    } else {
      alert("Not valid numbers");
    }


    this.reset();

     

  });
});


