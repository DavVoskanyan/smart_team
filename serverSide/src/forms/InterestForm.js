const BaseForm = require('./BaseForm')

class InterestForm extends BaseForm {
    title;
    user_id;
    is_deleted;
    deletion_date;

    propertiesForDto = [
        'title',
        'user_id',
        'is_deleted',
        'deletion_date'
    ];

    rules = {
        regexpValidation: [ ],
        requiredValidation: [ 'title', 'user_id' ],
    }

    constructor() { super(); }
}

module.exports = InterestForm;