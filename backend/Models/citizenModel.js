const mongoose = require("mongoose");
const citizenSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  id: { type: mongoose.Schema.Types.ObjectId, ref: "Citizen" },
  password: { type: String, required: true },
});

const governmentAgentSchema = new mongoose.Schema({
  projectStatus: { type: Number, min: 0, max: 1 },
});
governmentAgentSchema.add(citizenSchema);
const Citizen = mongoose.model("citizens", citizenSchema);
const Agent = mongoose.model("Agents", governmentAgentSchema);

module.exports = { Citizen, Agent };
