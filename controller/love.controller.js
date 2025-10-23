export const filling = async (req, res) => {
  const { from, to, message } = req.body;

  if (!from || !to || !message) {
    return res.status(400).json({
      error: "💔 Missing some heart whispers! Please give 'from', 'to', and 'message'.",
    });
  }

  return res.status(200).json({
    status: '❤️ Message delivered!',
    message: `Dear ${to}, ${message} 💌 — From ${from}`,
    reply: `${to} says: "Aww, that made me smile! 😊💖"`,
  });
};

export const sendCompliment = async (req, res) => {
  const { from, to, compliment } = req.body;

  if (!from || !to || !compliment) {
    return res.status(400).json({
      error: '💔 A compliment needs a sender, a receiver, and some sweetness!',
    });
  }

  return res.status(200).json({
    status: '🌸 Compliment sent!',
    message: `${to}, ${compliment} 💖 — From ${from}`,
    reply: `${to} says: "You're so sweet! 🌷 That really brightened my day 😊"`,
  });
};

export const sendHug = async (req, res) => {
  const { from, to } = req.body;

  if (!from || !to) {
    return res.status(400).json({
      error: "💔 Can't send a hug without a sender and receiver!",
    });
  }

  return res.status(200).json({
    status: '🤗 Virtual hug sent!',
    message: `Dear ${to}, here’s a warm hug from ${from} 🤗`,
    reply: `${to} says: "Ahh, thank you! Sending a big hug back 🤗❤️"`,
  });
};

export const sendKiss = async (req, res) => {
  const { from, to } = req.body;

  if (!from || !to) {
    return res.status(400).json({
      error: '💔 Kiss cannot travel without both hearts!',
    });
  }

  return res.status(200).json({
    status: '💋 Kiss delivered!',
    message: `${to}, a sweet kiss from ${from} 💋`,
    reply: `${to} says: "Hehe 😳 That was so sweet! 💖"`,
  });
};
