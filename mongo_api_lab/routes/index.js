
const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("Lamb Recipes"));

router.post(`/recipes`, controllers.createRecipe)
router.get(`/recipes`, controllers.getRecipes);
router.put(`/recipes/:id`, controllers.updateRecipe)
router.delete(`/recipes/:id`, controllers.deleteRecipe);
router.delete(`/recipes/deleteAll/:name`, controllers.deleteAll);



module.exports = router;
