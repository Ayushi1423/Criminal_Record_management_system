const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crms_db', 'root', '2314', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('✅ Database connected!'))
  .catch(err => console.error('❌ Database connection failed:', err));

module.exports = sequelize;
