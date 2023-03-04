const sql = require('mssql/msnodesqlv8');
const config = require('../config');
const StringValue = require('../../StringValue');

module.exports = class accountDao {
    
    constructor() {}

    AddAcc(accItem, callback) {
        var sqlString = "Insert into account(acc_email, acc_password, acc_name, acc_birth, acc_phone, acc_image, acc_status, role_id, stack_id) values('"
                      + accItem.get_accEmail() + "', '"
                      + accItem.get_accPwd() + "', '"
                      + accItem.get_accName() + "', '"
                      + accItem.get_accBirth() + "', '"
                      + accItem.get_accPhone() + "', '"
                      + accItem.get_accImg() + "', "
                      + accItem.get_accStatus() + ", "
                      + accItem.get_accRoleId() + ", "
                      + accItem.get_accStackId() + ")";

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

    UpdateAccImage(accItem, callback) {
        var sqlString = 'Update account set acc_image = '+ "'" + accItem.get_accImg() + "' " 
                      + 'where acc_id =' + accItem.get_accId();
        
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

    UpdatePwd(accItem, callback) {
        var sqlString = 'Update account set acc_password =' + " '" + accItem.get_accPwd() + "' " 
                      + ' where acc_id =' + accItem.get_accId();

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

    UpdateAccInfo(accItem, callback) {
        var sqlString = 'Update account set acc_name =' + " '" + accItem.get_accName() + "', " 
                      + 'acc_birth =' + " '" + accItem.get_accBirth() + "', " 
                      + 'acc_phone =' + " '" + accItem.get_accPhone() + "' " 
                      + 'where acc_id =' + accItem.get_accId();

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

    GetLoginData(accItem, callback) {
        var sqlString = 'select * from account where acc_email = ' 
                      + "'" + accItem.get_accEmail() + "' and acc_password = '"
                      + accItem.get_accPwd() + "'";

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
