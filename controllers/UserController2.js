// controllers/UserController.js

import log from '../models/schema2.js';

export const getlogin = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await log.findOne({ email });

    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
