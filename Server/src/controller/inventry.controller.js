import { Inventry } from "../models/inventery.model.js";


// Add Update Inventry items
const addInventryItem = async (req, res) => {
  try {
    const { itemName, quantity, unit, threshold } = req.body;
    itemName= itemName.toLowerCase()

    const existingItem = await Inventry.findOne({ itemName: itemName.toLowerCase() });

    if (existingItem) {
      existingItem.quantity += Number(quantity);
      await existingItem.save();

      return res
        .status(200)
        .json({ message: "Inventory updated successfully", success: true });
    }

    // agar item nahi mila to naya item banao
    const newItem = await Inventry.create({
      itemName: itemName.toLowerCase(),
      quantity,
      unit,
      threshold,
    });

    return res.status(201).json({
      message: "Inventory item added successfully",
      success: true,
      newItem,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get all inventry
const getAllInventry = async (req, res) => {
    try {
        const allInventry = await Inventry.find();
        res.status(200).json({ success: true, allInventry });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// Low Stock ALert

const getLowStockItem = async (req, res) => {
    try {
        const lowStock = await Inventry.find({ $expr: { $lte: ["$quantity", "$threshold"] } });
        return res.status(200).json({ message: "Low stock items found", success: true, lowStock });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export { addInventryItem, getAllInventry, getLowStockItem }










// import { Inventry } from "../models/inventery.model.js";


// // Add Update Inventry items
// const addInventryItem = async (req, res) => {
//   try {
//     const { itemName, quantity, unit, threshold } = req.body;

//     const existingItem = await Inventry.findOne({ itemName });

//     if (existingItem) {
//       existingItem.quantity += Number(quantity);
//       await existingItem.save();

//       return res
//         .status(200)
//         .json({ message: "Inventory updated successfully", success: true });
//     }

//     // agar item nahi mila to naya item banao
//     const newItem = await Inventry.create({
//       itemName,
//       quantity,
//       unit,
//       threshold,
//     });

//     return res.status(201).json({
//       message: "Inventory item added successfully",
//       success: true,
//       newItem,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // get all inventry
// const getAllInventry = async (req, res) => {
//     try {
//         const allInventry = await Inventry.find();
//         res.status(200).json({ success: true, allInventry });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



// // Low Stock ALert

// const getLowStockItem = async (req, res) => {
//     try {
//         const lowStock = await Inventry.find({ $expr: { $lte: ["$quantity", "$threshold"] } });
//         return res.status(200).json({ message: "Low stock items found", success: true, lowStock });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }


// export { addInventryItem, getAllInventry, getLowStockItem }