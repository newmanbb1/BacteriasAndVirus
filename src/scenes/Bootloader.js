import Background from "../assets/background.png";
import Floor from "../assets/floor.png";
import Wall from "../assets/wall.png";
import Virus from "../assets/virus.png";
import CruzRoja from "../assets/redCross.png";
import Life from "../assets/life.png";
import Logo from "../assets/logo.png";

import FontImage from "../assets/font/font.png";
import FontJSON from "../assets/font/font.json";

import RedBoySprites from "../assets/redBoy/redBoySprites.png";
import RedBoyJSON from "../assets/redBoy/red_boy_atlas.json";
import RedBoyAnimated from "../assets/redBoy/red_boy_anim.json";




class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }
  init() {
    console.log("Soy init");
  }
  preload() {
    this.load.image("background", Background);
    this.load.image("floor", Floor);
    this.load.image("wall", Wall);
    this.load.image("virus", Virus);
    this.load.image("redCross", CruzRoja);
    this.load.image("life", Life);
    this.load.image("logo", Logo);

    this.load.image("font", FontImage);
    this.load.json("fontData", FontJSON);

    this.load.atlas("object", RedBoySprites, RedBoyJSON);
    this.load.animation("objectAnim", RedBoyAnimated);

    this.load.on("complete", () => {

        const fontData = this.cache.json.get("fontData");
        this.cache.bitmapFont.add("pixelFont", Phaser.GameObjects.RetroFont.Parse(this, fontData));
        this.scene.start("Menu");

    });


  }
  create() {
    //this.add.image(0, 0, "background").setOrigin(0);


  }
  update(time, delta) {

  }
}

export default Bootloader;
