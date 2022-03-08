const db = require(`../db`);
const Song = require(`../models/song`) // IGNORE FOR NOW


db.on(`error`, console.error.bind(console, `MongoDB connection error`));


const main = async () => {
    


    const song = [
        {
            title: `Getting Better`,
            writer:'John lennon & Paul McCartney',
            runtime: '2:47',
            singer:'Paul McCartney'
        }
    ]
    await Song.insertMany(song);
    console.log(`We hope you will enjoy the show`);

//    const album = await new Album(
//       {
//         name: `Sgt. Pepper's Lonely Hearts Club Band`,
//         released:'26 May 1967',
//         albums_sold:'32 Million',
//         Label: 'Parlophone ',
//         // song: song._id,
//       })
//     album.save()


   
};

  const run = async () => {
    await main();
    db.close();
  };
  
  run();