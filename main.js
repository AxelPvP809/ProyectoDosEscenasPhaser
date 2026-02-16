const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 900,
  backgroundColor: "hsl(0, 25%, 42%)",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [MenuScene, GameScene],
};

new Phaser.Game(config);