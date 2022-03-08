const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); 
const Album = require(`../models/album`);


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const album1 = await Album.find({name:`A Night at the Opera`})
    
    const members = await new Member(
      {
        lead_singer: 'Freddie Mercury',
        lead_guitar: 'Brian May',
        bass_guitar:'John Deacon',
        drums:'Roger Taylor',
        keyboard:'Freddie Mercury',
        special_guest:'David Bowie' 
      }
    )
    members.save()




    const band = [
      {
        name: 'Queen',
        Genre:'Classic Rock',
        year_formed:'1970',
        members: members._id,
        albums: album1[0]._id,
        total_albums_sold: '300 million'
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