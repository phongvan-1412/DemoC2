const category = require('../models/entities/category');
const CategoryDao = require('../models/dao/categorydao');

module.exports = class category_controller {

    getCate(req, res) {
        var dao = new CategoryDao();

        dao.GetCate((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    postAddCate(req, res) {
        var cate_id = "";
        var cate_name = req.body.cate_name;
        var cate_status = req.body.cate_status;
        var sub_cate = req.body.sub_cate;

        var cateItem = new category(cate_id, cate_name, cate_status, sub_cate);

        var dao = new CategoryDao();

        dao.AddCate(cateItem, (err, result) => {
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

    postUpdateCate(req, res) {
        var cate_id = req.body.cate_id;
        var cate_name = req.body.cate_name;
        var cate_status = "";
        var sub_cate = req.body.sub_cate;

        var cateItem = new category(cate_id, cate_name, cate_status, sub_cate);

        var dao = new CategoryDao();

        dao.UpdateCate(cateItem, (err, result) => {
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

    postUpdateCateStatus(req, res) {
        var cate_id = req.body.cate_id;
        var cate_name = "";
        var cate_status = req.body.cate_status;
        var sub_cate = "";

        var cateItem = new category(cate_id, cate_name, cate_status, sub_cate);

        var dao = new CategoryDao();

        dao.UpdateCateStatus(cateItem, (err, result) => {
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

};