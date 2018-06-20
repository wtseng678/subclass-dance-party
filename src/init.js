$(document).ready(function() {
  window.dancers = [];
  window.left = 50;
  window.top = 500;
  window.lineUpLeft = 50;
  window.backgrounds = ['lib/backgroundone.png', 'lib/backgroundtwo.jpg', 'lib/backgroundthree.jpg', 'lib/backgroundfour.jpg', 'lib/backgroundfive.jpg'];
  window.lightsOn = false; 
  window.lights = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

   /* var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);*/
    var index = Math.floor(Math.random() * 4); 
    console.log(index);
    var backgroundName = window.backgrounds[index];
    $('body').css('background-image', 'url(' + backgroundName + ')');
  });
  
  
  
  $('.addLegionDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    if (window.lightsOn === false) {
      for (var i = 0; i < 25; i++) {
        var dancerMakerFunctionName = $(this).data('dancer-legion-maker-function-name');
        //console.log(dancerMakerFunctionName);
        // get the maker function for the kind of dancer we're supposed to make
        var dancerMakerFunction = window[dancerMakerFunctionName];

        // make a dancer with a random position

        var dancer = new dancerMakerFunction(
          $('body').height() * Math.random(),
          $('body').width() * Math.random(),
          Math.random() * 1000
        );
        window.lights.push(dancer);
        
        $('body').append(dancer.$node);
        window.lightsOn = true;
      }
    } else {
        window.lightsOn = false; 
        window.lights.splice();
    }
  });
  
  
  $('.addCompasDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-compas-maker-function-name');
    //console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    window.dancers.push(dancer);
    
    $('body').append(dancer.$node);
  });
  
  $('.shuffleButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].jump();
    }
      
  });
  
  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    
    window.lineUpLeft = 50; // resetting
      
  });
    
    
  $('.pairUpButton').on('click', function(event) {
    window.left = 50; 
    window.top = 500; 
    for (var i = 0; i < window.dancers.length - 1; i += 2) {
      window.dancers[i].setPosition(window.top, window.left);
      window.dancers[i + 1].setPosition(window.top, window.left + 50);
      window.left += 200; 
      window.top += 50; 
    }
      
  });
  
      
    
});

