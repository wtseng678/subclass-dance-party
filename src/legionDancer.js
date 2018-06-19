var legionDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  

};

legionDancer.prototype = Object.create(makeDancer.prototype);
legionDancer.prototype.constructor = legionDancer;

legionDancer.prototype.changeColors = function() {
  
  this.changeC = makeDancer.prototype.changeColors;
  this.changeC(); 
  
};
