require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`SITS Backend server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`API URL: http://localhost:${PORT}/api`);
  });
}).catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
