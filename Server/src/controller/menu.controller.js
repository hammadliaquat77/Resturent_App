import { Menu } from "../models/menu.model.js";


// Add menu
const addMenuItems = async (req, res) => {
    try {
        const { name, price, category, description, isAvailable } = req.body;
        const image = req.file?.path;  // check if image is uploaded

        const existingMenu = await Menu.findOne({ name });
        if (existingMenu) return res.status(400).json({ message: "Menu item already exists" });

        const newAddMenuItems = await Menu.create({
            name,
            price,
            category,
            description,
            isAvailable,
            image
        })

        res.status(201).json({
            succes: true,
            message: "Menu item added successfully",
            newAddMenuItems
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// get all menu items

const getAllMenu = async (req, res) => {
    try {
        const allMenuItems = await Menu.find();
        res.status(200).json({ success: true, allMenuItems });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// get single menu
const singleFoodItem = async (req, res) => {
    try {
        const { id } = req.params;
        const singlefood = await Menu.findById(id);

        if (!singlefood) return res.status(404).json({ message: "Menu item not found" });

        res.status(200).json({ success: true, singlefood });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// file upload
const updatedMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };
        if (req.file?.path) updatedData.image = req.file.path;

        const menuItem = await Menu.findByIdAndUpdate(id, updatedData, { new: true });
        
        if (!menuItem) return res.status(404).json({ message: "Menu item not found" });

        res.status(200).json({
            success: true,
            message: "Menu item updated successfully",
            menuItem
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// const updatedMenu = async (req, res) => {
//     try {
//         const { id } = req.params;
//         //   const { name, price, category, description, image, isAvailable } = req.body;

//         const updateMenu = await Menu.findByIdAndUpdate(id,
//             // {name, price, category, description, image, isAvailable},
//             req.body,
//             { new: true }
//         );

//         if (!updateMenu) return res.status(404).json({ message: "Menu item not found" });

//         res.status(200).json({
//             success: true,
//             message: "Menu item updated successfully",
//             updateMenu
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



const deleteItems = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenu = await Menu.findByIdAndDelete(id);

        if (!deletedMenu) return res.status(404).json({ message: "Menu item not found" });

        res.status(200).json({
            success: true,
            message: "Menu item deleted successfully",
            deletedMenu
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


// ✅ Get Menu Items by filter Category
const getMenuByCategory = async (req, res) => {
  try {
    const { category } = req.query; // /api/menu?category=Burger
    let menu;

    if (category) {
      menu = await Menu.find({ category });
    } else {
      menu = await Menu.find();
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





export { addMenuItems, getAllMenu, singleFoodItem, updatedMenu, deleteItems, getMenuByCategory };