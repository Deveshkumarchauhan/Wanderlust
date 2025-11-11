const mongoose = require("mongoose");
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
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
