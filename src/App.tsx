import React  from 'react'
import TaskInput from './components/addTask/addTask';
import {TaskBoardContainer} from './components/taskBoard/taskBoardContainer';

const App = () => {

  return (
    <div className="App" style={{ position: "relative", height: "100vh" }}>
      <TaskInput />
      <TaskBoardContainer />
    </div>
  );

};

export default App;
