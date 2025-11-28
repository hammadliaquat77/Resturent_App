import { Staff } from "../models/staff.model.js";

// Add staff
const addStaff = async (req, res) => {

     try {
        const { name, role, shift, contact } = req.body;

        const existingStaff = await Staff.findOne({ name, contact});
        if (existingStaff) return res.status(400).json({ message: "Staff already exists" });

        const newStaff = await Staff.create({
            name,
            role,
            shift,
            contact
        });

        res.status(201).json({
            message: "Staff added successfully",
            success: true,
            newStaff
        });

     } catch (error) {
        res.status(500).json({ message: error.message })
     }
}

// get all staff
const getAllStaff = async (req, res) => {
    try {
        const allStaff = await Staff.find();
        res.status(200).json({ success: true, allStaff });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//  delete Staff
const getDeleteStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStaff = await Staff.findByIdAndDelete(id);
        res.status(200).json({ message: "Staff deleted successfully", success: true, deletedStaff });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export { addStaff, getAllStaff, getDeleteStaff };