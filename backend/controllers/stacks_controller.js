const stacks = require('../models/entities/stacks');
const StacksDao = require('../models/dao/stacksdao');

module.exports = class stacks_controller {
    postAddStacks(req, res) {
        var stack_id = "";
        var stack_name = req.body.stack_name;
        var stack_price = req.body.stack_price;
        var stack_description = req.body.stack_description;
        var stack_status = "";

        var staItem = new stacks(stack_id, stack_name, stack_price, stack_description, stack_status);

        var dao = new StacksDao();

        dao.AddStacks(staItem, (err, result) => {
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

    postUpdateStacks(req, res) {
        var stack_id = req.body.stack_id;
        var stack_name = req.body.stack_name;
        var stack_price = req.body.stack_price;
        var stack_description = req.body.stack_description;
        var stack_status = req.body.stack_status;

        var staItem = new stacks(stack_id, stack_name, stack_price, stack_description, stack_status);

        var dao = new StacksDao();

        dao.UpdateStacks(staItem, (err, result) => {
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

    getAllStacks(req, res) {
        var dao = new StacksDao();

        dao.GetAllStacks((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getStackStatistic(req, res) {
        var dao = new StacksDao();

        dao.GetStackStatistic((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }

    getLineChart(req, res){
        var dao = new StacksDao();

        dao.GetLineChart((err, result) => {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(result)
            }
        });
    }
};