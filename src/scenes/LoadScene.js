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
    this.load.image("title_bg", "./src/assets/image/title_bg.jpg");
    this.load.image("options_button", "./src/assets/image/options_button.png");
    this.load.image("play_button", "./src/assets/image/play_button.png");
    this.load.image("logo","./src/assets/image/logo.png");
    this.load.spritesheet("cat", "./src/assets/sprite/cat.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.audio("title_music", "./src/assets/audio/shuinvy-childhood.mp3");

    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    })
    //slow down loadBar by loading the cat 100 times
    // for (let i=0; i<1000; i++){
    //   this.load.spritesheet("cat", "./src/assets/sprite/cat.png", {
    //     frameHeight: 32,
    //     frameWidth: 32
    //   });
    // }

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