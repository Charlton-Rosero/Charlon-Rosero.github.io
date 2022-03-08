const res = require("express/lib/response");
const country = require("../models/country");
const Recipe = require("../models/recipe");

async function createRecipe(req, res){
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save();
        return res.status(201).json({recipe,});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
async function getRecipes(req, res) {
    try {
      const recipes = await Recipe.find().populate('country','country');
      return res.status(200).json({ recipes });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateRecipe =  (req, res) => {
    try {
      const { id } = req.params
     Recipe.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
       
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

  async function deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Recipe.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send(`deleted recipe`);
      }
      throw new Error(`Recipe not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  async function deleteAll(req, res) {
    try {
      const { recipe } = req.params;
      const deleted = await Recipe.deleteMany({recipe});
      if (deleted) {
        return res.status(200).send(`deleted recipe`);
      }
      throw new Error(`Recipe not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }



module.exports = {
    createRecipe,
    getRecipes,
    updateRecipe,
    deleteRecipe,
    deleteAll

  };