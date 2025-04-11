var running = [
  "https://i.ibb.co/M7WMMSF/Run-000.png",
  "https://i.ibb.co/PNRvt4b/Run-001.png",
  "https://i.ibb.co/0GwK00G/Run-002.png",
  "https://i.ibb.co/MZbd23L/Run-003.png",
  "https://i.ibb.co/TtbP0D7/Run-004.png",
  "https://i.ibb.co/TbZW4w6/Run-005.png",
  "https://i.ibb.co/hy7w9m2/Run-006.png",
  "https://i.ibb.co/pRfrF4w/Run-007.png",
  "https://i.ibb.co/d49Dn2N/Run-008.png",
  "https://i.ibb.co/0DZhJWJ/Run-009.png"
];

var animatedObject = {
  speedX: 0,
  speedY: 0,
  width: 60,
  height: 60,
  x: 10,
  y: 120,
  imageList: [],
  contaFrame: 0,
  actualFrame: 0,
  image:"",
  tryX: 0,
  tryY: 0,

  update: function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.contaFrame++;
    if (this.contaFrame == 3) {
      this.contaFrame = 0;
      this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
      console.log(this.actualFrame);
      this.image = this.imageList[this.actualFrame];
    }
  },

  loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "https://i.ibb.co/M7WMMSF/Run-000.png";

    for (imgPath of running) {
      var img = new Image(this.width, this.height);
      img.src = imgPath;
      this.imageList.push(img);
      console.log(img);
    }
    this.image = this.imageList[this.actualFrame];
  },
  update: function() {
    this.tryY = this.y + this.speedY;
    this.tryX = this.x + this.speedX;

    //Prima di spostarmi realmente verifico che non ci siano collisioni
    this.crashWith(bushObject);

    this.contaFrame++;
    if (this.contaFrame == 3) {
      this.contaFrame = 0;
      this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
      this.image = this.imageList[this.actualFrame];
    }
  },
  crashWith: function(otherobj) {
    var myleft = this.tryX;
    var myright = this.tryX + this.width;
    var mytop = this.tryY;
    var mybottom = this.tryY + this.height;
    var endleft = 0;
    var endright = 1000;
    var endup = 0;
    var endown = 700;
    var crash = false; 

    var collisionWithOther = false;
    if (otherobj) {
        var otherleft = otherobj.x;
        var otherright = otherobj.x + otherobj.width;
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + otherobj.height;

        if (!((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright))) {
            collisionWithOther = true;
            crash = true;
        }
    }

    var collisionWithCanvas = false;
    if (myleft < endleft) {
        collisionWithCanvas = true;
        crash = true;
    }
    if (myright > endright) {
        collisionWithCanvas = true;
        crash = true; 
    }
    if (mytop < endup) {
        collisionWithCanvas = true;
        crash = true; 
    }
    if (mybottom > endown) {
        collisionWithCanvas = true;
        crash = true; 
    }
    if (!crash) {
        this.x = this.tryX;
        this.y = this.tryY;
    }

    return crash;
},
    }
