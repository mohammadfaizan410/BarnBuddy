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

  token: {
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

  name: {
    type: String,
  },

  brandName : {
    type: String,
  },
  cartUnit : {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  productCategory: {
    type : String,
  },
  imageUrl : {
    type: String,
  },
  strainName : {
    type: String,
  },
  strainCategory : {
    type : String,
  },
  strainDescription: {
    type : String,
  },
  strainNucleusImageSvg : {
    type: String,
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
  isFeatured : {
    type: Boolean,
  },
});

const businessSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: {
    type: String,
  },
  address1  : {
    type: String,
  },
  coverPhotoUrl : {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  flags: {
    type: [String],
  },
  locations : {
    type: [Object],
  },
  logoUrl : {
    type: String,
  },
  mapMarkerLocations : {
    type: [Object],
  },
  phone: {
    type: String,
  },
  photos : {
    type: [Object],
  },
  primaryLocation : {
    type: Object,
  },
  state : {
    type: String,
  },
  tags : {
    type: [String],
  },
  website: {
    type: String,
  },
  zip : { 
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
  isFeatured : {
    type: Boolean,
  },
  isTopRated : {
    type: Boolean,
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
