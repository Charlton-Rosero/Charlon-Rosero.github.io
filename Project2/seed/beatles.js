const db = require(`../db`);
const Band = require(`../models/band`);
const Member = require(`../models/member`); // IGNORE FOR NOW
const Album = require(`../models/album`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
  const member1 = await new Member(
      {
        name: 'Ringo Starr',
        instruments:'Piano, Bongos, Precussion Instruments',
        band_position:'Drummer',
      })
  member1.save()
  const member2 = await new Member(
    {
      name: 'Paul McCartney',
      instruments:'Piano, Guitar, Bass',
      band_position:'Bassman',
    })
  member2.save()
  const member3 = await new Member(
    {
      name: 'John Lennon',
      instruments:'Piano, Bass Guitar, Bass',
      band_position:'Rythm Guitar',
    })
  member3.save()
  const member4 = await new Member(
    {
      name: 'George Harrison',
      instruments:'Harmonica, Sitar, Bass',
      band_position:'Lead Guitar',
    })
  member4.save()



    const bands = [
      {
        name: 'Beatles',
        Genre:'Classic Rock',
        year_formed:'1960',
        members:[member1._id, member2._id, member3._id, member4._id],
        albums:`Sgt. Pepper's Lonely Hearts Club Band`,
      },
    
   
    ];
    await Band.insertMany(bands);
    console.log(`Rock on!`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();