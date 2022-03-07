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
  // const member1 = await new Member(
  //     {
  //       name: 'Ringo Starr',
  //       instruments:'Piano, Bongos, Precussion Instruments',
  //       band_position:'Drummer',
  //     })
  // member1.save()
  // const member2 = await new Member(
  //   {
  //     name: 'Paul McCartney',
  //     instruments:'Piano, Guitar, Bass',
  //     band_position:'Bassman',
  //   })
  // member2.save()
  // const member3 = await new Member(
  //   {
  //     name: 'John Lennon',
  //     instruments:'Piano, Bass Guitar, Bass',
  //     band_position:'Rhythm Guitar',
  //   })
  // member3.save()
  // const member4 = await new Member(
  //   {
  //     name: 'George Harrison',
  //     instruments:'Harmonica, Sitar, Bass',
  //     band_position:'Lead Guitar',
  //   })
  // member4.save()

//     const song = await new Song(
//     {
//       title: `Getting Better`,
//       writer:'John lennon & Paul McCartney',
//       runtime: '2:47',
//       singer:'Paul McCartney'
//     })
//  song.save()

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
        name: 'The Beatles',
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