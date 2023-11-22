
const express = require('express');
const { User, Tourist } = require('..models'); // 
const router = express.Router();

const app = express();
app.use(express.json());


// POST route to send a connection request
router.post('/connect/send/:receiverId', async (req, res) => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user.id; // we need authentication middleware to get the current user

    // Check if the connection request already exists
    const existingRequest = await Tourist.findOne({
      where: { senderId, receiverId, status: 'pending' }
    });

    if (existingRequest) {
      return res.status(400).json({ message: 'Connection request already sent.' });
    }

    // Create a new connection request
    await Tourist.create({ senderId, receiverId, status: 'pending' });

    return res.status(200).json({ message: 'Connection request sent successfully.' });
  } catch (error) {
    console.error('Error sending connection request:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// PUT route to accept a connection request
router.put('/connect/accept/:requestId', async (req, res) => {
  try {
    const { requestId } = req.params;

    // Find the connection request
    const connectionRequest = await Tourist.findByPk(requestId);

    if (!connectionRequest) {
      return res.status(404).json({ message: 'Connection request not found.' });
    }

    // Update the status to 'accepted'
    connectionRequest.status = 'accepted';
    await connectionRequest.save();

    return res.status(200).json({ message: 'Connection request accepted.' });
  } catch (error) {
    console.error('Error accepting connection request:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// DELETE route to decline a connection request
router.delete('/connect/decline/:requestId', async (req, res) => {
  try {
    const { requestId } = req.params;

    // Find the connection request
    const connectionRequest = await Tourist.findByPk(requestId);

    if (!connectionRequest) {
      return res.status(404).json({ message: 'Connection request not found.' });
    }

    // Update the status to 'declined'
    connectionRequest.status = 'declined';
    await connectionRequest.save();

    return res.status(200).json({ message: 'Connection request declined.' });
  } catch (error) {
    console.error('Error declining connection request:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

