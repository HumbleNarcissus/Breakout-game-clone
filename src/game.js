import 'phaser';
import BootState from './States/BootState';
import TitleScene from './States/TitleScene';
import PlayState from './States/PlayState';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 400,
    height: 450,
    scaleMode: 0,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    },
    scene: [
        BootState,
        TitleScene,
        PlayState
    ]
};

let game = new Phaser.Game(config);
