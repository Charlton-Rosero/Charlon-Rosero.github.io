const db = require(`../db`);
const Song = require(`../models/song`) // IGNORE FOR NOW


db.on(`error`, console.error.bind(console, `MongoDB connection error`));


const main = async () => {
    

    const song = [
        {
            title: `Come Together`,
            writer:'John lennon & Paul McCartney',
            runtime: '4:20',
            singer:'John Lennon'
        },
        {
            title: `Baba O'Riley`,
            writer:'Pete Townshend',
            runtime: '5:00',
            singer:'Roger Daltrey'
        },
        {
            title: `Smells Like Teen Spirit`,
            writer:'Kurt Cobain, Dave Grohl, Krist Novoselic',
            runtime: '5:01',
            singer:'Kurt Cobain'
        },
        {
            title: `Bohemian Rhapsody`,
            writer:'Freddie Mercury',
            runtime: '5:54',
            singer:'Freddie Mercury'
        },
        
    ]
    await Song.insertMany(song);
    console.log(`We hope you will enjoy the show`);

   
};

  const run = async () => {
    await main();
    db.close();
  };
  
  run();