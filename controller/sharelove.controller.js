// Send a love message
export const shareMessage = async (req, res) => {
  const { from, to, message } = req.body;
  if (!from || !to || !message) {
    return res.status(400).json({
      error: "💔 Missing heart whispers! Please provide 'from', 'to', and 'message'.",
    });
  }
  return res.status(200).json({
    status: '❤️ Message delivered!',
    message: `Dear ${to}, ${message} 💌 — From ${from}`,
  });
};

// Send a compliment
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
  });
};

// Send a virtual hug
export const sendHug = async (req, res) => {
  const { from, to } = req.body;
  if (!from || !to) {
    return res.status(400).json({
      error: "💔 Can't send a hug without both hearts!",
    });
  }
  return res.status(200).json({
    status: '🤗 Virtual hug sent!',
    message: `Dear ${to}, here’s a warm hug from ${from} 🤗`,
  });
};

// Send a kiss
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
  });
};

// Confess love
export const confessLove = async (req, res) => {
  const { from, to, likesYou } = req.body; // likesYou: true/false
  if (!from || !to || likesYou === undefined) {
    return res.status(400).json({
      error: "💔 Please provide 'from', 'to', and whether they like you!",
    });
  }

  if (likesYou) {
    return res.status(200).json({
      status: '💖 Love confessed!',
      message: `Congratulations! 🎉 ${to} likes you back! ❤️ Your hearts are now connected 💌 — From ${from}`,
    });
  } else {
    return res.status(200).json({
      status: '💔 Confession delivered',
      message: `Dear ${from}, you confessed your feelings to ${to} 💌. But ${to} said: "I’m sorry, I don’t have feelings like that 😔."`,
      advice:
        'Keep your head up! 🌸 Sometimes hearts are not aligned, but you are still amazing ❤️',
    });
  }
};
