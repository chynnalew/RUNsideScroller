import { CST } from "../CST";
import Phaser from  '../lib/phaser.js';

export default class MenuScene extends Phaser.Scene
{
  constructor ()
  {
    super({
      key: CST.SCENES.MENU
    })
  }
 
  create() 
  {
    let sky = this.add.image(0,0, CST.IMAGE.SKY).setOrigin(0).setDepth(0);
    sky.displayHeight=this.sys.game.config.height;
    sky.scaleX=sky.scaleY;
    let sand = this.add.image(0,200, CST.IMAGE.SAND).setOrigin(0).setDepth(1);
    sand.displayHeight=this.sys.game.config.height;
    sand.scaleX=sand.scaleY;
    let moon = this.add.image(-30,-10, CST.IMAGE.MOON).setOrigin(0).setDepth(2);
    moon.displayHeight=this.sys.game.config.height;
    moon.scaleX=moon.scaleY;
    
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, CST.IMAGE.LOGO).setDepth(1);
    let playButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height/ 2, CST.IMAGE.PLAY).setDepth(1);

    this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.65, CST.IMAGE.OPTIONS).setDepth(1);

    let owl = this.add.sprite(this.game.renderer.width /2, 260, CST.SPRITE.WALK);
    owl.setScale(2);
    
    this.sound.play("title_music", {
      loop:true,
      volume: 0.2,
    });

   
    this.anims.create({
      key: "walk",
      frameRate: 10,
      repeat: -1, //repeat forever!
      frames: this.anims.generateFrameNumbers(CST.SPRITE.WALK, {
        frames: [0,1,2,3,4,5]
      })
    });

    this.anims.create({
      key: "jump",
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers(CST.SPRITE.JUMP, {
        frames: [0,1,2,3,4,5]
      })
    });

    this.anims.create({
      key: "run",
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers(CST.SPRITE.RUN, {
        frames: [0,1,2,3,4,5]
      })
    })

    playButton.setInteractive();
    playButton.on("pointerover", () => {
      console.log("hover");
      owl.play("jump");
    })
    playButton.on("pointerout", () => {
      console.log("not hover");
      owl.anims.play("walk");
    })
    playButton.on("pointerup", () => {
      console.log("clicky click");
      owl.play("run");
    })
  }
}