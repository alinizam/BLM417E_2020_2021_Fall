import React from 'react';

const AppFunction = (props) => {
    return (
        <div>
            <p>{props.name}</p>  
            <p>{props.version}</p>
        </div>
    );
};

export default AppFunction;