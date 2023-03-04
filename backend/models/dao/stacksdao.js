const sql = require('mssql/msnodesqlv8');
const config = require('../config');

module.exports = class stacksDao {

    constructor() {

    }
    AddStacks(staItem, callback){
        var sqlString = 'Insert into stacks(stack_name, stack_price, stack_description) values('
                      + "N'" + staItem.get_stackName() + "', "
                      + staItem.get_stackPrice() + ", "
                      + "N'" + staItem.get_stackDes() + "')";

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

    UpdateStacks(staItem, callback){
        var sqlString = "Update stacks set stack_name = '"
                      + staItem.get_stackName() + "', stack_price = "
                      + staItem.get_stackPrice() + ", stack_description = '"
                      + staItem.get_stackDes() + "', stack_status = "
                      + staItem.get_stackStatus() + " where stack_id = "
                      + staItem.get_stackId();

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

    GetAllStacks(callback){
        var sqlString = 'select * from stacks';

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

    GetStackStatistic(callback){
        var sqlString = "select s.stack_id, s.stack_name,count(a.acc_id) as total from account a join stacks s on a.stack_id=s.stack_id group by s.stack_name, s.stack_id";

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

    GetLineChart(callback){
        var sqlString = "select s.stack_id, s.stack_name,count(a.acc_id) as amount, s.stack_price, (count(a.acc_id) *s.stack_price) as sum from account a join stacks s on a.stack_id=s.stack_id group by s.stack_name, s.stack_id, s.stack_price";

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