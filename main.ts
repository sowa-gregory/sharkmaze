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
controller.moveSprite(Shark, 100, 100)
scene.cameraFollowSprite(Shark)
effects.bubbles.startScreenEffect()
info.startCountdown(200)
