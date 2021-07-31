const Recipes = require("../model/recipe.model.js");

// Create and Save a new recipe
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a recipe
    const recipes = new Recipes({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    });

    // Save recipe in the database
    Recipes.create(recipes, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the recipe."
            });
        else res.send(data);
    });

};

// Retrieve all recipe from the database.
exports.findAll = (req, res) => {
    Recipes.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipe."
            });
        else res.send(data);
    });
};

// Find a single recipe with a memberId
exports.findOne = (req, res) => {

};

// Update a recipe identified by the recipeId in the request
exports.update = (req, res) => {

};

// Delete a recipe with the specified recipeId in the request
exports.delete = (req, res) => {

};

// Delete all recipe from the database.
exports.deleteAll = (req, res) => {

};