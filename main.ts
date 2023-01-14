enum RadioMessage {
    message1 = 49434
}
// use arrow keys to move and W A S D keys
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.over(true, effects.confetti)
})
function radio2 () {
    radioconfig = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    radioconfig = radio.receivedPacket(RadioPacketProperty.Time)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    scene.setBackgroundColor(13)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(radioconfig)
    radio2()
    chat()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles12, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(2500)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function chat () {
    radio.setGroup(1)
    radio.sendNumber(421678326)
}
let radioconfig = 0
let mySprite: Sprite = null
game.splash("Welcome!")
mySprite = Render.getRenderSpriteVariable()
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scaling.scaleByPixels(mySprite, 9848, ScaleDirection.Vertically, ScaleAnchor.Top)
info.setLife(10)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
scene.cameraFollowSprite(mySprite)
let myIconImage = assets.image`Icon`
blockSettings.writeNumber("servrcraft config", 33)
game.splash("Beta!")
game.onUpdateInterval(1000, function () {
    info.player2.changeScoreBy(1)
})
