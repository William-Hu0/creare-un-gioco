function startGame() {
  myGameArea.start();
  console.log(animatedObject);
  animatedObject.loadImages();
  bushObject.loadImages();
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 1000;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
  },

  draw: function(component) {
    this.context.fillStyle = component.color;
    this.context.fillRect(
      component.x,
      component.y,
      component.width,
      component.height
    );
  },

  drawGameObject: function(gameObject) {
    this.context.drawImage(
      gameObject.image,
      gameObject.x,
      gameObject.y,
      gameObject.width,
      gameObject.height
    );
  },

  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function updateGameArea() {
  myGameArea.clear();
  animatedObject.update();
  myGameArea.drawGameObject(animatedObject);
  myGameArea.drawGameObject(bushObject)
}

function moveup() {
  animatedObject.speedY -= 2;
}

function movedown() {
  animatedObject.speedY = 2;
}

function moveleft() {
  animatedObject.speedX -= 2;
}

function moveright() {
  animatedObject.speedX = 2;
}

function clearmove() {
  animatedObject.speedX = 0;
  animatedObject.speedY = 0;
}
var bushObject = {
  width: 100,
  height: 50,
  x: 100,
  y: 270 - 50,

  loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "https://i.ibb.co/CPdHYdB/Bush-1.png";

    for (imgPath of running) {
      var img = new Image(this.width, this.height);
      img.src = imgPath;
      this.imageList.push(img);
      console.log(img);
    }
    this.image = this.imageList[this.actualFrame];
  }
};
document.addEventListener('keydown', (event) => {
  if(event.key === 'w') {
    moveup()
  }
  if(event.key === 'a') {
    moveleft()
  }
  if(event.key === 's') {
    movedown()
  }
  if(event.key === 'd') {
    moveright()
  }

})
function animatedObject(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;    
  this.speedX = 0;
  this.speedY = 0;    
  this.gravity = 0.05;
  this.gravitySpeed = 0;
  this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;        
  }
}