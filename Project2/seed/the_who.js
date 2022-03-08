const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); // IGNORE FOR NOW
// const Song = require(`../models/song`)
const Album = require(`../models/album`);


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
    
    const members = await new Member(
      {
        lead_Singer: 'Paul McCArtney, John Lennon',
        lead_guitar: 'George Harrison',
        rhythm_guitar:'John Lennon',
        bass_guitar:'Paul McCartney',
        drums:'Ringo Starr',
        keyboard:'Billy Preston',
        special_guest:'Eric Clapton' 
      }
    )
    members.save()


   const album = await new Album(
      {
        name: `Sgt. Pepper's Lonely Hearts Club Band`,
        released:'26 May 1967',
        albums_sold:'32 Million',
        Label: 'Parlophone ',
        // song: song._id,
      })
    album.save()



    const band = [
      {
        name: 'The Who',
        Genre:'Classic Rock',
        year_formed:'1960',
        members: members._id,
    //  members:[member1._id, member2._id, member3._id, member4._id],
        albums: album._id,
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