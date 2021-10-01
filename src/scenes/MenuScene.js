import { CST } from "../CST";
export default class MenuScene extends Phaser.Scene
{
  constructor ()
  {
    super({
      key: CST.SCENES.MENU
    })
  }
  init(data)
  {
    console.log(data);
    console.log("got it!");
  }
  create() 
  {
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "logo").setDepth(1);

    this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0);
    
    let playButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height/ 2, "play_button").setDepth(1);

    this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.65, "options_button").setDepth(1);

    let hoverSprite = this.add.sprite(100, 100, "cat");
    hoverSprite.setScale(2);

    playButton.setInteractive();
    playButton.on("pointerover", () => {
      console.log("hover");
      hoverSprite.setVisible(true);
      hoverSprite.x = playButton.x - playButton.width;
      hoverSprite.y = playButton.y - playButton.height;
    })
    playButton.on("pointerout", () => {
      console.log("not hover");
      hoverSprite.setVisible(false);
    })
    playButton.on("pointerup", () => {
      console.log("clicky click");
    })
  }
}