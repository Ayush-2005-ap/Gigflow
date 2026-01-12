import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";
import mongoose from "mongoose";

export const createBid = async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user.id,
  });
  res.json(bid);
};

export const getBidsForGig = async (req, res) => {
  const bids = await Bid.find({ gigId: req.params.gigId });
  res.json(bids);
};

// ⭐ ATOMIC HIRING LOGIC
export const hireBid = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bid = await Bid.findById(req.params.bidId).session(session);
    if (!bid) throw new Error("Bid not found");

    const gig = await Gig.findById(bid.gigId).session(session);
    if (gig.status === "assigned") throw new Error("Already assigned");

    // hire this bid
    bid.status = "hired";
    await bid.save({ session });

    // reject others
    await Bid.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" },
      { session }
    );

    // update gig
    gig.status = "assigned";
    await gig.save({ session });

    await session.commitTransaction();
    res.json({ message: "Freelancer hired successfully" });

  } catch (err) {
    await session.abortTransaction();
    res.status(400).json({ message: err.message });
  } finally {
    session.endSession();
  }
};
