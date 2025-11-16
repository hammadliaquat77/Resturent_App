import { Order } from "../models/order.model.js";
import { Inventry } from "../models/inventery.model.js";


const placeOrder = async (req, res) => {
    try {
        const {  orderItems, totalPrice, paymentType, address } = req.body;
        
        const newOrder = await Order.create({
            user: req.user._id,
            orderItems,
            totalPrice,
            paymentType,
            address
        })

        for(const item of orderItems) {
            const inventryItem = await Inventry.findOne({ itemName: item.menuitems.name });
            if (inventryItem) {
                inventryItem.quantity -= item.quantity;
                await inventryItem.save();
            }
        }

        res.status(201).json({ 
            success: true, 
            message: "Order placed successfully",
            newOrder 
        });
         
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}






// get all orders (Admin)
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find().populate("orderItems.menuitems", "name price");
        res.status(200).json({ success: true, allOrders });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// get MY Orders (customer)
const getMyOrders = async (req, res) => {
    try {
        const myOrders = await Order.find({ user: req.user._id }).populate("user", "name email").populate("orderItems.menuitems", "name price");
        res.status(200).json({ success: true, myOrders });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// get update order Status (Admin)
const getUpdateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);

        if (!order) return res.status(404).json({ message: "Order not found" });

        order.status = req.body.status;
        await order.save();

        res.status(200).json({ 
            success: true, 
            message: "Order status updated successfully", 
             order: {
                _id: order._id,
                user: order.user,
                orderItems: order.orderItems,
                totalPrice: order.totalPrice,
                paymentType: order.paymentType,
                address: order.address,
                status: order.status,      
            }
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




// cancel order status (customer)
const getCancelOrderStatus = async (req, res)=> {
   try {
      const { id } = req.params;
      const order = await Order.findById(id);

      if (!order) return res.status(404).json({ message: "Order not found" });

      if (order.status === "preparing" || order.status === "served") {
         return res.status(400).json({ message: "Order cannot be cancelled After Start Preparing" });
      }

      order.status = "cancelled";
      await order.save();

      res.status(200).json({ 
         success: true, 
         message: "Order cancelled successfully", 
         order 
      });

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}


export { placeOrder, getAllOrders, getMyOrders, getUpdateOrderStatus, getCancelOrderStatus };