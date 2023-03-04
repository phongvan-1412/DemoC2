const sql = require('mssql/msnodesqlv8');
const config = require('../config');

module.exports = class categoryDao {
    constructor() {}

    GetCate(callback){
        var sqlString = 'Select * from category';

        sql.connect(config, function (err) {
            console.log("Finished setting the isolation level to read committed");
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(sqlString, function (err, result) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, result)
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return "error creating order";
            }
        });
    }

    AddCate(cateItem, callback) {
        var sqlString = 'Insert into category(cate_name, cate_status, sub_cate) values(' 
                      + "N'" + cateItem.get_cateName() + "', "
                      + cateItem.get_cateStatus() + ", "
                      + cateItem.get_subCate() + ")";

        sql.connect(config, function (err) {
            console.log("Finished setting the isolation level to read committed");
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(sqlString, function (err, result) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, result)
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return "error creating order";
            }
        });
    }

    UpdateCate(cateItem, callback) {
        var sqlString = 'Update category set cate_name = '
                      + "'" + cateItem.get_cateName() + "', sub_cate = "
                      + cateItem.get_subCate() + " where cate_id = "
                      + cateItem.get_cateId();
        console.log(sqlString)
        
        sql.connect(config, function (err) {
            console.log("Finished setting the isolation level to read committed");
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(sqlString, function (err, result) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, result)
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return "error creating order";
            }
        });
    }

    UpdateCateStatus(cateItem, callback) {
        var sqlString = 'Update category set cate_status = '
                      + cateItem.get_cateStatus() + " where cate_id = "
                      + cateItem.get_cateId();
        console.log(sqlString)
        
        sql.connect(config, function (err) {
            console.log("Finished setting the isolation level to read committed");
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(sqlString, function (err, result) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, result)
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return "error creating order";
            }
        });
    }
};