"use stricts";
module.exports = class category {
    constructor(
        cate_id,
        cate_name,
        cate_status,
        sub_cate
    ) {
        this.cate_id = cate_id;
        this.cate_name = cate_name;
        this.cate_status = cate_status;
        this.sub_cate = sub_cate;
    }

    get_cateId = () => { return this.cate_id };
    set_cateId = (val) => { this.cate_id = val };

    get_cateName = () => { return this.cate_name };
    set_cateName = (val) => { this.cate_name = val };

    get_cateStatus = () => { return this.cate_status };
    set_cateStatus = (val) => { this.cate_status = val };

    get_subCate = () => { return this.sub_cate };
    set_subCate = (val) => { this.sub_cate = val };
}