const sql = require('mssql/msnodesqlv8');
const config = require('../config');

module.exports = class accountDao {

    constructor() { }

    AddComment(cmtItem, callback) {
        var sqlString = "Insert into comments(cmt_content, post_id, acc_id, created_at) values('"
                      + cmtItem.get_cmtContent() + "', " 
                      + cmtItem.get_cmtPosId() + ", "
                      + cmtItem.get_cmtAccId() + ", '"
                      + cmtItem.get_cmtCreatedAt() + "')";

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

    AddSubComment(cmtItem, callback) {
        var sqlString = "Insert into comments(cmt_content, rep_cmt_id, post_id, acc_id, created_at) values('"
                      + cmtItem.get_cmtContent() + "', " 
                      + cmtItem.get_cmtRepId() + ", "
                      + cmtItem.get_cmtPosId() + ", "
                      + cmtItem.get_cmtAccId() + ", '"
                      + cmtItem.get_cmtCreatedAt() + "')";

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

    UpdateCommentCount(cmtItem, callback){
        var sqlString = "Update comments set cmt_count = " + cmtItem.get_cmtCount() + " where cmt_id = " + cmtItem.get_cmtId();
        
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

    GetComment(callback){
        var sqlString = "Select * from comments c join account a on c.acc_id=a.acc_id order by c.created_at DESC";

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

    GetTop5Comment(callback){
        var sqlString = "Select TOP 5 * from comments c join account a on c.acc_id=a.acc_id order by c.created_at DESC";

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

    GetMostComment(callback){
        var sqlString = "SELECT cmt_id, cmt_content, cmt_count FROM comments WHERE cmt_count= ( SELECT MAX(cmt_count) FROM comments )";

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