const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedRepresentative: {
    name: { type: String, required: true },
    role: { type: String },
    contact: { type: String },
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: {
    type: String,
    enum: ["Ongoing", "Completed", "On Hold"],
    default: "Ongoing",
  },
  progressUpdates: [
    {
      date: { type: Date, default: Date.now },
      description: { type: String },
    },
  ],
  budgetAllocation: {
    totalAmount: { type: Number },
    fundingSources: [
      {
        name: { type: String },
        amount: { type: Number },
      },
    ],
    expenditures: [
      {
        description: { type: String },
        amount: { type: Number },
      },
    ],
  },
  resourceAllocation: {
    manpower: [
      {
        name: { type: String },
        role: { type: String },
      },
    ],
    equipment: [
      {
        name: { type: String },
        quantity: { type: Number },
      },
    ],
    facilities: [
      {
        name: { type: String },
        availability: { type: Boolean },
      },
    ],
  },
  stakeholders: [
    {
      name: { type: String },
      role: { type: String },
      contact: { type: String },
    },
  ],
  documentation: [
    {
      title: { type: String },
      link: { type: String },
    },
  ],
  issuesAndRisks: [
    {
      description: { type: String },
      mitigationStrategy: { type: String },
    },
  ],
  decisionLog: [
    {
      date: { type: Date, default: Date.now },
      description: { type: String },
      outcome: { type: String },
    },
  ],
  feedbackMechanism: { type: String },
  evaluationAndMonitoring: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
