import { CST } from "../CST";
import MenuScene from "./MenuScene";
import Phaser from  '../lib/phaser.js';
export default class LoadScene extends Phaser.Scene
{
  constructor ()
  {
    super({
      key: CST.SCENES.LOAD
    })
  }

  init()
  {

  }
  preload ()
  {
    this.load.image("sky", "assets/image/sky.png");
    this.load.image("sand", "assets/image/sand_back.png");
    this.load.image("moon", "src/assets/image/moon.png");
    this.load.image("options_button", "assets/image/options_button.png");
    this.load.image("play_button", "assets/image/play_button.png");
    this.load.image("logo","assets/image/logo2.png");
    this.load.spritesheet("owlWalk", "assets/sprite/Owlet_Monster_Walk_6.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.spritesheet("owlJump", "assets/sprite/Owlet_Monster_Jump_8.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.spritesheet("owlRun", "assets/sprite/Owlet_Monster_RUN_6.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.audio("title_music", "assets/audio/Red Carpet Wooden Floor.mp3");

    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    })

    this.load.on("progress", (percent)=>{
      loadingBar.fillRect(0, this.game.renderer.height / 2 , this.game.renderer.width * percent, 50);
      console.log(percent);
    })

    this.load.on("complete", () =>{
      console.log("DONE!");
    })
  }
  
  create ()
  {
    this.scene.add(CST.SCENES.MENU, MenuScene, false);
    this.scene.start(CST.SCENES.MENU, "hello from loadscene!");
  } 
}