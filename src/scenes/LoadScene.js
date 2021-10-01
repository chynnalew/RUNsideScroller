import { CST } from "../CST";
import MenuScene from "./MenuScene";
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
    this.load.image("sky", "./src/assets/image/sky.png");
    this.load.image("sand", "./src/assets/image/sand_back.png");
    this.load.image("moon", "./src/assets/image/moon.png");
    this.load.image("options_button", "./src/assets/image/options_button.png");
    this.load.image("play_button", "./src/assets/image/play_button.png");
    this.load.image("logo","./src/assets/image/logo2.png");
    this.load.spritesheet("owlWalk", "./src/assets/sprite/Owlet_Monster_Walk_6.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.spritesheet("owlJump", "./src/assets/sprite/Owlet_Monster_Jump_8.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.spritesheet("owlRun", "./src/assets/sprite/Owlet_Monster_RUN_6.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.audio("title_music", "./src/assets/audio/Red Carpet Wooden Floor.mp3");

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