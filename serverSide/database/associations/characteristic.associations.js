const Characteristic = require('../../src/models/characteristic.model');
const User = require('../../src/models/user.model');


Characteristic.belongsTo(User, {foreignKey: 'user_id'})