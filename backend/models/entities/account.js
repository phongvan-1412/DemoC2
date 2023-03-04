"use stricts";
module.exports = class account {
    constructor(
        acc_id = "",
        acc_email = "",
        acc_password = "",
        acc_name = "",
        acc_birth = "",
        acc_phone = "",
        acc_image = "",
        acc_status = "",
        role_id = "",
        stack_id = "",
    ) {
        this.acc_id = acc_id;
        this.acc_email = acc_email;
        this.acc_password = acc_password;
        this.acc_name = acc_name;
        this.acc_birth = acc_birth;
        this.acc_phone = acc_phone;
        this.acc_image = acc_image;
        this.acc_status = acc_status;
        this.role_id = role_id;
        this.stack_id = stack_id;
    }

    get_accId = () => { return this.acc_id };
    set_accId = (val) => { this.acc_id = val };

    get_accEmail = () => { return this.acc_email };
    set_accEmail = (val) => { this.acc_email = val };

    get_accPwd = () => { return this.acc_password };
    set_accPwd = (val) => { this.acc_password = val };

    get_accName = () => { return this.acc_name };
    set_accName = (val) => { this.acc_name = val };

    get_accBirth = () => { return this.acc_birth };
    set_accBirth = (val) => { this.acc_birth = val };

    get_accPhone = () => { return this.acc_phone };
    set_accPhone = (val) => { this.acc_phone = val };

    get_accImg = () => { return this.acc_image };
    set_accImg = (val) => { this.acc_image = val };

    get_accStatus = () => { return this.acc_status };
    set_accStatus = (val) => { this.acc_status = val };

    get_accRoleId = () => { return this.role_id };
    set_accRoleId = (val) => { this.role_id = val };

    get_accStackId = () => { return this.stack_id };
    set_accStackId = (val) => { this.stack_id = val };
}