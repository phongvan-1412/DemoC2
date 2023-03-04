"use stricts";
module.exports = class comments {
    constructor(
        cmt_id,
        cmt_content,
        cmt_count,
        like_count,
        rep_cmt_id,
        post_id,
        acc_id,
        created_at
    ) {
        this.cmt_id = cmt_id;
        this.cmt_content = cmt_content;
        this.cmt_count = cmt_count;
        this.like_count = like_count;
        this.rep_cmt_id = rep_cmt_id;
        this.post_id = post_id;
        this.acc_id = acc_id;
        this.created_at = created_at;
    }

    get_cmtId = () => { return this.cmt_id };
    set_cmtId = (val) => { this.cmt_id = val };

    get_cmtContent = () => { return this.cmt_content };
    set_cmtContent = (val) => { this.cmt_content = val };

    get_cmtCount = () => { return this.cmt_count };
    set_cmtCount = (val) => { this.cmt_count = val };

    get_cmtLikeCount = () => { return this.like_count };
    set_cmtLikeCount = (val) => { this.like_count = val };

    get_cmtRepId = () => { return this.rep_cmt_id };
    set_cmtRepId = (val) => { this.rep_cmt_id = val };

    get_cmtPosId = () => { return this.post_id };
    set_cmtPosId = (val) => { this.cmtt_id = val };

    get_cmtAccId = () => { return this.acc_id };
    set_cmtAccId  = (val) => { this.acc_id = val };

    get_cmtCreatedAt = () => { return this.created_at };
    set_cmtCreatedAt  = (val) => { this.created_at = val };

}