import React, { Component } from 'react';
import './TimeListItem.css';

class TimeListItem extends Component
{
    shouldComponentUpdate(nextProps,nextState)
    {
        return this.props.checked!==nextProps.checked;
        
    }
    render(){

        const {id, text, checked}= this.props;

        return (
            <div className="time-item">
                <div className={`time-text ${checked && 'checked'}`}>
                    <div>{id}</div>
                    <div>{text}</div>
                    </div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                    </div>
        );

    }
}

export default TimeListItem;