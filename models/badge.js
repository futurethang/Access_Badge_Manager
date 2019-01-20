const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
  badgeID: {type: String, required: true},
  currentBorrower: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  guestOrganization: {type: String, required: true},
  host: { type: String, required: true },
  checkedOut: { type: Date, default: Date.now },
});

const Badge = mongoose.model("Badge", BadgeSchema);

module.exports = Badge;
