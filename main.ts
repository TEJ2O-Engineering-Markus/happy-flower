let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 5 5 5 2 . . . . . . 
    . . . . . 2 5 5 5 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . 7 . . 7 . . . . . . . . 
    . . . . . 7 . 7 . . 7 . . . . . 
    . . . . . . 7 7 . 7 . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . d d d d d d . . . . . . 
        . . . . d 1 1 d d 1 d . . . . . 
        . . . . d d 1 1 d 1 d . . . . . 
        . . . . . d d 1 d 1 1 d . . . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 f 5 f 5 f 5 5 5 . . 
        . . . f 5 5 f 5 f 5 f 5 f 5 . . 
        . . f f 5 5 f 5 f 5 f 5 5 5 . . 
        . . . f 5 5 f 5 f 5 f 5 5 5 . . 
        . . . . 5 5 f 5 f 5 f 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
