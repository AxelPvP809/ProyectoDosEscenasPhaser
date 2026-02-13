class EscenaPrincipal extends Phaser.Scene {
  constructor() {
    super("juego");
  }

  preload() {
    this.load.image("player", "assets/PJ1.png");
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.jugador = this.physics.add.sprite(200, 200, "player");
    this.jugador.setScale(0.2);

    this.jugador.setCollideWorldBounds(true);
  }

  update() {
    const speed = 400;

    this.jugador.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-speed);
    }

    if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
      this.jugador.setVelocityY(-speed);
    }

    if (this.cursors.down.isDown) {
      this.jugador.setVelocityY(speed);
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: "#282828ff",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: EscenaPrincipal,
};

const game = new Phaser.Game(config);
