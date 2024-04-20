let sound1, sound2, sound3, sound4, playButton, stopButton, player, file;

function setup() {
  sound1 = loadSound('assets/sound1.mp3');
  sound2 = loadSound('assets/sound2.mp3');
  sound3 = loadSound('assets/sound3.mp3');
  sound4 = loadSound('assets/sound4.mp3');

  playButton = createButton('play');
  playButton.style('font-size', '30px');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');
  playButton.style('padding','1em');
  playButton.position(10,10);
  playButton.mousePressed(function playSound(){
    file = random(0,4);
    if (file < 1) {
      player = sound1;
    } else if (file > 1 && file < 2) {
      player = sound2;
    } else if (file > 2 && file < 3) {
      player = sound3;
    } else if (file > 3) {
      player = sound4;
    }
    player.play();
  })
  
  stopButton = createButton('stop');
  stopButton.style('font-size', '30px');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.style('padding','1em');
  stopButton.position(10,120);
  stopButton.mousePressed(function stopSound(){
    player.stop();
  })
}
