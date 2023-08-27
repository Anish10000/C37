class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width/2 - 280,height - 100)
    car2 = createSprite(width/2 + 40,height - 100)

    car1.addImage(car1_img);
    car1.scale = 0.1;

    car2.addImage(car2_img);
    car2.scale = 0.1;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElements();
    //image(name of the image, x position, y position, width, height)
    image(track, 0, -height*5, width, height*6)
    drawSprites();
  }

  update(state){
   database.ref("/").update({
    gameState:state
   })
  }



}


