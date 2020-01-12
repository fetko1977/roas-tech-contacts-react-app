import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";

export class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const { username, password } = this.state;
        const user = { username, password };

        if (user.username === "Admin" && user.password === "test1A") {
            this.setState({ username: '', password: '', error: false})
            localStorage.setItem('user', JSON.stringify(user));
            this.props.login(user);
            this.props.history.push('/profile');
            return;
        }

        return this.setState({ error: true });
    }

    render() {
        let { username, password, error } = this.state;
        return (
          <div className="container">
            <div className="row">
              <div className="login-wrapper">
                <div className="login-wrapper__header">
                  <h1 className="login-wrapper__title">Contacts Application</h1>
                  <p>Please use the form below to login.</p>
                </div>
                <div className="login-wrapper__form-wrapper">
                  { error && <div>Credentials are not valid.</div>}
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email">
                      <Form.Label>Username</Form.Label>
                      <FormControl
                        autoFocus
                        type="text"
                        value={username}
                        onChange={e =>
                          this.setState({ username: e.target.value, error: false })
                        }
                      />
                    </FormGroup>
                    <FormGroup controlId="password">
                      <Form.Label>Password</Form.Label>
                      <FormControl
                        value={password}
                        onChange={e => this.setState({ password: e.target.value, error: false })}
                        type="password"
                      />
                    </FormGroup>
                    <Button block type="submit" className="btn--blue">
                      Login
                    </Button>
                </Form>
              </div>
              </div>
            </div>
          </div>
        );
    }
};

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  error: state.erorr
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
