module.exports = app => {
    const recipe = require("../controller/recipe.controller.js");

    // Create a new recipes
    app.post("/recipe", recipe.create);

    // GET all Mrecipe
    app.get("/recipe", recipe.findAll);

    // GET one single recipe with recipeId
    app.get("/recipe/:recipesId", recipe.findOne);

    // Update one recipe with recipeId
    app.put("/recipe/:recipesId", recipe.update);

    // Delete the recipe with recipeId
    app.delete("/recipe/:recipesId", recipe.delete);

    // Delete all recipe
    app.delete("/recipe", recipe.deleteAll);
};