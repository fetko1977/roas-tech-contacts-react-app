import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private message. Please don't share!</p>}
            <WrappedComponent { ...props }/>
        </div>
    )
}

//requireAuthentification
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentificated ? ( <WrappedComponent { ...props }/> ) : ( <p>Please Login to view the info!</p>)  }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);


ReactDOM.render(<AuthInfo isAuthentificated={true} info="There are the details" />, document.getElementById('app'));
