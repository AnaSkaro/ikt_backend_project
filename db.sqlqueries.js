import { connection as sql } from './db.connection.js';

export const PostService = {
    create: async(newPost, result) => {
        sql.query("INSERT INTO recipe SET ?", newPost, (err, res) => {
            if (err) result(err, null);
            else result(null, { id: res.postId, ...newPost });
        });
    },
    findById: async(postId, result) => {
        sql.query(
            `SELECT * FROM recipe WHERE id = ?`, [postId],
            (err, res) => {
                if (err) result(err, null);
                else if (res.length) result(null, res[0]);
                else result({ message: "post not found" }, null);
            }
        );
    },
    getAll: async(result) => {
        sql.query("SELECT * FROM recipe", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
    updateById: async(id, post, result) => {
        sql.query(
            "UPDATE recipe SET ? where id= ?", [post, id],
            (err, res) => {
                if (err) result(null, err);
                else if (res.affectedRows == 0) result({ message: "post not found" }, null);
                else result(null, { id: id, ...post });
            }
        );
    },
    remove: async(id, result) => {
        sql.query("DELETE FROM recipe WHERE id = ?", id, (err, res) => {
            if (err) result(null, err);
            else if (res.affectedRows == 0) result({ message: "post not found" }, null);
            else result(null, res);
        });
    },
    removeAll: async(result) => {
        sql.query("DELETE FROM recipe", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
};  