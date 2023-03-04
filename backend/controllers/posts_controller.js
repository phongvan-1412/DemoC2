const posts = require('../models/entities/posts');
const PostsDao = require('../models/dao/postsdao');
const category = require('../models/entities/category');
const CategoryDao = require('../models/dao/categorydao');

module.exports = class posts_controller {
    postAddPosts(req, res) {
        var pos_id = "";
        var created_at = req.body.created_at;
        var end_at = req.body.end_at;
        var article_title = req.body.article_title;

        var pos_image = req.body.pos_image;
        req.files.img.mv("./public/images/Posts/" + pos_image);

        var sub_content = req.body.sub_content;
        var main_content = req.body.main_content;

        var thumbnail = req.body.thumbnail;
        req.files.thumbnailImg.mv("./public/images/Posts/" + thumbnail);

        var cmt_count = "";
        var like_count = "";
        var pos_status = req.body.pos_status;
        var stack_id = req.body.stack_id;
        var cate_id = req.body.cate_id ;
        var acc_id = req.body.acc_id;

        var ingredient = req.body.ingredient;

        var instruction1 = req.body.instruction1;
        var instruction2 = req.body.instruction2;
        var instruction3 = req.body.instruction3;
        var instruction4 = req.body.instruction4;
        var instruction5 = req.body.instruction5;
        var instruction6 = req.body.instruction6;
        var instruction7 = req.body.instruction7;
        var instruction8 = req.body.instruction8;
        var instruction9 = req.body.instruction9;
        var instruction10 = req.body.instruction10;

        var posItem = new posts(
            pos_id,
            created_at,
            end_at,
            article_title,
            pos_image,
            sub_content,
            main_content,
            cmt_count,
            like_count,
            pos_status,
            stack_id,
            cate_id,
            acc_id,
            thumbnail,
            ingredient,
            instruction1,
            instruction2,
            instruction3,
            instruction4,
            instruction5,
            instruction6,
            instruction7,
            instruction8,
            instruction9,
            instruction10
        );
 
        var dao = new PostsDao();

        dao.AddPosts(posItem, (err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                console.log(result.rowsAffected.length)
                if (result.rowsAffected.length > 0) {
                    res.json("Succesful")
                } else {
                    res.json("Fail")
                }
            }
        });
    }

    getAllPosts(req, res) {
        var dao = new PostsDao();

        dao.GetAllPosts((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getFreePosts(req, res) {
        var dao = new PostsDao();

        dao.GetFreePosts((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getReceiptPosts(req, res) {
        var dao = new PostsDao();

        dao.GetReceiptPosts((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getTipPosts(req, res) {
        var dao = new PostsDao();

        dao.GetTipPosts((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getContestPosts(req, res) {
        var dao = new PostsDao();

        dao.GetContestPosts((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }
};