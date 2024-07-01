const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Amenities sub-schema
const AmenitiesSchema = new Schema({
  general: {
    wifi: Boolean,
    internet: Boolean,
    tv: Boolean,
    airConditioning: Boolean,
    fan: Boolean,
    privateEntrance: Boolean,
    dryer: Boolean,
    heater: Boolean,
    washingMachine: Boolean,
    detergent: Boolean,
    clothesDryer: Boolean,
    babyCot: Boolean,
    desk: Boolean,
    fridge: Boolean
  },
  other: {
    wardrobe: Boolean,
    clothHook: Boolean,
    extraCushion: Boolean,
    gasStove: Boolean,
    toiletPaper: Boolean,
    freeToiletries: Boolean,
    makeupTable: Boolean,
    hotPot: Boolean,
    bathroomHeaters: Boolean,
    kettle: Boolean,
    dishwasher: Boolean,
    bbqGrill: Boolean,
    toaster: Boolean,
    towel: Boolean,
    diningTable: Boolean
  },
  safe: {
    fireSiren: Boolean,
    fireExtinguisher: Boolean,
    antiTheftKey: Boolean,
    safeVault: Boolean
  }
});

// Define House Rules sub-schema
const HouseRulesSchema = new Schema({
  pets: {
    allow: Boolean,
    charge: Boolean
  },
  partyOrganizing: {
    allow: Boolean,
    charge: Boolean
  },
  cooking: {
    allow: Boolean,
    charge: Boolean
  },
  additionalRules: [String]
});

// Define Listing schema
const ListingSchema = new Schema({
  propertyType: String,
  name: String,
  country: String,
  region: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  roomNumber: Number,
  bedrooms: Number,
  beds: Number,
  bathrooms: Number,
  kitchenAmenities: AmenitiesSchema,
  generalAmenities: AmenitiesSchema.general, // Flattened for easy access
  houseRules: HouseRulesSchema,
  description: String,
  coverImage: String,
  pictureLinks: [String],
  pricing: {
    currency: String,
    basePriceWeekdays: Number,
    basePriceWeekends: Number,
    longTermDiscount: Number,
    minNights: Number,
    maxNights: Number
  },
  availability: {
    // Define availability settings as needed
  }
});

// Define User schema
const OwnerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  listings: [ListingSchema]
});

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;
