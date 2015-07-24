// Enemies our player must avoid
// Parameter: y, the enemy's y-coordinate
// Parameter: speed, the speed of the enemy
var Enemy = function(y, speed) {
    this.x = -101;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.speed * dt);
    if (this.x >= 505) {
        this.x = -101;
        y_coordinates = [72, 155, 238];
        // randomly select a new y-coordinate
        this.y = y_coordinates[Math.floor(Math.random()*y_coordinates.length)];
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Player
var Player = function() {
    this.reset();
    this.sprite = 'images/char-horn-girl.png';
};

// Player wins when reaching the water
Player.prototype.update = function(dt) {
    if (this.y === -11) {
        this.reset();
    }
};

// Send player back to start
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
};

Player.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move player
// Parameter: direction, which direction to move
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
};

// Instantiate enemies and player
var allEnemies = [new Enemy(72, 150), new Enemy(155, 200), new Enemy(238, 100)];
var player = new Player();

// Listens for key presses
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
