import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Modal, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

export class ContactsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedContact: {},
            showModal: false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleButtonClick (id) {
        const selectedContact = this.props.contacts.find(contact => contact.id === id);
        this.setState({ 
            selectedContact,
            showModal: true
        })
    }

    handleClose() {
        this.setState({
            selectedContact: {},
            showModal: false
        })
    }

    render() {
        const { contacts } = this.props;
        const { showModal, selectedContact } = this.state;
        return (
          <div>
            <div className="contacts">
              <div className="container">
                <div className="row">
                  <Col xs={12} className="contacts__title">
                    <h1>Contacts:</h1>
                  </Col>
                  <Col xs={12}  className="contacts__content">
                    {contacts.length > 0 ? (
                      contacts.map(contact => (
                        <Col xs={12} key={contact.id} className="contacts__contact-item float-left mb-3 justify-content-center">
                          <Col xs={12} sm={6} className="float-left">
                            <p>
                              <strong>Name:</strong> {contact.name}
                            </p>
                            <p>
                              <strong>Phone:</strong>
                              {contact.phone}
                            </p>
                          </Col>
                          <Col xs={12} sm={6} className="d-flex float-left justify-content-end">
                            <Button
                              variant="primary"
                              onClick={() => this.handleButtonClick(contact.id)}
                            >
                              Details
                            </Button>
                          </Col>
                        </Col>
                      ))
                    ) : (
                      <Col>No contacts.</Col>
                    )}
                  </Col>
                </div>
              </div>
            </div>
            <Modal
              show={showModal}
              onHide={this.handleClose}
              className="contact-info right"
            >
            <div className="modal-close">
                <Button onClick={this.handleClose}>x</Button>
            </div>
              <div className="container">
                <div className="row">
                  <Col xs={12} className="contact-info__icon">
                    <FontAwesomeIcon icon={faIdCardAlt} size="3x" />
                  </Col>
                  <Col xs={12} className="contact-info__name">
                    {selectedContact.name}
                  </Col>
                  <Col xs={12} className="contact-info__tags">
                    <span>ADMIN</span>
                    <span>HOST</span>
                    <span>TAG 3</span>
                  </Col>
                  <Col xs={12} className="contact-info__content">
                    <Tabs
                      defaultActiveKey="maininfo"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="maininfo" title="Main Info">
                        <Col xs={12} className="contact-info__content-main-info">
                          <Col xs={12} sm={6} className="float-left">
                            <p className="label">Phone</p>
                            <p className="value">{selectedContact.phone}</p>
                          </Col>
                          <Col xs={12} sm={6} className="float-left">
                            <p className="label">Ip</p>
                            <p className="value">192.168.0.1</p>
                          </Col>
                        </Col>
                      </Tab>
                      <Tab eventKey="history" title="History">
                        History
                      </Tab>
                      <Tab eventKey="messages" title="Messages" disabled>
                        Messages
                      </Tab>
                    </Tabs>
                  </Col>
                </div>
              </div>
            </Modal>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
});
 
export default connect(mapStateToProps, undefined)(ContactsPage);