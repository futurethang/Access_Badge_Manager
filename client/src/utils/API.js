import axios from "axios";

export default {
  // Gets all badges
  getBadges: function() {
    return axios.get("/api/badges");
  },
  // Gets the badge with the given id
  getBadge: function(id) {
    return axios.get("/api/badges/" + id);
  },
  // Deletes the badge with the given id
  deleteBadge: function(id) {
    return axios.delete("/api/badges/" + id);
  },
  // Saves a badge to the database
  saveBadge: function(badgeData) {
    return axios.post("/api/badges", badgeData);
  }
};
