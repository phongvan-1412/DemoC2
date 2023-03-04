"use stricts";
module.exports = class posts {
    constructor(
        pos_id,
        created_at,
        end_at,
        article_title,
        pos_image,
        sub_content,
        main_content,
        cmt_count,
        like_count,
        pos_status,
        stack_id,
        cate_id,
        acc_id,
        thumbnail,
        ingredient,
        instruction1,
        instruction2,
        instruction3,
        instruction4,
        instruction5,
        instruction6,
        instruction7,
        instruction8,
        instruction9,
        instruction10,
    ) {
        this.pos_id = pos_id;
        this.created_at = created_at;
        this.end_at = end_at;
        this.article_title = article_title;
        this.pos_image = pos_image;
        this.sub_content = sub_content;
        this.main_content = main_content;
        this.cmt_count = cmt_count;
        this.like_count = like_count;
        this.pos_status = pos_status;
        this.stack_id = stack_id;
        this.cate_id = cate_id;
        this.acc_id = acc_id;
        this.thumbnail = thumbnail;
        this.ingredient = ingredient;
        this.instruction1 = instruction1;
        this.instruction2 = instruction2;
        this.instruction3 = instruction3;
        this.instruction4 = instruction4;
        this.instruction5 = instruction5;
        this.instruction6 = instruction6;
        this.instruction7 = instruction7;
        this.instruction8 = instruction8;
        this.instruction9 = instruction9;
        this.instruction10 = instruction10;
    }

    get_posId = () => { return this.pos_id };
    set_posId = (val) => { this.pos_id = val };

    get_posCreated = () => { return this.created_at };
    set_posCreated = (val) => { this.created_at = val };

    get_posEnd = () => { return this.end_at };
    set_posEnd = (val) => { this.end_at = val };

    get_posArticle = () => { return this.article_title };
    set_posArticle = (val) => { this.article_title = val };

    get_posImg = () => { return this.pos_image };
    set_posImg = (val) => { this.pos_image = val };

    get_posSubContent = () => { return this.sub_content };
    set_posSubContent = (val) => { this.sub_content = val };

    get_posMainContent = () => { return this.main_content };
    set_posMainContent = (val) => { this.main_content = val };

    get_posCmtCount = () => { return this.cmt_count };
    set_posCmtCount = (val) => { this.cmt_count = val };

    get_posLikeCount = () => { return this.like_count };
    set_posLikeCount = (val) => { this.like_count = val };

    get_posStatus = () => { return this.pos_status };
    set_posStatus = (val) => { this.pos_status = val };

    get_posStackId = () => { return this.stack_id };
    set_posStackId = (val) => { this.stack_id = val };

    get_posCateId = () => { return this.cate_id };
    set_posCateId = (val) => { this.cate_id = val };

    get_posAccId = () => { return this.acc_id };
    set_posAccId = (val) => { this.acc_id = val };

    get_thumbnail = () => { return this.thumbnail };
    set_thumbnail = (val) => { this.thumbnail = val };

    get_ingredient = () => { return this.ingredient };
    set_ingredient = (val) => { this.ingredient = val };

    get_instruction1 = () => { return this.instruction1 };
    set_instruction1 = (val) => { this.instruction1 = val };

    get_instruction2 = () => { return this.instruction2 };
    set_instruction2 = (val) => { this.instruction2 = val };

    get_instruction3 = () => { return this.instruction3 };
    set_instruction3 = (val) => { this.instruction3 = val };

    get_instruction4 = () => { return this.instruction4 };
    set_instruction4 = (val) => { this.instruction4 = val };

    get_instruction5 = () => { return this.instruction5 };
    set_instruction5 = (val) => { this.instruction5 = val };

    get_instruction6 = () => { return this.instruction6 };
    set_instruction6 = (val) => { this.instruction6 = val };

    get_instruction7 = () => { return this.instruction7};
    set_instruction7 = (val) => { this.instruction7 = val };

    get_instruction8 = () => { return this.instruction8 };
    set_instruction8 = (val) => { this.instruction8 = val };

    get_instruction9 = () => { return this.instruction9 };
    set_instruction9 = (val) => { this.instruction9 = val };

    get_instruction10 = () => { return this.instruction10 };
    set_instruction10 = (val) => { this.instruction10 = val };
}