"use stricts";
module.exports = class stacks {
    constructor(
        stack_id,
        stack_name,
        stack_price,
        stack_description,
        stack_status
    ) {
        this.stack_id = stack_id;
        this.stack_name = stack_name;
        this.stack_price = stack_price;
        this.stack_description = stack_description;
        this.stack_status = stack_status;
    }

    get_stackId = () => { return this.stack_id };
    set_stackId = (val) => { this.stack_id = val };

    get_stackName = () => { return this.stack_name };
    set_stackName = (val) => { this.stack_name = val };

    get_stackPrice = () => { return this.stack_price };
    set_stackPrice = (val) => { this.stack_price = val };

    get_stackDes = () => { return this.stack_description };
    set_stackDes = (val) => { this.stack_description = val };

    get_stackStatus = () => { return this.stack_status };
    set_stackStatus = (val) => { this.stack_status = val };
}