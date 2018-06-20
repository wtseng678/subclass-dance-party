var compasDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="compas-dancer"></span>'); 
  var myNode = this.$node;
  myNode.click(function(){
    myNode.toggleClass('rotate');
}); 
  this.setPosition(500, window.left);
  console.log(window.left);
  window.left += 100; 
  
};
compasDancer.prototype = Object.create(makeDancer.prototype); compasDancer.prototype.constructor = compasDancer;


compasDancer.prototype.step = function() {
// move the boxes to background class compasDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.oldStep();
  var randColor = function() {
    return Math.floor(Math.random() * 256);
  };
  
  var styleSettings = {
    height: 200, 
    width: 100
  };
  //this.lineUp(); 
  this.$node.css(styleSettings);

  
  
  
  
};
compasDancer.prototype.changeColors = function() {
  
  this.changeC = makeDancer.prototype.changeColors;
  this.changeC(); 
  //this.$node.toggle();

};

compasDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 500,
    left: window.lineUpLeft
  };
  window.lineUpLeft += 100; 
  this.$node.css(styleSettings);
}; 

compasDancer.prototype.jump = function() {
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};





compasDancer.prototype.slide = function () {
  
};