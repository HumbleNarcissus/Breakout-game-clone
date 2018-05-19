export default class Player extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        console.log(this);
        this.body.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.cursors = config.scene.input.keyboard.createCursorKeys();
    }

    move() {
        if (this.cursors.left.isDown){
            this.x -= 2;
	    } 
        
	    if (this.cursors.right.isDown){
            this.x += 2;
        } 
    }
}