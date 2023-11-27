import head from '../models/schema.js';
 
export const gethead = async (req, res) => {
    try {
        const users = await head.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 

 
export const addhead = async (req, res) => {
    console.log(req.body); // Add this line to log the request body
    const user = new head(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

 
export const updatehead = async (req, res) => {
    try {
        const updateduser = await head.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deletehead = async (req, res) => {
    try {
        const deleteduser = await head.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}