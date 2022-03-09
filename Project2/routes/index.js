const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("ROCK ON!!"));

router.post(`/song`, controllers.createSong);
router.post(`/album`, controllers.createAlbum);
router.post(`/member`, controllers.createMember);
router.post(`/band`, controllers.createBand);
router.get(`/band`, controllers.getBand);
router.get(`/song`, controllers.getSong);
router.get(`/album`, controllers.getAlbum);
router.get(`/member`, controllers.getMember);
router.put(`/band/:id`, controllers.updateBand);
router.put(`/album/:id`, controllers.updateAlbum);
router.delete(`/band/:name`, controllers.deleteAll);
router.delete(`/band/:id`, controllers.deleteById);

module.exports = router;
