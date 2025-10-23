import express from 'express';
import loveRoutes from './router/love.routes.js'; // import your love routes
import sharefilling from './router/sharelove.routes.js';
const app = express();
const port = 8080;

// Middleware to parse JSON
app.use(express.json());

// Use love-themed routes
app.use('/love', loveRoutes);
app.use('/api', sharefilling);

// Default route
app.get('/', (req, res) => {
  res.send('💖 Welcome to the Love API! Send love, hugs, compliments, and kisses! 💖');
});

// Start server
app.listen(port, () => {
  console.log(`💌 Love API is listening on port ${port} 💌`);
});
