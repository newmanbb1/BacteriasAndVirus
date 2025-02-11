import Phaser from "phaser";
import Bootloader from "./scenes/Bootloader.js";
import Menu from "./scenes/Menu.js";
import UI from "./scenes/UI.js";
import Play from "./scenes/Play.js";



const CONFIG = {
  title: "Esquiva virus",
  version: "0.1",
  type: Phaser.AUTO,
  scale: {
    parent: "root",
    width: 640,
    height: 360,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 2000 },

      debug: false,
    },
  },
  scene: [Bootloader, Menu, UI, Play],
};

const game = new Phaser.Game(CONFIG);
