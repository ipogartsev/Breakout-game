

class Start extends Phaser.Scene {
    constructor() {
        super("start")
    }
    preload() {
        this.load.image("start", "assets/button.png");
    }

    create() {
        
        // let buttonStart = this.add.text(200, 200, "START",{color: "white"}).setOrigin(0.5,0.5)
        this.buttonStart = this.add.image(game.config.width/2, game.config.height/2, "start")
        this.buttonStart.setScale(0.5)
        this.add.text(game.config.width/2, game.config.height/2, "START", { color: "blue", font: '25px Arial'}).setOrigin(0.5,0.5)
        this.buttonStart.setInteractive()
        this.buttonStart.on('pointerdown', this.goStart.bind(this), )


    }

    goStart(){
        this.scene.start("breakout")}

}