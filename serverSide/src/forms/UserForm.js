const BaseForm = require('./BaseForm');

class UserForm extends BaseForm {
    first_name;
    last_name;
    birthdate;
    email;
    is_email_verified;
    password;
    phone;
    address;
    description;
    avatar_image_file;
    avatar_background_color_id;
    theme_id;
    is_super_user;
    creation_date;
    is_deleted;
    deletion_date;

    propertiesForDto = [
        'first_name',
        'last_name',
        'birthdate',
        'email',
        'is_email_verified',
        'password',
        'phone',
        'address',
        'description',
        'avatar_image_file',
        'avatar_background_color_id',
        'theme_id',
        'is_super_user',
        'creation_date',
        'is_deleted',
        'deletion_date'
    ];

    rules = {
        regexpValidation: [
            {
                field: 'email',
                regex:  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"),
            }
        ],
        requiredValidation: [
            'first_name', 'last_name', 'birthdate', 'email', 'password'
        ],
    }

    constructor() { super(); }
}
module.exports = UserForm;