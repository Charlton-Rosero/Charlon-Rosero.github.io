const res = require("express/lib/response");
const Band = require("../models/band");
const Member = require("../models/member");

async function getBand(req, res) {
    try {
      const band = await Band.find().populate('members','name band_position -_id');
      return res.status(200).json({ band });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async function deleteAll(req, res) {
    try {
      const { band } = req.params;
      const deleted = await Band.deleteMany({band});
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
    deleteAll

  };