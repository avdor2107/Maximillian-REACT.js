import React from 'react';
import './UserInput.css';

const Validation = (props) => {
    let validationMessage = 'Text long enough!';
    if(props.inputLength <= 5){
        validationMessage = 'Text too short';
    }
    return(
        <div>
            {validationMessage}
        </div>
    );

  
};

export default Validation;