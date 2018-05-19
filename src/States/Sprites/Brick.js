export default class Brick extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.collideWorldBounds = true;
        this.body.allowGravity = false;
    }    
}