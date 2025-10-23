import { Router } from 'express';
import {
  shareMessage,
  sendCompliment,
  sendHug,
  sendKiss,
  confessLove,
} from '../controller/sharelove.controller.js';

const sharefilling = Router();

// Love actions
sharefilling.post('/share-message', shareMessage);
sharefilling.post('/send-compliment', sendCompliment);
sharefilling.post('/send-hug', sendHug);
sharefilling.post('/send-kiss', sendKiss);
sharefilling.post('/confess-love', confessLove);

// Export the correct router
export default sharefilling;
