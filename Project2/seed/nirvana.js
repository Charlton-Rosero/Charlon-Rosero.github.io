const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); 
const Album = require(`../models/album`);


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const album3 = await Album.find({name:`Nevermind`})
    
    const members = await new Member(
      {
        lead_singer: 'Kurt Cobain',
        lead_guitar: 'Kurt Cobain',
        bass_guitar:'Krist Novoselic',
        drums:'Dave Grohl',
      }
    )
    members.save()




    const band = [
      {
        name: 'Nirvana',
        Genre:'Punk Rock',
        year_formed:'1987',
        members: members._id,
        albums: album3[0]._id,
        total_albums_sold: '75 million'
      },
    ];
    await Band.insertMany(band);
    console.log(`Rock on!`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();