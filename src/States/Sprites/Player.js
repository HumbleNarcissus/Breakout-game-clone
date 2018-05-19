export default class Player extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        console.log(this);
        this.body.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.cursors = config.scene.input.keyboard.createCursorKeys();
    }

    move() {
        if (this.cursors.left.isDown){
            this.body.velocity.x -= 25;
	    } 
	    else if (this.cursors.right.isDown){
            this.body.velocity.x += 25;
        }
        else {
            this.body.velocity.x = 0;
        } 
    }
}