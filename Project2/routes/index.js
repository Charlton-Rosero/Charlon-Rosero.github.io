const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("ROCK ON!!"));

router.post(`/song`, controllers.createSong);
router.post(`/album`, controllers.createAlbum);
router.post(`/band`, controllers.createBand);
router.get(`/band`, controllers.getBand);
router.get(`/album`, controllers.getAlbum);
router.put(`/band/:id`, controllers.updateBand)
router.delete(`/band/:name`, controllers.deleteAll);


module.exports = router;
