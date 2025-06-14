import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    //get currently booked doctor
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    // console.log("Doctor ticket price:", doctor.ticketPrice);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const productData = {
      name: doctor.name,
      description: doctor.bio,
    };
    if (doctor.photo && doctor.photo.trim() !== "") {
      productData.images = [doctor.photo];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `http://localhost:5173/home/checkout-success`,
      cancel_url: `http://localhost:5173/home/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: doctor.ticketPrice * 100,
            product_data: productData,
          },
          quantity: 1,
        },
      ],
    });

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });
    await booking.save();
    res
      .status(200)
      .json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Error creating checkout session" });
  }
};
