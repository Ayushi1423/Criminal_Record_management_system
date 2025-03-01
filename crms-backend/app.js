const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const criminalRoutes = require('./routes/criminal.routes');
const sequelize = require('./config/db.config'); // Import DB connection
const Criminal = require('./models/criminal.model'); // Import model to sync tables

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/criminals', criminalRoutes);

// ✅ Sync tables when server starts
sequelize.sync({ alter: true })  // Ensures table updates without data loss
  .then(() => console.log('✅ All tables are ready!'))
  .catch(err => console.error('❌ Table creation error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
