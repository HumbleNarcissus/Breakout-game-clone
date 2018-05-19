import Player from './Sprites/Player';
import Brick from './Sprites/Brick';

class PlayState extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayState' })
    }

    create() {
        //create player
        this.player = new Player({
            scene: this,
            key: 'player',
            x: this.sys.game.config.width/2,
            y: this.sys.game.config.height - 50
        });

        //create bricks group
        this.bricks = this.add.group();

        for (let i = 0; i < 5; i++){
            for( let j = 0; j < 5; j++){
                let brick = new Brick({
                    scene: this,
                    key: 'brick',
                    x: 80 + i * 60,
                    y: 50 + j * 35
                })

                brick.body.immovable = true;
                this.bricks.add(brick);
            }
        }
    }

    update() {
        //move player
        this.player.move();
    }

}

export default PlayState;