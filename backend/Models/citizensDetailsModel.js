const mongoose = require("mongoose");

const citizenDetailsSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: true },
  },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    LGA: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String },
  },
  contact: {
    phone: { type: String, required: true },
    email: { type: String },
  },
  idNumber: { type: String, required: true },
  maritalStatus: {
    type: String,
    enum: ["Single", "Married", "Divorced", "Widowed"],
  },
  occupation: { type: String, default: "unemployed" },
  educationLevel: { type: String },
  emergencyContact: {
    name: { type: String },
    relationship: { type: String },
    phone: { type: String },
  },
  votingStatus: { type: Boolean, default: false },
});

const CitizenDetails = mongoose.model("Citizen", citizenDetailsSchema);

module.exports = CitizenDetails;
