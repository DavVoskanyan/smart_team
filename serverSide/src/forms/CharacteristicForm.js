const BaseForm = require('./BaseForm')

class CharacteristicForm extends BaseForm {
    title;
    user_id;
    deleted;
    deletion_date;

    propertiesForDto = [
        'title',
        'user_id',
        'deleted',
        'deletion_date'
    ];

    rules = {
        regexpValidation: [ ],
        requiredValidation: [ 'title', 'user_id' ],
    }

    constructor() { super(); }
}

module.exports = CharacteristicForm;