const BaseForm = require('./BaseForm');

class ExperienceForm extends BaseForm {
    title;
    position;
    work_start_date;
    work_end_date;
    user_id;
    is_deleted;
    deletion_date;

    propertiesForDto = [
        'title',
        'position',
        'work_start_date',
        'work_end_date',
        'user_id',
        'creation_date',
        'is_deleted',
        'deletion_date'
    ];

    rules = {
        regexpValidation: [ ],
        requiredValidation: [ 'title', 'position', 'work_start_date', 'user_id' ],
    }

    constructor() { super(); }
}

module.exports = ExperienceForm;