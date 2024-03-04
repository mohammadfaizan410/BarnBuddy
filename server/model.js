const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },

  email: {
    type: String,
  },

  fullname: {
    type: String,
  },

  date_of_birth: {
    type: Date,
  },

  user_type: {
    type: String,
  },
});

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  rating: {
    type: Number,
  },

  content: {
    type: String,
  },

  creation_date: {
    type: Date,
  },

  helpfull: {
    total: Number,
    users: [String],
  },
});

const customerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orders: {
    type: [String],
  },

  purchase_history: {
    type: [String],
  },

  billing_details: {
    invoiceNumber: String,
  },

  followed_businesses: {
    type: [String],
  },

  followed_products: {
    type: [String],
  },

  cart_items: [
    {
      product_id: String,
      quantity: Number,
    },
  ],
});

const productSchema = new mongoose.Schema({
  business_id: {
    type: String,
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  categories: {
    type: [String],
  },

  price: {
    type: Number,
  },

  followers: {
    type: [String],
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  featured_image: {
    type: String,
  },

  images: {
    type: [String],
  },
});

const businessSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  website_link: {
    type: String,
  },

  location: {
    type: String,
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
  },

  //TODO: Add a product schema
  products: {
    type: [String],
  },

  instore_purchasing: {
    type: Boolean,
  },

  claimed: {
    type: Boolean,
  },

  business_type: {
    type: [String],
  },

  banner_image: {
    type: String,
  },

  avatar: {
    type: String,
  },

  //TODO: Add a deals schema
  deals: {
    type: [String],
  },

  reviews: {
    type: [String],
  },

  filters: {
    type: [String],
  },

  registration_date: {
    type: Date,
  },

  followers: {
    type: [String],
  },

  opening_hours: {
    type: [String],
  },
});

const businessClaimSchema = new mongoose.Schema({
  business_id: {
    type: String,
  },

  name: {
    type: String,
  },

  email: {
    type: String,
  },

  submission_date: {
    type: Date,
  },

  business_ownership_document: {
    type: String,
  },

  government_issued_id: {
    type: String,
  },

  status: {
    type: String, //approved, pending, rejected
  },
});

const User = mongoose.model("User", userSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Business = mongoose.model("Business", businessSchema);
const Product = mongoose.model("Product", productSchema);
const Review = mongoose.model("Review", reviewSchema);
const BusinessClaim = mongoose.model("BusinessClaim", businessClaimSchema);

module.exports = {
  User,
  Customer,
  Business,
  Product,
  Review,
  BusinessClaim,
};
