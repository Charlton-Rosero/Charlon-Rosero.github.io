const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); 
const Album = require(`../models/album`);


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const album2 = await Album.find({name:`Who's Next`})
    
    const members = await new Member(
      {
        lead_singer: 'Roger Daltrey',
        lead_guitar: 'Pete Townshend',
        bass_guitar:'John Entwistle',
        drums:'Keith Moon',
      }
    )
    members.save()




    const band = [
      {
        name: 'The Who',
        Genre:'Classic Rock',
        year_formed:'1964',
        members: members._id,
        albums: album2[0]._id,
        total_albums_sold: '100 million'
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