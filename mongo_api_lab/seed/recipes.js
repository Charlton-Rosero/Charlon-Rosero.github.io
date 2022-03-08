const db = require(`../db`);
const Recipe = require(`../models/recipe`);
const Country = require(`../models/country`); // IGNORE FOR NOW
const { populate } = require("../models/recipe");

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
  const country1 = await new Country({ country: 'Yemen', lamb_dishes: 'Lamb Haneeth' })
  country1.save()


    const recipes = [
      {
        name: "Lamb Haneeth",
        country: country1._id,
        ingredients:"1.5 lbs of lamb meat,Green onions, chives, and garlic cloves, Cumin powder, turmeric, salt, black pepper, cinnamon powder, whole cloves and cardamom pods, bay leaves,Olive oil and Butter, (Optional)Dried or preserved lemon" ,
        image:"https://i.pinimg.com/736x/f0/4f/b7/f04fb7d8c5b6ae4e932803b9834dfc33.jpg"
      },
      //New Recipe
      // {
      //   name: "Adana kebab",
      //   country:{
      //       name: "Turkey",
      //   },
      //   ingredients:"20 oz. boneless mutton shoulder (or lamb shoulder),3 tablespoons biber salçası, 1 teaspoon acı biber salçası, 5 oz. sheep's tail fat, 1 onion,1 clove garlic,3 tablespoons chopped flat parsley,Salt",
      //   image:"https://www.seriouseats.com/thmb/DXvIgapAazQfu4gjTF64Ocd33IU=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__04__20140428-adana-kebab-22-2f4debebf43d462ba045e041a9e9add4.jpg"
      // },
   
    ];
    await Recipe.insertMany(recipes);
    console.log(`Bon Appétit`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();