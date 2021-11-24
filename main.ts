scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    Shark.destroy(effects.fire, 500)
    Shark.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Shark.setImage(img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.collectibleInsignia)
    music.sonar.play()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Shark.setImage(img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let Shark: Sprite = null
tiles.setTilemap(tilemap`Level1 m M`)
Shark = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Player)
Shark.setPosition(50, 48)
let enemy1 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
enemy1.setVelocity(0, 0)
enemy1.setBounceOnWall(true)
tiles.placeOnTile(enemy1, tiles.getTileLocation(25, 11))
controller.moveSprite(Shark, 100, 100)
scene.cameraFollowSprite(Shark)
effects.bubbles.startScreenEffect()
info.startCountdown(30)
