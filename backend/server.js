const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');
const applianceRoutes = require('./routes/appliances');
const utilityRoutes = require('./routes/utilities');
const maintenanceTaskRoutes = require('./routes/maintenanceTasks');
const paintColorRoutes = require('./routes/paintColors');
const flooringRoutes = require('./routes/floorings');
const contractorRoutes = require('./routes/contractors');
const recommendationRoutes = require('./routes/recommendations');
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/appliances', applianceRoutes);
app.use('/api/utilities', utilityRoutes);
app.use('/api/maintenanceTasks', maintenanceTaskRoutes);
app.use('/api/paintColors', paintColorRoutes);
app.use('/api/floorings', flooringRoutes);
app.use('/api/contractors', contractorRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('House Management App Backend');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('Could not connect to MongoDB', err));

