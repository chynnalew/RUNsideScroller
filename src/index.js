import Phaser from 'phaser';
import LoadScene from './scenes/LoadScene.js';


export default new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
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

