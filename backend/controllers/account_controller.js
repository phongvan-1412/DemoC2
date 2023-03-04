const account = require('../models/entities/account');
const AccountDao = require('../models/dao/accountdao');

module.exports = class account_controller {
    postAddAccount(req, res){
        console.log(req.body.acc_phone)
        var acc_id = "";
        var acc_email = req.body.acc_email;
        var acc_password = req.body.acc_password;
        var acc_name = req.body.acc_name;
        var acc_birth = req.body.acc_birth;
        var acc_phone = req.body.acc_phone;
        var acc_image = req.body.acc_image;
        var acc_status = req.body.acc_status;
        var role_id = req.body.role_id;
        var stack_id = null;
       
        var accItem = new account(acc_id, acc_email, acc_password, acc_name, acc_birth, acc_phone, acc_image, acc_status, role_id, stack_id);
        
        var dao = new AccountDao();

        dao.AddAcc(accItem, (err, result) => {
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

    postUpdateAccImage(req, res) {
        var acc_id = req.body.acc_id;
        var acc_email = "";
        var acc_password ="";
        var acc_name = "";
        var acc_phone = "";
        var acc_birth = "";
        var acc_image = req.body.acc_image;
     
        req.files.img.mv("./public/images/Account/" + acc_image);
       
        var accItem = new account(acc_id, acc_email, acc_password, acc_name, acc_birth, acc_phone, acc_image);
        
        var dao = new AccountDao();

        dao.UpdateAccImage(accItem, (err, result) => {
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

    postChangePassword(req, res) {
        var acc_password = req.body.acc_password;
        var acc_id = req.body.acc_id;
        var acc_email = "";
        
        var accItem = new account(acc_id, acc_email, acc_password);

        var dao = new AccountDao();

        dao.UpdatePwd(accItem, (err, result) => {
            if(err){
                console.log(err)
                res.json(err)
            }else{
                if(result.rowsAffected.length > 0){
                    res.json("Succesful")
                }else{
                    res.json("Fail")
                }
            }
        });
    }

    postUpdateAccInfo(req, res) {
        var acc_id = req.body.acc_id;
        var acc_email = "";
        var acc_password ="";
        var acc_name = req.body.acc_name;
        var acc_phone = req.body.acc_phone;
        var acc_birth = req.body.acc_birth;

        var accItem = new account(acc_id, acc_email, acc_password, acc_name, acc_birth, acc_phone);
        
        var dao = new AccountDao();

        dao.UpdateAccInfo(accItem, (err, result) => {
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

    postLoginData(req, res) {
        var acc_id = "";
        var acc_email = req.body.acc_email;
        var acc_password = req.body.acc_password;

        var accItem = new account(acc_id, acc_email, acc_password);

        var dao = new AccountDao();

        dao.GetLoginData(accItem, (err, result) => {
            if(err){
                console.log(err)
                res.json(err)
            }else{
                console.log(result)
                res.json(result)
            }
        });   
    }
};