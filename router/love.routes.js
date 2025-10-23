import { Router } from 'express';
import { filling, sendCompliment, sendHug, sendKiss } from '../controller/love.controller.js';

const loveRoutes = Router();

// Route for sending love messages
loveRoutes.post('/share-your-heart', filling);

// Route for sending a compliment
loveRoutes.post('/send-compliment', sendCompliment);

// Route for sending a virtual hug
loveRoutes.post('/send-hug', sendHug);

// Route for sending a kiss
loveRoutes.post('/send-kiss', sendKiss);

export default loveRoutes;
