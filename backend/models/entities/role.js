"use stricts";
module.exports = class role {
    constructor(
        role_id,
        role_name,
        role_status
    ) {
        this.role_id = role_id;
        this.role_name = role_name;
        this.role_status = role_status;
    }

    get_roleId = () => { return this.role_id };
    set_roleId = (val) => { this.role_id = val };

    get_roleName = () => { return this.role_name };
    set_roleName = (val) => { this.role_name = val };

    get_roleStatus = () => { return this.role_status };
    set_roleStatus = (val) => { this.role_status = val };
}