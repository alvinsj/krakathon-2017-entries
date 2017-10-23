/*
  x, y: size of the window
  x, y: starting coordinate
  x, y: coordinate to arrive
  point list x, y, x, y, .... top relief (top)
  point list x, y, x, y, .... of the lower relief
*/
const windowSize = [1650, 1500];
const startCoord = [64, 680];
const coordinateToGo = [1600, 750];
const topRelief = [[0, 180], [450, 180], [800, 920], [900, 180], [1650, 530]];
const lowerRelief = [
  [0, 1300],
  [330, 1400],
  [390, 850],
  [865, 1480],
  [1080, 650],
  [1650, 1040]
];
var game = new Phaser.Game(
  windowSize[0],
  windowSize[1],
  Phaser.AUTO,
  'gameDiv'
);

var mainState = {
  preload: function() {
    if (!game.device.desktop) {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.setMinMax(
        game.width / 2,
        game.height / 2,
        game.width,
        game.height
      );
    }

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = '#71c5cf';

    game.load.image('bird', 'assets/kraken.png');
    game.load.image('pipe', 'assets/pipe.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.pipes = game.add.group();
    // this.timer = game.time.events.loop(5000, this.addRowOfPipes, this);

    this.bird = game.add.sprite(startCoord[0], startCoord[1], 'bird');
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;

    // New anchor position
    this.bird.anchor.setTo(-0.2, 0.5);

    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
    game.input.onDown.add(this.jump, this);

    this.score = 0;
    // this.labelScore = game.add.text(20, 20, '0', {
    //   font: '30px Arial',
    //   fill: '#ffffff'
    // });
    //
    for (var k = 0; k < topRelief.length; k++) {
      this.addOnePipe(topRelief[k][0], topRelief[k][1], true);
    }

    for (var k = 0; k < lowerRelief.length; k++) {
      console.log(k, lowerRelief[k][0], lowerRelief[k][1]);
      this.addOnePipe(lowerRelief[k][0], lowerRelief[k][1], false);
    }
  },

  update: function() {
    if (this.bird.y < 0 || this.bird.y > game.world.height) this.restartGame();

    game.physics.arcade.overlap(
      this.bird,
      this.pipes,
      this.hitPipe,
      null,
      this
    );

    // Slowly rotate the bird downward, up to a certain point.
    if (this.bird.angle < 20) this.bird.angle += 1;
  },

  jump: function() {
    // If the bird is dead, he can't jump
    if (this.bird.alive == false) return;

    this.bird.body.velocity.y = -350;

    // Jump animation
    game.add
      .tween(this.bird)
      .to({ angle: -20 }, 100)
      .start();
  },

  hitPipe: function() {
    // If the bird has already hit a pipe, we have nothing to do
    if (this.bird.alive == false) return;

    // Set the alive property of the bird to false
    this.bird.alive = false;

    // Prevent new pipes from appearing
    // game.time.events.remove(this.timer);

    // Go through all the pipes, and stop their movement
    this.pipes.forEach(function(p) {
      p.body.velocity.x = 0;
    }, this);
  },

  restartGame: function() {
    game.state.start('main');
  },

  currPipeIndex: 0,
  addOnePipe: function(x, y, topOrBottom) {
    for (
      y;
      topOrBottom ? y > -59 : y < windowSize[1];
      topOrBottom ? (y -= 60) : (y += 60)
    ) {
      const addPipe = (x, y) => {
        var pipe = game.add.sprite(x - 30, y, 'pipe');
        this.pipes.add(pipe);
        game.physics.arcade.enable(pipe);

        pipe.body.acceleration.x = -10;
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
        pipe.events.onOutOfBounds.add(() => {
          console.log('add it back', windowSize[x], y);
          var newPipe = addPipe(windowSize[1], y);
          newPipe.body.velocity = pipe.body.velocity;
        }, this);
        return pipe;
      };
      addPipe(x, y);
    }
  }
};

game.state.add('main', mainState);
game.state.start('main');
