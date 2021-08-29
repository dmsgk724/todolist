import React from 'react';
import './Timeform.css';

const Timeform=({value,onChange,onCreate,onKeyPress})=>
{
    return(
        <div className="form">       
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="create-button" onClick={onCreate}>
                시간 추가
                </div>
            </div>
    );
};

export default Timeform;