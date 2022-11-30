
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';


const taskList = [
  {id:"task1",title:"Buy Milk", isComplete:true},
  {id:"task2",title:"Read a book", isComplete:false},
  {id:"task3",title:"Early morning run", isComplete:false},
  {id:"task4",title:"Drink water", isComplete:false},
  {id:"task5",title:"Visit the puppy shelter", isComplete:true},
  {id:"task6", title:"Watch Bad Sisters", isComplete:false}
];

function App() {
   const [data, setData]= useState(taskList)

   function updateTasklist(id){
    const newData = data.map((item) => {
      if(item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item;
    });
    setData(newData)
   }

   return (
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
          {/* <Task id={taskList[0].id} title={taskList[0].title} buyMilk={taskList[0].isComplete}></Task> */}
          
          {
            data.map((item)=> {
              const {title, isComplete, id} =item
              return <Task handleClick={updateTasklist} key={id} id={id} title={title} isComplete={isComplete}></Task>
            })
          }
        </TaskContainer>
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

