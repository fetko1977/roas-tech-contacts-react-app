import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, Button } from 'react-bootstrap';
import { logout } from '../actions/auth';

export class HomePage extends Component { 
    render() {
        let { user, logout } = this.props;
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <Col xs={12}>
                            <h1>Home</h1>
                        </Col>
                        <Col xs={12} sm={8} md={5} lg={3}>
                            <Card className="p-3">
                            <Card.Img variant="top" src="images/female-user-icon.png" />
                            <Card.Body>
                                <Card.Title style={{fontSize: 20}}>{user.username}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Logged in</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={logout} >Logout</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);