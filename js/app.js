// Enemies our player must avoid
// Parameter: y, the enemy's y coordinate
// Patameter: speed, the speed of the enemy
var Enemy = function(y, speed) {
    this.x = -101;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    if (this.x >= 505) {
        this.x = -101;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 202;
    this.y = 404;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction === 'left' &&  this.x > 0) {
        this.x = this.x - 101;
    } else if (direction === 'up' && this.y > 0) {
        this.y = this.y - 83;
    } else if (direction === 'right' && this.x < 404) {
        this.x = this.x + 101;
    } else if (direction === 'down' && this.y < 332) {
        this.y = this.y + 83;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [new Enemy(72, 150), new Enemy(155, 200), new Enemy(238, 100)];

// Place the player object in a variable called player

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
