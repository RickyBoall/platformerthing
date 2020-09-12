class Controller(){
  //Controller Class -> covers Player movement (aka user inputs)
  //Initiaze the canvas
  function renderCanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, width);
  }

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var width = 1200;
  var height = 600;
  ctx.canvas.height = height;
  ctx.canvas.width = width;
  renderCanvas();

  //initialize game
    //create player obj
    //create enemy objs
    //create terrain objs
    //trigger display and game logic

  //check for user input

    //w or spacebar -> jump

    //d  ->  move right

    //a  ->  move left

    //s  ->  move through (down) some platforms (thin ones), can use solid state

    //right-click or left-click  ->  attack
}
