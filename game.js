let game;
let score ;
let lives ;

window.onload = function() {

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        
        parent: 'game',
        scene: [ Start, Breakout, GameOver ],
        physics: {
            default: 'arcade'
        }
    };

game = new Phaser.Game(config);

} 