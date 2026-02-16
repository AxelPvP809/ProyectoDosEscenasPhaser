class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    this.add.text(700, 300, "MENÚ INICIAL", {
      fontSize: "60px",
      color: "#ffffff",
    });

    const boton = this.add.text(700, 400, "PLAY", {
        fontSize: "50px",
        color: "#7378b9",
        backgroundColor: "#f7ceff",
        padding: {x:20, y:20},
    });

    boton.setInteractive();
    boton.on("pointerdown", () => {
        this.scene.start("GameScene");
        this.scene.stop("MenuScene");
    });


  }
}
