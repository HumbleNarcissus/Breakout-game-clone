class BootState extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootState'
        })
    }

    preload() {
        this.load.image('player', 'assets/images/player.png');
        this.load.image('brick', 'assets/images/brick.png');
        this.load.image('ball', 'assets/images/ball.png');
    }

    create() {
        this.scene.start('PlayState');
    }

}

export default BootState;