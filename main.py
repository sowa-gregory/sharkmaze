def on_overlap_tile(sprite, location):
    Shark.destroy(effects.fire, 500)
    Shark.set_velocity(0, 0)
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile3,
    on_overlap_tile)

def on_left_pressed():
    Shark.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile2(sprite2, location2):
    tiles.set_tile_at(location2, sprites.dungeon.collectible_insignia)
    music.sonar.play()
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile2)

def on_right_pressed():
    Shark.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_destroyed(sprite3):
    game.over(False)
sprites.on_destroyed(SpriteKind.player, on_on_destroyed)

Shark: Sprite = None
tiles.set_tilemap(tilemap("""
    Level1 m M
"""))
Shark = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.set_background_image(img("""
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
"""))
Shark.set_position(50, 48)
enemy1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
enemy1.set_velocity(50, 50)
enemy1.set_bounce_on_wall(True)
tiles.place_on_tile(enemy1, tiles.get_tile_location(26, 11))
controller.move_sprite(Shark, 100, 100)
scene.camera_follow_sprite(Shark)
effects.bubbles.start_screen_effect()
info.start_countdown(200)