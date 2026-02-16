class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("moneda", "assets/coin.png");
    this.load.spritesheet("player", "assets/SpriteSheet2.png", {
      frameWidth: 192,
      frameHeight: 180,
    });
  }

  create() {

    this.teclaP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    this.anims.create({
      key:"caminar",
      frames:this.anims.generateFrameNames("player", {start:0, end:8}),
      frameRate:10,

    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.jugador = this.physics.add.sprite(200, 200, "player");
    this.jugador.setScale(1);

    this.jugador.setCollideWorldBounds(true);

    this.coin1 = this.physics.add.sprite(400, 200, "moneda");
    this.coin2 = this.physics.add.sprite(600, 200, "moneda");
    this.coin3 = this.physics.add.sprite(800, 200, "moneda");

    this.physics.add.collider(this.jugador, this.coin1, this.tomarMoneda, null, this);
    this.physics.add.overlap(this.jugador, this.coin2, this.tomarMoneda, null, this);
    this.physics.add.overlap(this.jugador, this.coin3, this.tomarMoneda, null, this);

    this.coin1.setScale(0.1);
    this.coin2.setScale(0.1);
    this.coin3.setScale(0.1);

    this.coin1.body.allowGravity = false;
    this.coin2.body.allowGravity = false;
    this.coin3.body.allowGravity = false;

    this.puntaje = 0;
    this.textoPuntaje = this.add.text(20, 20, "Puntaje: 0",
      {
        fontSize: "20px",
        color: "#ffffff",
      }
    )
  }

  tomarMoneda(jugador, moneda) {
    moneda.destroy();

    this.puntaje++;
    this.textoPuntaje.setText("Puntaje: " + this.puntaje);


  }

  update() {
    const speed = 400;
    this.jugador.setVelocity(0);

    let moving = false;

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-speed);
      moving = true;
    }

    if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(speed);
      moving = true;
    }

    if (this.cursors.up.isDown) {
      this.jugador.setVelocityY(-speed);
      moving = true;
    }

    if (this.cursors.down.isDown) {
      this.jugador.setVelocityY(speed);
      moving = true;
    }

    if (moving) {
      if (!this.jugador.anims.isPlaying || this.jugador.anims.currentAnim.key !== "caminar") {
        this.jugador.play("caminar");
      }
    } else {
      this.jugador.stop();
      this.jugador.setFrame(0);
    }

    if (Phaser.Input.Keyboard.JustDown(this.teclaP)) {
      this.scene.start("MenuScene");
      this.scene.stop("GameScene");
    }

  }
}
