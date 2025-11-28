// import { Reservation } from "../models/reservation.model.js";


// // Create Reservation
// const createReservation = async (req, res) => {

//     // Admin cannot make reservation
//     if (req.user.role === "admin") {
//          return res.status(403).json({ message: "Admins cannot make reservations" });
//     }

//     try {
//         const { date, time, personCount, specialRequest } = req.body;
//         const reservationDate = new Date(date);

//         const existingReservation = await Reservation.findOne({ date, time });

//         if (existingReservation) return res.status(400).json({ message: "This Time Slod is already booked" });        

//         const newReservation = await Reservation.create({
//             user: req.user._id,
//             date: reservationDate,
//             time,
//             personCount,
//             specialRequest
//         });

//         res.status(201).json({
//             success: true,
//             message: "Reservation created successfully",
//             newReservation
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }


// // Customer Reservation
// const getMyReservation = async (req, res) => {
//     try {
//         const myReservation = await Reservation.find({ user: req.user._id });
//         res.status(200).json({
//             success: true,
//             myReservation
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// };



// // Admin get All Reservation

// const getAllReservation = async (req, res) => {
//     try {
//         const allReservation = await Reservation.find().populate("user", "name email");
//         res.status(200).json({
//             success: true,
//             allReservation
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// };


// // Admin Update Reservation Status

// const getUpdateReservationStatus = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const reservation = await Reservation.findById(id);

//         if (!reservation) return res.status(404).json({ message: "Reservation not found" });

//         reservation.status = req.body.status;
//         await reservation.save();

//         res.status(200).json({
//             success: true,
//             message: "Reservation status updated successfully",
//             reservation: {
//                 _id: reservation._id,
//                 user: reservation.user,
//                 date: reservation.date,
//                 time: reservation.time,
//                 perconCount: reservation.perconCount,
//                 specialRequest: reservation.specialRequest,
//                 status: reservation.status
//             }
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// // Admin Detete Reservation
// const getDeleteReservation = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const reservation = await Reservation.findByIdAndDelete(id);

//         if (!reservation) return res.status(404).json({ message: "Reservation not found" });

//         res.status(200).json({
//             success: true,
//             message: "Reservation deleted successfully",
//             reservation
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }


// // customer Cancel Reservation

// const getCancelReservationStatus = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const reservation = await Reservation.findById(id);

//         if (!reservation) return res.status(404).json({ message: "Reservation not found" });

//         if (reservation.status === "approved") {
//             return res.status(400).json({ message: "Reservation cannot be cancelled After Approved" });
//         }

//         reservation.status = "cancelled";
//         await reservation.save();

//         res.status(200).json({
//             success: true,
//             message: "Reservation cancelled successfully",
//             reservation: {
//                 _id: reservation._id,
//                 user: reservation.user,
//                 date: reservation.date,
//                 time: reservation.time,
//                 personCount: reservation.personCount,
//                 specialRequest: reservation.specialRequest,
//                 status: reservation.status
//             }
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



// export { createReservation, getMyReservation, getAllReservation, getUpdateReservationStatus, getCancelReservationStatus, getDeleteReservation };



























import { Reservation } from "../models/reservation.model.js";


// Create Reservation
const createReservation = async (req, res) => {

    // Admin cannot make reservation
    if (req.user.role === "admin") {
         return res.status(403).json({ message: "Admins cannot make reservations" });
    }

    try {
        const { date, time, personCount, number, specialRequest } = req.body;
        const reservationDate = new Date(date);

        const existingReservation = await Reservation.findOne({ date, time });

        if (existingReservation) return res.status(400).json({ message: "This Time Slod is already booked" });        

        const newReservation = await Reservation.create({
            user: req.user._id,
            date: reservationDate,
            time,
            personCount,
            number,
            specialRequest
        });

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            newReservation
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// Customer Reservation
const getMyReservation = async (req, res) => {
    try {
        const myReservation = await Reservation.find({ user: req.user._id });
        res.status(200).json({
            success: true,
            myReservation
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};



// Admin get All Reservation

const getAllReservation = async (req, res) => {
    try {
        const allReservation = await Reservation.find().populate("user", "name email");
        res.status(200).json({
            success: true,
            allReservation
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


// Admin Update Reservation Status

const getUpdateReservationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findById(id);

        if (!reservation) return res.status(404).json({ message: "Reservation not found" });

        reservation.status = req.body.status;
        await reservation.save();

        res.status(200).json({
            success: true,
            message: "Reservation status updated successfully",
            reservation: {
                _id: reservation._id,
                user: reservation.user,
                date: reservation.date,
                time: reservation.time,
                perconCount: reservation.perconCount,
                number: reservation.number,
                specialRequest: reservation.specialRequest,
                status: reservation.status
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Admin Detete Reservation
const getDeleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByIdAndDelete(id);

        if (!reservation) return res.status(404).json({ message: "Reservation not found" });

        res.status(200).json({
            success: true,
            message: "Reservation deleted successfully",
            reservation
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// customer Cancel Reservation

const getCancelReservationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findById(id);

        if (!reservation) return res.status(404).json({ message: "Reservation not found" });

        if (reservation.status === "approved") {
            return res.status(400).json({ message: "Reservation cannot be cancelled After Approved" });
        }

        reservation.status = "cancelled";
        await reservation.save();

        res.status(200).json({
            success: true,
            message: "Reservation cancelled successfully",
            reservation: {
                _id: reservation._id,
                user: reservation.user,
                date: reservation.date,
                time: reservation.time,
                personCount: reservation.personCount,
                number: reservation.number,
                specialRequest: reservation.specialRequest,
                status: reservation.status
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



export { createReservation, getMyReservation, getAllReservation, getUpdateReservationStatus, getCancelReservationStatus, getDeleteReservation };