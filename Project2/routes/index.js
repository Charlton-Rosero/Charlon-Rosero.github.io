const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("ROCK ON!!"));


router.get(`/band`, controllers.getBand);
router.delete(`/band/:name`, controllers.deleteAll);


module.exports = router;
