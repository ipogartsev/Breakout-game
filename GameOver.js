

class GameOver extends Phaser.Scene {
    constructor() {
        super("gameover", score)
    }
    preload() {
        this.load.image("restart", "assets/buttonOver.png");
    }

    create() {
        this.add.text(game.config.width/2, game.config.height/2-100, "GAME OVER ! ", { color: "white", font: '25px Arial'}).setOrigin(0.5,0.5)
        this.buttonStart = this.add.image(game.config.width/2, game.config.height/2, "restart")
        this.buttonStart.setScale(0.5)
        this.add.text(game.config.width/2, game.config.height/2, "RESTART", { color: "blue", font: '20px Arial'}).setOrigin(0.5,0.5)
        this.buttonStart.setInteractive()
        this.buttonStart.on('pointerdown', this.goStart.bind(this), )

    }

    goStart(){
        this.scene.start("breakout")
    }

}