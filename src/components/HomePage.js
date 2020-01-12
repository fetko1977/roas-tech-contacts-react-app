import React from 'react';
import { connect } from 'react-redux';

export const HomePage = ({ user }) => (
    <div className="home">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>This is Home Page!!!</h1>
                    <h3>Currently logged user is - </h3>
                    <p>{user.username}</p>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, undefined)(HomePage);