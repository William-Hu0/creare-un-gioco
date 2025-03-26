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
    }
  };