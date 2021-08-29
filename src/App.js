import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import './App.css';
import TimeList from './components/TimeList'

import { render } from '@testing-library/react';
let displayDay=0;
let displayDayEng='Monday'

class App extends Component{
  
listid=1;
timeid=1;

  state={
   weekend:[
     {
       day:0,
    input: '',
    timeinput:'',
    todos:[],
  time:[]}
    //시간 list추가하고 ui로 나타내기!!!
  ,
{
  day:1,
  input:'',
  timeinput:'',
  todos:[],
  time:[]
},
{day:2, 
input:'',
timeinput:'',
todos:[],
time:[]
},
{
  day:3,
input:'',
timeinput:'',
todos:[],
time:[]
},
{
  day:4,
  input:'',
  timeinput:'',
  todos:[],
  time:[]
},
{
  day:5,
  input:'',
  timeinput:'',
  todos:[],
  time:[]
},
{
  day:6,
  input:'',
  timeinput:'',
  todos:[],
  time:[]
}
]
   
  }

  handleChange = (e) =>
  {
    const {weekend}=this.state;
    const newWeek=weekend.map(weekend=>weekend.day===
    displayDay?
      {...weekend, input:e.target.value}
      :weekend);
  this.setState(
  {weekend:newWeek});

  }

  handleTimeChange
  = (e) =>
  {
    const {weekend}=this.state;
    const newWeek=weekend.map(weekend=>weekend.day===
    displayDay?
      {...weekend, timeinput:e.target.value}
      :weekend);
  this.setState(
  {weekend:newWeek});

  }

  handleCreate=()=>
  {
    const {weekend}=this.state;
  const {input,todos}=this.state.weekend[displayDay]
    //displayDay에 해당하는 배열 수정
    const newWeek=
    weekend.map(weekend=>weekend.day===
      displayDay?
        {...weekend, input:'',
        todos:todos.concat({
          id:this.listid++,
          text:input,
          checked:false
        })}
      :weekend);
    this.setState
   ({weekend:newWeek})

      }

      handleTimeCreate=()=>
      {
        const {weekend}=this.state;
      const {timeinput,time}=this.state.weekend[displayDay]
        //displayDay에 해당하는 배열 수정
        const newWeek=
        weekend.map(weekend=>weekend.day===
          displayDay?
            {...weekend, timeinput:'',
            time:time.concat({
              id:this.timeid++,
              text:timeinput,
              checked:false
            })}
          :weekend);
        this.setState
       ({weekend:newWeek})
    
          }
      
      handleKeyPress = (e) =>
      {
        if(e.key==='Enter')
        {
          this.handleCreate();

        }
      }

      handleTimeKeyPress = (e) =>
      {
        if(e.key==='Enter')
        {
          this.handleTimeCreate();

        }
      }

      handleToggle=(id)=>{     
        const {weekend}=this.state;   
        const{ todos,time }=this.state.weekend[displayDay];
        const index=todos.findIndex(todos=>todos.id===id);
        const selected=todos[index];
        const timeselected=time[index];
        const nextTodos=[...todos];
        const nextTimes=[...time];

        nextTodos[index] = {
          ...selected,
          checked: !selected.checked
        };

if(selected.id>=this.timeid)
{
  const newWeek=weekend.map(w=>w.day===displayDay?{...w,todos:nextTodos}:w);
  this.setState({weekend:newWeek});
}
else
{
        nextTimes[index]={
          ...timeselected,
          checked:!timeselected.checked

        };

      

        const newWeek=weekend.map(weekend=>weekend.day===
          displayDay?
            {...weekend, todos:nextTodos, 
              time:nextTimes
            }
          :weekend);


          

        this.setState({
        weekend:newWeek});
      }
      }



      handleRemove=(id)=>
      {
        const {weekend}=this.state;
        const {todos,time}=this.state.weekend[displayDay];
        const index=todos.findIndex(t=>t.id===id);
        const selected=todos[index];

        let newWeek;
        if(selected.id>=this.timeid)
        {
          newWeek=weekend.map(w=>w.day===displayDay?{
            ...w,
            todos:todos.filter(todo=>todo.id!==id),
           }:w)
        }
        else
        {
          newWeek=weekend.map(w=>w.day===displayDay?{
          ...w,
          todos:todos.filter(todo=>todo.id!==selected.id),
          time:time.filter(t=>t.id!==selected.id)
         }:w)
        }
        this.setState({
          weekend:newWeek,
        })
      }

    checkingDay(num)
  {
    switch (num)
    {
        case 0: displayDay=0;
        displayDayEng='MONDAY'
        break;

        case 1:displayDay=1;
       displayDayEng='TUESDAY';
        break;

        case 2:displayDay=2;
        displayDayEng='WEDNSDAY';
        break;
        
        case 3: displayDay=3;
        displayDayEng='THURSDAY';
        break;

         case 4: displayDay=4;
         displayDayEng='FRIDAY';
         break;
        
         case 5: displayDay=5;
         displayDayEng='SATURYDAY';
         break;

        case 6: displayDay=6;
        displayDayEng='SUNDAY';
         break;

         default:
         }

         

         document.getElementsByClassName("dpDay")[0].innerHTML=displayDayEng;
        
         

      
      }
  
  render()
  {
    const{
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      checkingDay,
      handleTimeChange,
      handleTimeCreate,
      handleTimeKeyPress

    } = this;

     
    return (
       <main>
         <div className="title">
            TodoMate</div>
            <div className="checkDay">
            <div className="MON" onClick={()=>checkingDay(0)}>MON</div>
            <div className="TUE" onClick={()=>checkingDay(1)}>TUE</div>
            <div className="WED" onClick={()=>checkingDay(2)}>WED</div>
            <div className="THU" onClick={()=>checkingDay(3)}>THU</div>
            <div className="FRI" onClick={()=>checkingDay(4)}>FRI</div>
            <div className="SAT" onClick={()=>checkingDay(5)}>SAT</div>
            <div className="SUN" onClick={()=>checkingDay(6)}>SUN</div>
           </div>
           <div className="dpDay">{displayDayEng}</div>

      <div className="s1">     
     <TodoListTemplate form={(<Form 
    value={this.state.weekend[displayDay].input}
     onKeyPress={handleKeyPress}
     onChange={handleChange}
     onCreate={handleCreate}
     mode={1}
    />)} >
      <TodoItemList  todos={this.state.weekend[displayDay].todos} onToggle={handleToggle} onRemove={handleRemove}/>
       </TodoListTemplate>
       <TodoListTemplate form={(<Form 
    value={this.state.weekend[displayDay].timeinput}
     onKeyPress={handleTimeKeyPress}
     onChange={handleTimeChange}
     onCreate={handleTimeCreate}
     mode={2}
    />)} >
      <TimeList time={this.state.weekend[displayDay].time} />
    </TodoListTemplate>
       </div>
</main>
    );
  }

  
}


export default App;

//history 추가
//date와 일치하는 index의 todo값 불러오기