const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); 
const Album = require(`../models/album`);



db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const album1 = await Album.find({name:`Abbey Road`})
    
    const members = await new Member(
      {
        lead_singer: 'Paul McCArtney, John Lennon',
        lead_guitar: 'George Harrison',
        rhythm_guitar:'John Lennon',
        bass_guitar:'Paul McCartney',
        drums:'Ringo Starr',
        keyboard:'Billy Preston',
        special_guest:'Eric Clapton' 
      }
    )
    members.save()




    const band = [
      {
        name: 'The Beatles',
        Genre:'Classic Rock',
        year_formed:'1960',
        members: members._id,
        albums: album1[0]._id,
        total_albums_sold: '600 million'
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