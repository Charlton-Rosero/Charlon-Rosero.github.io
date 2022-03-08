const db = require(`../db`);

const Song = require(`../models/song`) // IGNORE FOR NOW
const Album = require(`../models/album`);


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const song1 = await Song.find({title:`Come Together`})
  const song2 = await Song.find({title:`Baba O'Riley`})
  const song3 = await Song.find({title:`Smells Like Teen Spirit`})
  const song4 = await Song.find({title:`Bohemian Rhapsody`})


    const album = [
      {
        name: `Abbey Road`,
        released:'26 September 1969',
        albums_sold:'27.5 Million',
        Label: 'Apple',
        song: song1[0]._id,
      },
      {
        name: `Who's Next`,
        released:'14 August 1971',
        albums_sold:'N/A',
        Label: 'Track, Decca',
        song: song2[0]._id,
      },
      {
        name: `Nevermind`,
        released:'24 September 1991',
        albums_sold:'30 Million',
        Label: 'DGC',
        song: song3[0]._id,
      },
      {
        name: `A Night at the Opera`,
        released:'6 November 1975',
        albums_sold:'6 Million',
        Label: 'EMI',
        song: song4[0]._id,
      },
   
    ];
    await Album.insertMany(album);
    console.log(`Rock on!`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();