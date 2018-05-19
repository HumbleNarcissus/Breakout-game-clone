class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'
        })
    }


    preload() {
    }

    create() {
        let graphics = this.add.graphics();
        this.add.text(200, 100, 'Title Screen. Press space to continue.', {color: '#00ff00', align: 'center'})
        this.input.keyboard.on('keydown_SPACE', event => this.scene.start('PlayState'));
    }

}

export default TitleScene;