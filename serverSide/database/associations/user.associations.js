const User = require('../../src/models/user.model');
const IsUserOnline = require('../../src/models/isUserOnline.model');
const Interest = require('../../src/models/interest.model');
const Characteristic = require('../../src/models/characteristic.model');
const Experience = require('../../src/models/experience.model');
const Theme = require('../../src/models/theme.model');
const Color = require('../../src/models/color.model');
const Company = require('../../src/models/company.model');
const Department = require('../../src/models/department.model');
const Notification = require('../../src/models/notification.model');


User.hasOne(IsUserOnline, {foreignKey: 'user_id'});

User.hasMany(Interest, {foreignKey: 'user_id'});
User.hasMany(Characteristic, {foreignKey: 'user_id'});
User.hasMany(Experience, {foreignKey: 'user_id'});

User.belongsTo(Theme, {foreignKey: 'theme_id'});
User.belongsTo(Color, {foreignKey: 'avatar_background_color_id'});

User.belongsToMany(Department, { through: 'UserAndCompanyRelation', foreignKey: 'user_id' });
User.belongsToMany(Company, { through: 'UserAndCompanyRelation', foreignKey: 'user_id' });
User.belongsToMany(Notification, { through: 'NotificationAndUserRelation', foreignKey: 'user_id' });
