import React from 'react';
import './Form.css';

const Form=({value,onChange,onCreate,onKeyPress,mode})=>
{
    if(mode===1)
    return(
        <div className="form">
            
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        
        <div className="create-button" onClick={onCreate}>
                할일 추가
                </div>
            </div>
    );
    else 
    return(
        <div className="form">
            
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        
        <div className="create-button" onClick={onCreate}>
               시간 추가
                </div>
            </div>
    );  
    
};

export default Form;