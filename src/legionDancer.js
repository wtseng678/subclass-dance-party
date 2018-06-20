var legionDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="legion-dancer"></span>');  

};

legionDancer.prototype = Object.create(makeDancer.prototype);
legionDancer.prototype.constructor = legionDancer;



// move the boxes to background class
legionDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.oldStep();
  var randColor = function() {
    return Math.floor(Math.random() * 256);
  };
  
  var styleSettings = {
    background: 'rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')',
    height: Math.floor(Math.random() * 200),
    width: Math.floor(Math.random() * 200)
   
  };
  //this.lineUp(); 
  this.$node.css(styleSettings);
  this.$node.toggle(); 
  this.jump();
};

legionDancer.prototype.changeColors = function() {
  
  this.changeC = makeDancer.prototype.changeColors;
  this.changeC(); 
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