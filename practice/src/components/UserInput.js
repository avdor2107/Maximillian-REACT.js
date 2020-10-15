import React,{Component} from 'react';

const UserInput = (props) => {

    const styleConst = {
        border: '2x solid red'
    };
    return  (
    <div>
  
    <input type="text" style={styleConst} onChange={props.click} value={props.currentName}/>
    <button >Change</button>

    </div>
    )
}

export default UserInput;