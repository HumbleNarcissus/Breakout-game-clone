import Player from './Sprites/Player';

class PlayState extends Phaser.Scene {
    constructor() {
        super({
            key: 'PlayState'
        })
    }

    create() {
        this.player = new Player({
            scene: this,
            key: 'player',
            x: 240,
            y: 250
        });
    }

    update() {
        this.player.move();
    }

}

export default PlayState;