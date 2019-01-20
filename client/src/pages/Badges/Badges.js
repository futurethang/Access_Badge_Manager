import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Badges extends Component {
  state = {
    badges: [],
    badgeID: "",
    currentBorrower: "",
    phoneNumber: "",
    guestOrganization: "",
    host: ""
  }

  componentDidMount() {
    this.loadBadges();
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBadges = () => {
    API.getBadges()
      .then(res =>
        this.setState({
          badges: res.data,
          badgeID: "",
          currentBorrower: "",
          phoneNumber: "",
          guestOrganization: "",
          host: ""
        }))
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBadge = id => {
    API.deleteBadge(id)
      .then(res => this.loadBadges())
      .catch(err => console.log(err));
  };

  // When the form is submitted, use the API.saveBadge method to save the badge data
  // Then reload badges from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("FARTS")
    if (this.state.badgeID && this.state.phoneNumber) {
      API.saveBadge({
        badgeID: this.state.badgeID,
        currentBorrower: this.state.currentBorrower,
        phoneNumber: this.state.phoneNumber,
        guestOrganization: this.state.guestOrganization,
        host: this.state.host
      })
        .then(res => this.loadBadges())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h3>Check Out a Badge</h3>
            <form>
              <Input
                value={this.state.badgeID}
                onChange={this.handleInputChange}
                name="badgeID"
                placeholder="Badge Number (required)"
              />
              <Input
                value={this.state.currentBorrower}
                onChange={this.handleInputChange}
                name="currentBorrower"
                placeholder="Borrowed to (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (required)"
              />
              <Input
                value={this.state.guestOrganization}
                onChange={this.handleInputChange}
                name="guestOrganization"
                placeholder="Guest Organiation (required)"
              />
              <Input
                value={this.state.host}
                onChange={this.handleInputChange}
                name="host"
                placeholder="Host (required)"
              />
              
            </form>
            <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Badge
              </FormBtn>
            <h3>Badges Currently out:</h3>
            {this.state.badges.length ? (
              <List>
                {this.state.badges.map(badge => {
                  return (
                    <ListItem key={badge._id}>
                      <a href={"/badges/" + badge._id}>
                        <strong>
                          {badge.badgeID} borrowed by {badge.currentBorrower}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBadge(badge._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Badges;