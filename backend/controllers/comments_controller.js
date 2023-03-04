const comment = require('../models/entities/comments');
const CommentDao = require('../models/dao/commentdao');

module.exports = class comment_controller {
    postComment(req, res){
        var cmt_id = "";
        var cmt_content = req.body.cmt_content;
        var cmt_count = "";
        var like_count = "";
        var rep_cmt_id = "";
        var post_id = req.body.pos_id;
        var acc_id = req.body.acc_id;
        var created_at = req.body.created_at;

        var cmtItem = new comment(cmt_id, cmt_content, cmt_count, like_count, rep_cmt_id, post_id, acc_id, created_at);
        
        var dao = new CommentDao();

        dao.AddComment(cmtItem, (err, result) => {
            if(err){
                console.log(err)
                res.json(err)
            }else{
                console.log(result.rowsAffected.length)
                if(result.rowsAffected.length > 0){
                    res.json("Succesful")
                }else{
                    res.json("Fail")
                }
            }
        });
    }

    postSubComment(req, res){
        var cmt_id = "";
        var cmt_content = req.body.cmt_content;
        var cmt_count = "";
        var like_count = "";
        var rep_cmt_id = req.body.cmt_id;
        var post_id = req.body.pos_id;
        var acc_id = req.body.acc_id;
        var created_at = req.body.created_at;

        var cmtItem = new comment(cmt_id, cmt_content, cmt_count, like_count, rep_cmt_id, post_id, acc_id, created_at);
        
        var dao = new CommentDao();

        dao.AddSubComment(cmtItem, (err, result) => {
            if(err){
                console.log(err)
                res.json(err)
            }else{
                console.log(result.rowsAffected.length)
                if(result.rowsAffected.length > 0){
                    res.json("Succesful")
                }else{
                    res.json("Fail")
                }
            }
        });
    }

    postUpdateCommentCount(req, res){
        var cmt_id = req.body.cmt_id;
        var cmt_content = "";
        var cmt_count = req.body.cmt_count;
        var like_count = "";
        var rep_cmt_id = "";
        var post_id = "";
        var acc_id = "";
        var created_at = "";

        var cmtItem = new comment(cmt_id, cmt_content, cmt_count, like_count, rep_cmt_id, post_id, acc_id, created_at);
        
        var dao = new CommentDao();

        dao.UpdateCommentCount(cmtItem, (err, result) => {
            if(err){
                console.log(err)
                res.json(err)
            }else{
                console.log(result.rowsAffected.length)
                if(result.rowsAffected.length > 0){
                    res.json("Succesful")
                }else{
                    res.json("Fail")
                }
            }
        });
    }

    getComment(req, res){
        var dao = new CommentDao();

        dao.GetComment((err, result) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                res.json(result);
            }
        });
    }

    getTop5Comment(req, res){
        var dao = new CommentDao();

        dao.GetTop5Comment((err, result) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                res.json(result);
            }
        });
    }

    getMostComment(req, res){
        var dao = new CommentDao();

        dao.GetMostComment((err, result) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                res.json(result);
            }
        });
    }

};