var legionDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  

};

legionDancer.prototype = Object.create(makeDancer.prototype);
legionDancer.prototype.constructor = legionDancer;

legionDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.oldStep();
  var randColor = function() {
    return Math.floor(Math.random() * 256);
  };
  
  var styleSettings = {
    border: '10px solid rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')' 
  };
  //this.lineUp(); 
  this.$node.css(styleSettings);
  this.$node.toggle(); 
  this.jump();
};

legionDancer.prototype.changeColors = function() {
  
  this.changeC = makeDancer.prototype.changeColors;
  this.changeC(); 
  
  
  $('.dancer').css('border', '10px solid blue');
  this.$node.toggle();

};

legionDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0,
  };
  this.$node.css(styleSettings);
};
legionDancer.prototype.jump = function() {
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};