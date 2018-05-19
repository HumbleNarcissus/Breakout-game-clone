export default class Ball extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.velocity.x = 200;
        this.body.velocity.y = 200;

        this.body.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.body.bounce.setTo(1);
    }    
}