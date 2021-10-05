import Phaser from './lib/phaser.js';
import LoadScene from './scenes/LoadScene.js';


export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1100,
  height: 700,
  scene: [
    LoadScene
  ],
  render: {
      pixelArt: true
      //don't sharpen pixel art!
  }
});

