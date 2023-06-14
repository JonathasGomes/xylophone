// const audio = document.getElementById('meuAudio');
const keys = document.querySelectorAll('.tecla');

const playNote = (note) => {
  const audio = new Audio(`/audios/${note}.mp3`);
  audio.play();
};

const handleMouseDown = (key) => {
  playNote(key.getAttribute('data-note'));
  
  key.style.background = key.getAttribute('data-pressed-color');
};

const handleMouseUp = (key) => {
    key.style.background = key.getAttribute('data-original-color');
}


keys.forEach((key) => {
  key.addEventListener('mousedown', () => handleMouseDown(key));

  key.addEventListener('mouseup', () => handleMouseUp(key));
});

// var elementoLaranja = document.querySelector('.tecla');
// elementoLaranja.addEventListener('click', reproduzirAudio);

const teclaApertada = {
    "q": () => handleMouseDown(keys[0]),
    "w": () => handleMouseDown(keys[1]),
    "e": () => handleMouseDown(keys[2]),
    "r": () => handleMouseDown(keys[3]),
    "t": () => handleMouseDown(keys[4]),
    "y": () => handleMouseDown(keys[5]),
    "u": () => handleMouseDown(keys[6]),
    "i": () => handleMouseDown(keys[7])
}

const teclaSoltada = {
    "q": () => handleMouseUp(keys[0]),
    "w": () => handleMouseUp(keys[1]),
    "e": () => handleMouseUp(keys[2]),
    "r": () => handleMouseUp(keys[3]),
    "t": () => handleMouseUp(keys[4]),
    "y": () => handleMouseUp(keys[5]),
    "u": () => handleMouseUp(keys[6]),
    "i": () => handleMouseUp(keys[7])
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    teclaApertada[event.key]()
});

document.addEventListener('keyup', (event) => {
    teclaSoltada[event.key]()
});