const sql = require('mssql/msnodesqlv8');
const config = require('../config');

module.exports = class postsDao {
    constructor() { };

    AddPosts(posItem, callback) {
        var sqlString = 'Insert into posts(created_at, end_at, article_title, pos_image, sub_content, main_content, pos_status, stack_id, cate_id, acc_id, thumbnail, ingredient, instruction1, instruction2, instruction3, instruction4, instruction5, instruction6, instruction7, instruction8, instruction9, instruction10) values('
            + "'" + posItem.get_posCreated() + "', "
            + "'" + posItem.get_posEnd() + "', "
            + "N'" + posItem.get_posArticle() + "', "
            + "'" + posItem.get_posImg() + "', "
            + "N'" + posItem.get_posSubContent() + "', "
            + "N'" + posItem.get_posMainContent() + "', "
            + posItem.get_posStatus() + ", "
            + posItem.get_posStackId() + ", "
            + posItem.get_posCateId() + ", "
            + posItem.get_posAccId() + ", "
            + "'" + posItem.get_thumbnail() + "', "
            + "'" + posItem.get_ingredient() + "',"
            + "N'" + posItem.get_instruction1() + "',"
            + "N'" + posItem.get_instruction2() + "',"
            + "N'" + posItem.get_instruction3() + "',"
            + "N'" + posItem.get_instruction4() + "',"
            + "N'" + posItem.get_instruction5() + "',"
            + "N'" + posItem.get_instruction6() + "',"
            + "N'" + posItem.get_instruction7() + "',"
            + "N'" + posItem.get_instruction8() + "',"
            + "N'" + posItem.get_instruction9() + "',"
            + "N'" + posItem.get_instruction10() + "')";

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

    GetAllPosts(callback) {
        var sqlString = 'Select * from posts';
        
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

    GetFreePosts(callback) {
        var sqlString = 'Select * from posts where stack_id is null';
        
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

    GetReceiptPosts(callback) {
        var sqlString = "Select * from posts p join category c on p.cate_id = c.cate_id where c.sub_cate = 1";

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

    GetTipPosts(callback) {
        var sqlString = "Select * from posts p join category c on p.cate_id = c.cate_id where c.sub_cate = 2";

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

    GetContestPosts(callback) {
        var sqlString = "Select * from posts p join category c on p.cate_id = c.cate_id where p.stack_id is null and c.cate_id=3";

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