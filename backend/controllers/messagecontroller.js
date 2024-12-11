import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		})

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);
        const receiverSocketId=getReceiverSocketId(receiverId);
		if (receiverSocketId){
			io.to(receiverSocketId).emit("newMessage",newMessage);
		}
		
		
		res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in mesaagecontroller",error.message);
        res.status(500).json({error:"Internal server Error"});
    }
}
export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        // Find the conversation between the two participants
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        // If no conversation exists, return an empty array
        if (!conversation) {
            return res.status(200).json([]); // Add "return" to avoid duplicate responses
        }

        const messages = conversation.messages;

        // Send the messages as a response
        return res.status(200).json(messages); // Ensure this is the only response sent
    } catch (error) {
        console.log("Error in messagecontroller:", error.message);
        return res.status(500).json({ error: "Internal server Error" }); // Always use "return"
    }
};
