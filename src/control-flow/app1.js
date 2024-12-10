function getSong(cb) {
  let _song = "";
  let i = 100;

  for (i; i > 0; i--) {
    setTimeout(function () {
      _song += `${i} beers on the wall, you take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall\n`;

      if (i === 1) {
        _song += "hey let's get some more beer";
        cb(_song); // Pass the song to the callback
      }
    }, 0);
  }
}

function singSong(_song) {
  if (!_song) throw new Error("Song is '' empty, FEED ME A SONG!");
  console.log(_song);
}

// Move singSong inside the callback
getSong((song) => {
  singSong(song);
});
