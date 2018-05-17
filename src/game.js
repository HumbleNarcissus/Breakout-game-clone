import 'phaser';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 400,
    height: 240,
    scaleMode: 0,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    console.log("PRELOAD");
}

function create ()
{
    console.log("CREATE");
}

function update ()
{
    console.log("UPDATE");
}