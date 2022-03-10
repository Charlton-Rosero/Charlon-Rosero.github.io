# :metal::musical_keyboard: The not so awesome Rock & Roll app :guitar::metal:
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
You shoul be able to run it locally on postman

### Endpoints for CRUD

GET  band: http://localhost:3000/Bands/band
GET  album: http://localhost:3000/Bands/album
GET  members: http://localhost:3000/Bands/member
GET  song: http://localhost:3000/Bands/song

POST  band: http://localhost:3000/Bands/band
POST  album: http://localhost:3000/Bands/album
POST  members: http://localhost:3000/Bands/member
POST  song: http://localhost:3000/Bands/song

PUT  band: http://localhost:3000/Bands/band/:id
PUT  album: http://localhost:3000/Bands/album/:id
PUT  members: http://localhost:3000/Bands/member/:id
PUT  song: http://localhost:3000/Bands/song/:id

DELETE  band: http://localhost:3000/Bands/band/:id
DELETE  album: http://localhost:3000/Bands/album/:id
DELETE  members: http://localhost:3000/Bands/member/:id
DELETE  song: http://localhost:3000/Bands/song/:id

