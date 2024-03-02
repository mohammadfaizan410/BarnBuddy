const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User, Customer, Business, Product, Review } = require("./model.js");

// ------- mongo db connection -------
mongoose.connect("mongodb://127.0.0.1:27017/barnbuddy");

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected: " + database.name);
});

// ------- mongo db connection --------

// Register
router.post("/user/customer/add", async (req, res) => {
  try {
    const { username, password, email, fullname, date_of_birth } = req.body;
    const user = new User({
      username: username,
      password: password,
      email: email,
      fullname: fullname,
      date_of_birth: date_of_birth,
    });

    await user.save();

    const customer = new Customer({
      user_id: user._id,
      orders: [],
      purchase_history: [],
      billing_details: {},
      followed_businesses: [],
      followed_products: [],
      cart_items: [
        {
          product_id: "",
          quantity: 0,
        },
      ],
      user_type: "customer",
    });

    await customer.save();

    return res.status(200).json({ message: "Success Customer Added." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/user/business/add", async (req, res) => {
  try {
    const {
      password,
      email,
      title,
      description,
      website_link,
      location,
      phone,
    } = req.body;

    const user = new User({
      username: "NA",
      password: password,
      email: email,
      fullname: "NA",
      date_of_birth: "NA",
      user_type: "business",
    });

    await user.save();

    const banner_image = "";
    const avatar = "";

    const business = new Business({
      user_id: user._id,
      title: title,
      description: description,
      website_link: website_link,
      location: location,
      email: email,
      phone: phone,
      products: [],
      instore_purchasing: false,
      business_type: [],
      banner_image: banner_image,
      avatar: avatar,
      deals: [],
      reviews: {},
      filters: [],
      registration_date: Date.now(),
      followers: [],
      opening_hours: [],
    });

    await business.save();

    await user.save();
    return res.status(200).json({ message: "Success Business Added." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/user/customer/update", async (req, res) => {
  try {
    const { user_id, username, fullname, date_of_birth } = req.body;

    const user = await User.findOne({
      _id: user_id,
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.username = username;
    user.fullname = fullname;
    user.date_of_birth = date_of_birth;

    await user.save();

    return res.status(200).json({ message: "Success Customer Updated." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/user/business/update", async (req, res) => {
  try {
    const {
      user_id,
      email,
      title,
      description,
      website_link,
      location,
      phone,
    } = req.body;

    const user = User.findOne({
      _id: user_id,
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const banner_image = "";
    const avatar = "";

    const business = await Business.findOne({
      user_id: user_id,
    });

    business.title = title;
    business.description = description;
    business.website_link = website_link;
    business.location = location;
    business.email = email;
    business.phone = phone;
    business.banner_image = banner_image;
    business.avatar = avatar;

    await business.save();

    await user.save();
    return res.status(200).json({ message: "Success Business Updated." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
