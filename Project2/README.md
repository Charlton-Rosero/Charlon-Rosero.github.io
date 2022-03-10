# :metal::musical_keyboard: The not so awesome Rock & Roll database :guitar::metal:
The not-so-awesome Rock & Roll app gives you a list of bands, their members, most popular album, the year it was formed , etc. There are only a few bands listed right now ,but you can always add on to it

## Installation
First, you need to clone my repo. To do that open your terminal and type git clone followed by the repo link.

```bash
git clone #repo link#
```
make sure to replace #repo link# with the actual repo link.

Then open VisualStudioCode Bash terminal.


## Populating seed file
cd into the file and run the following command on your terminal

```bash
node seed/songs.js
node seed/albums.js
node seed/beatles.js
node seed/the_who.js
node seed/queen.js
node seed/nirvana.js
```

## Running on Postman
I am going to assume that you have postman downloaded, if not download it.
then start the server in your terminal using the command below

```bash
npm start
```
You should be able to run it locally on postman

### Endpoints for CRUD

1. GET  band: http://localhost:3000/Bands/band
2. GET  album: http://localhost:3000/Bands/album
3. GET  members: http://localhost:3000/Bands/member
4. GET  song: http://localhost:3000/Bands/song

1. POST  band: http://localhost:3000/Bands/band
2. POST  album: http://localhost:3000/Bands/album
3. POST  members: http://localhost:3000/Bands/member
4. POST  song: http://localhost:3000/Bands/song

1. PUT  band: http://localhost:3000/Bands/band/:id
2. PUT  album: http://localhost:3000/Bands/album/:id
3. PUT  members: http://localhost:3000/Bands/member/:id
4. PUT  song: http://localhost:3000/Bands/song/:id

1. DELETE  band: http://localhost:3000/Bands/band/:id
2. DELETE  album: http://localhost:3000/Bands/album/:id
3. DELETE  members: http://localhost:3000/Bands/member/:id
4. DELETE  song: http://localhost:3000/Bands/song/:id


Album Schema
```
const album = new Schema( {
    name: { type: String, required: true },
    released:{ type: String, required: true },
    albums_sold:{type: String, required: true},
    Label:{type: String, required: true },
    song: {type: Schema.Types.ObjectId, ref: 'Songs'},
    
 },

 {timestamps: true},
 )
```
Band Schema

```
const Band = new Schema( {
    name: { type: String, required: true },
    Genre:{type: String, required: true},
    year_formed:{type:String, required: true},
    members:{type: Schema.Types.ObjectId, ref: 'Members'}, // referrence member.js
    albums:{type: Schema.Types.ObjectId, ref: 'Albums'}, // reference album
    total_albums_sold: {type: String, required: false}
 },

 {timestamps: true},
 )
```

member Schema
```
const Members = new Schema( {
    lead_singer: { type: String, required: true },
    lead_guitar: { type: String, required: true },
    rhythm_guitar:{ type: String, required: false },
    bass_guitar:{type: String, required: true},
    drums:{type: String, required: true},
    keyboard:{type:String, required: false},
    special_guest:{type:String, required: false} 
 },

 {timestamps: true},
 )
```

Song Schema

```
const Song = new Schema( {
    title: { type: String, required: true },
    writer:{type: String, required: true}, 
    runtime:{type:String, required: true},
    singer:{type:String, required: true}
},
 {timestamps: true},
)
```

