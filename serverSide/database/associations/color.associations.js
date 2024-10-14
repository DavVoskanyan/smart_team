const Color = require('../../src/models/color.model');
const User = require('../../src/models/user.model');

Color.hasMany(User, {foreignKey: 'avatar_background_color_id'});
