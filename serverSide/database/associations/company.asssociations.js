const Company = require('../../src/models/company.model');
const User = require('../../src/models/user.model');
const Department = require('../../src/models/department.model');
const Notification = require('../../src/models/notification.model');

Company.belongsToMany(User, { through: 'UserAndCompanyRelation', foreignKey: 'user_id' });
Company.hasMany(Department, { foreignKey: 'company_id' });
Company.hasMany(Notification, { foreignKey: 'company_id' });


