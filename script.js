function startGame() {
  myGameArea.start();
  myGameArea.draw(redSquare);
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 700;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]); 
      this.interval = setInterval(updateGameArea, 20);
  },
  draw: function(component) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = component.color;
      this.context.fillRect(component.x, component.y, component.width, component.height);
        },
};

var redSquare = {
  width: 20,
  height: 20,
  x: 10,
  y: 120,
  color: "red",
  speedX:0,
  speedY:0,
  updatePosition: function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
};
function moveup() {
  redSquare.speedY -= 1;
}

function movedown() {
  redSquare.speedY += 1;
}

function moveleft() {
  redSquare.speedX -= 1;
}

function moveright() {
  redSquare.speedX += 1;
}
function updateGameArea() {
  redSquare.updatePosition();
  myGameArea.draw(redSquare);
}
function clearmove() {
  redSquare.speedX = 0; 
  redSquare.speedY = 0; 
}