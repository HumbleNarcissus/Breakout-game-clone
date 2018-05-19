import Player from './Sprites/Player';
import Brick from './Sprites/Brick';
import Ball from './Sprites/Ball';

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
                    x: 50 + i * 60,
                    y: 50 + j * 35
                })

                brick.body.immovable = true;
                this.bricks.add(brick);
            }
        }

        this.ball = new Ball({
            scene: this,
            key: 'ball',
            x: this.sys.game.config.width/2,
            y: this.sys.game.config.height - 100
        });
    }

    update() {
        //collisons
        this.physics.add.collider(this.player, this.ball);
        this.physics.add.collider(this.ball, this.bricks, this.hit, null, this);

        //move player
        this.player.move();

        //end game if ball is below player
        if(this.ball.y > this.player.y + 20) {
            this.scene.start('PlayState');
        }
    }

    hit(ball, brick) {
        brick.destroy();
    }

}

export default PlayState;