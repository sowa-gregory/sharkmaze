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
    tiles.setTileAt(location, assets.tile`transparency16`)
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
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888ddd8888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888dd8888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888d88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888d88888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888d8888888888888888888888
    8888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888888
    88888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888888888888888888d8888888888888888888888888888888
    88888888888888888888888888888888888888888888878888888888888888888888888888888888888888888dddd88888888888888888888888888888888888888888888dd888888888888888888881
    8888888888888888888888888888888888888888888877888888888888888888888888888888888dd888888ddd888888888888888888888888888d8888888888888dd888888888888888888888888111
    888888888888888888888888888888888888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddd88888888888811111
    88888888888888888888888888888888888888888888788888888888888888888888988888888888888d8888888888dddddd88888888888888888888888888888888888dd88888888888888881111111
    888888811111d88888888888888888888888888888877888888888888d11111111118888888888888888888888888888dddd888888888888888888888888888888888888888888888888888811111111
    8888811111111118888888888888888888888888888788888111188881111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888111111118
    888111111111111111888888888888888888888dd11711181111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811111888888
    1888188111118881111111888888888dd1111111117111188888888888811111111888888888888888888888888888888888888888888888888888888888888888888888888888888881111188888888
    8888888881188888811111111111881111111111877888888888881111111111111111888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
    8888888888888888888888111111181888888888878888888111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    11111188888888888888888888888888888888888788b1111111111111111111111111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888
    11111111118888888888888888888888888888887b111111111111111111111111111111111b111188888888888888888888888888888888888888888888888888888888888888888888888888888118
    11111111111118888888888888888888888888b7111111111111111111111888111111111111111111118888888888888888888888888888888888888888888888888888888888888888888881111111
    111111188811111188888888888888888888bb171111111111111188888811188111111111111111111111bbb88888888888888888888888888888888888888888888888888888888881111111111111
    8888111888888111118888888888888888811117111b1118881188888888818888888881111881111b111111111888888888888888888888888888888888888888888888888888888111111111111111
    8888888888888888111188888888888888811117881118888888888888888888888888888888888111181111111888888888888888888888888888888888888888888888888888811111111111111111
    88888888888888888818888888888888888888878811888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888c1111111111111111111
    8888888888888888888888888888888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cc1111111111111111111c11
    8888888888888888888888888888888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cccc11111111111111111111111111
    8888888888888888888888888888888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811111111111c11111111111111111111
    8888888888888888888888888888888888888887888888888888811111111111888888888888888888888888888888888888888888888888888888888888811111111111c11111c11111188118111118
    88888888888888888888888888888888888888878888888888111111111111111888888888888888888888888888888888888888888111111888888888881111c111c11111111c111188881188111118
    8888888888888888888888888888881888888888788888cc11111111111111111118888888888888888888888888888888888881111111111118888888888888111111118111c1111888811881111118
    888888c8888888888888888888888c1111111888711111111111111111111188111111c88888888888888888888888881111111111111111118818888888881111188888811111188888118881111188
    88888ccc8888888888888888888888cc111111887888888111111111111111888888811111c888888888888888888888111111cc1111111188888888888888818888888811c111888881118811111888
    8888dccc88888888888888888888888888881188878888881111188888888888888888811111188888888888888888888888881111118888888888888888888888888881111118888888188811111888
    8cccc8888888888888888888c888888888888888878888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111188888888888888888888
    cccc888888888888888888888888888888888888877888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888
    ccc888888888888888888888888888888c888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88c888888888888888888888888888c888c88888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888887788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888999999888888888877888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888988889888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888988889888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888988889888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888999999888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888e8888888888888888888e78888888889999998888888888888888888888888eeeee8ee88888888888eeeee88888e88e88ee8888888e888e88888888eeee8888e88888888
    8888e88e8e8ee888e88888888888888888ee8888888ee78888888999e88e9999eee88888eee88eee888888ee66ee66eeeee78eeee6e66ee88888888eeee88e88888888e888888888eeeee8888ee88888
    888e888888888888888e888888888888888888888888878888888988888888898888888888888888888888888888888888888ee666e66ee88888888eee888eeee8eee88888888888ee8e888ee8888888
    8888888e88888eee88888888888888888888888888888788888898888888888998888888888888888888888888888888888888868888888888888888888888888888888888888e8888888888888e888e
    88888888888888e88888888e88888888888888888888878888889888888888889888888888888888888888888888888888888888888888888888888888888888888888888888888888888e888888888e
    88888888888888888ee88888888888888888888888888788888898888888888898888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88888e88e
    88888888888e8888888888e8888888888888888888888788888898888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888888e88888e888888
    8888e88ee888888ee8e88888888888888888888888888888888898888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e888
    888888888888ee8888888888888888888888888888888888888899888888889888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e
    88e8888888e88888888888888888888888888888888888888888899988888998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8e8888e888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8e888e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e
    88888e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88
    888e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88ee
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88
    e8888888889999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ee888
    e888888999888888888888999999888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999988888888888888888888888888888888888888888
    888e89988888888888888888888899999999999999999999888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888888888887888888e888
    8999988888888888888888888888888888888888888888889999999999988888888888888888888888888888888888899988888888888888888888888888888888888888888888888e888888eee88888
    89e888e888888888888888888888888888888888888888888888889999999999888888888888888888888998888899988888888888888888888888888888888888888888888888888ee888e888888888
    88e8888888888888888888888888888888888888888888888888888889999999999998888888888899999889999988888888888888888888888888888888888888888888888888888888888888888888
    8888888888e88888888888888888888888888888888888888888888888889999999999999999999988888888888888888888888888888888888888888888888888888888eee888888e88888888888888
    e88888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e888e8888e888e88888888888
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ee888e888e88888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ee888e8888e888e8888e8e88e
    8888888888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e888eee8888888e8e8888888
    8888888888e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886e88888eee88ee8888888e8888888
    e88e88888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888eee8888eee888888
    e88888e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88888888ee888ee8888
    88888e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e888888888
    888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e88888e
    e8e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888999999999999999999999999998888888888888888888999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888899888888888888888888888888889999999999999999999988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887788777888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788887787778888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888778887777888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877887777888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888878777777888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887778778888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777878888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777878888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777878888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888787888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888888888888888888888888888
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
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
enemy1.setVelocity(50, 50)
enemy1.setBounceOnWall(true)
tiles.placeOnTile(enemy1, tiles.getTileLocation(26, 11))
controller.moveSprite(Shark, 100, 100)
scene.cameraFollowSprite(Shark)
effects.bubbles.startScreenEffect()
info.startCountdown(200)
