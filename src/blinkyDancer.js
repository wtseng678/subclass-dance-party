

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep = makeDancer.prototype.step;
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.css("color", "green");
  //this.$node.toggleClass("blue");
  
  //$('.dancer').css('border', '10px solid red');
  this.$node.toggle();
};

// For lining up dancers on the sides
makeBlinkyDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0,
  };
  this.$node.css(styleSettings);
};

makeBlinkyDancer.prototype.jump = function() {
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};