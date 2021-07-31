const sql = require("./db.js");

// constructor
const Recipes = function(recipes) {
    this.id = recipe.id;
    this.title = recipe.title;
    this.description = recipe.description;
    this.image = recipe.image;
};

Recipes.create = (newRecipes, result) => {
    sql.query("INSERT INTO recipe SET ?", newrecipes, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created recipes: ", { id: res.insertId, ...newRecipes });
        result(null, { id: res.insertId, ...newRecipes });
    });
};

Recipes.findById = (recipesId, result) => {
    sql.query(`SELECT * FROM recipe WHERE id = ${recipesId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found recipes: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found recipes with the id
        result({ kind: "not_found" }, null);
    });
};

Recipes.getAll = result => {
    sql.query("SELECT * FROM recipe", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("recipe: ", res);
        result(null, res);
    });
};

Recipes.updateById = (id, recipes, result) => {
    sql.query(
        "UPDATE recipe SET title = ?, description = ?, image = ? WHERE id = ?",
        [recipes.title, recipes.description, recipes.image, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found recipe with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated recipes: ", { id: id, ...recipe });
            result(null, { id: id, ...recipe });
        }
    );
};

Recipes.remove = (id, result) => {
    sql.query("DELETE FROM recipe WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found recipe with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted recipes with id: ", id);
        result(null, res);
    });
};

Recipes.removeAll = result => {
    sql.query("DELETE FROM recipe", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} recipe`);
        result(null, res);
    });
};

module.exports = Recipes;