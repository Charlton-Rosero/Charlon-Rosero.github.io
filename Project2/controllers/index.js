
const Band = require("../models/band");
const Member = require("../models/member");
const Album = require("../models/album");
const Song = require("../models/song");
const member = require("../models/member");

async function createSong(req, res){
  try {
      const song = await new Song(req.body)
      await song.save();
      return res.status(201).json({song});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
async function createAlbum(req, res){
  try {
      const album = await new Album(req.body)
      await album.save();
      return res.status(201).json({album});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}

async function createMember(req, res){
  try {
      const member = await new Member(req.body)
      await member.save();
      return res.status(201).json({member});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}

async function createBand(req, res){
  try {
      const band = await new Band(req.body)
      await band.save();
      return res.status(201).json({band});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
async function getSong(req, res) {
  try {
    const song = await Song.find();
    return res.status(200).json({song});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function getAlbum(req, res) {
  try {
    const album = await Album.find().populate('song');
    return res.status(200).json({album});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function getMember(req, res) {
  try {
    const member = await member.find();
    return res.status(200).json({member});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getBand(req, res) {
    try {
      const band = await Band.find().populate('members',' lead_guitar lead_singer rhythm_guitar bass_guitar drums keyboard special_guest -_id ').populate('albums','name released albums_sold Label song -_id');
      return res.status(200).json({band});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateBand =  (req, res) => {
    try {
      const { id } = req.params
     Band.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(recipe)
          res.json(recipe)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  const updateAlbum =  (req, res) => {
    try {
      const { id } = req.params
     Album.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(recipe)
          res.json(recipe)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  async function deleteAll(req, res) {
    try {
      const { name } = req.params;
      const deleted = await Band.deleteMany({name});
      if (deleted) {
        return res.status(200).send(`Delete Band`);
      }
      throw new Error(`Band not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  module.exports = {
    getBand,
    getAlbum,
    getSong,
    getMember,
    deleteAll,
    updateBand,
    updateAlbum,
    createBand,
    createSong,
    createAlbum,
    createMember
   
  };