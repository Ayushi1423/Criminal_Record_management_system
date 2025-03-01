const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Criminal = sequelize.define('Criminal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  crimeType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

// ✅ Sync the table with the database
sequelize.sync({ force: false })  // force: true will drop existing tables
  .then(() => console.log('✅ Tables created successfully!'))
  .catch(err => console.error('❌ Error creating tables:', err));

module.exports = Criminal;
