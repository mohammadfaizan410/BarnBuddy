const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const fs = require("fs");

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

// --------- functions ------------

async function importBusinesses() {
  try {
    // Read the data from the file
    const rawData = fs.readFileSync("data.json");
    const data = JSON.parse(rawData);
    let count = 0;

    // Iterate over each object in the array
    for (const business of data) {
      const avatar = business.imgSrcset.split(", ")[0].split(" ")[0];
      const rating = business.starRating;
      const title = business.title;
      const location = business.primaryLocation;
      const phone = business.phoneNumber;
      const description = business.about;
      const banner_image = business.backgroundImg;
      const email = "";
      const website_link = "";

      if (avatar.includes("https://images.leafly.com/")) {
        console.log(
          "The imgSrcset link contains 'https://images.leafly.com/, SKIPPING'."
        );
      } else {
        count++;

        const user = new User({
          username: "NA",
          password: "temp123^@&#@*#*",
          email: email,
          fullname: "NA",
          date_of_birth: null,
          user_type: "business",
        });

        await user.save();

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
          reviews: [],
          filters: [],
          registration_date: Date.now(),
          followers: [],
          opening_hours: [],
          claimed: false,
        });

        await business.save();
      }
    }
    console.log("-------------------");
    console.log("Total businesses imported:", count);
    console.log("-------------------");
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

//importBusinesses();

// --------- functions ------------

// Register
router.post("/user/customer/add", async (req, res) => {
  try {
    const { username, password, email, fullname, date_of_birth } = req.body;

    const existing_user = await User.findOne({
      email: email,
    });

    if (existing_user) {
      return res.status(400).json({ message: "User already exists." });
    }
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

    const existing_user = await User.findOne({
      email: email,
    });

    if (existing_user) {
      return res.status(400).json({ message: "User already exists." });
    }

    const user = new User({
      username: "NA",
      password: password,
      email: email,
      fullname: "NA",
      date_of_birth: null,
      user_type: "business",
    });

    await user.save();

    const banner_image =
      "https://img.freepik.com/free-vector/gradient-duotone-gaming-twitter-header_23-2149231677.jpg";
    const avatar =
      "https://www.dgpublishing.com/wp-content/uploads/cache/2018/02/temp-avatar/1922871591.jpg";

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
      reviews: "",
      filters: [],
      registration_date: Date.now(),
      followers: [],
      opening_hours: [],
      claimed: false,
    });

    await business.save();

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

router.post("/user/business/:business_id", async (req, res) => {
  try {
    const { business_id } = req.params;

    const business = await Business.findOne({
      _id: business_id,
    });

    if (!business) {
      return res.status(400).json({ message: "Business not found" });
    }

    return res.status(200).json({ business: business });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/business/unclaimed/all", async (req, res) => {
  try {
    const businesses = await Business.find({
      claimed: false,
    });

    console.log(business);
    return res.status(200).json({ businesses: businesses });
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

router.post("/business/claim", async (req, res) => {
  try {
    const { business_id } = req.body;

    return res.status(200).json({ message: "Success Business Updated." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
