const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://tse3.mm.bing.net/th/id/OIP.BktD7_xVPz33Zo6l79QFvAHaEh?pid=Api&P=0&h=180",
      set: (v) =>
        v === ""
          ? "https://tse3.mm.bing.net/th/id/OIP.BktD7_xVPz33Zo6l79QFvAHaEh?pid=Api&P=0&h=180"
          : v,
    },
  },

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
