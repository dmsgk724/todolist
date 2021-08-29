import React, { Component } from 'react';
import TimeListItem from './TimeListItem';


class TimeList extends Component{
    render()
    {
        const { time }=this.props;
        const timelist=time.map
        (
            ({id,text,checked})=>
            (
                <TimeListItem
                id={id}
                text={text}
                checked={checked}
                
                />
            )
        );

        return(

            
                <div>
                {timelist}</div>
              
           
        );
    }
}

export default TimeList;
