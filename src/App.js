import logo from './logo.svg';
import './App.css';
import React from 'react';
import DragnDrop from './DragnDrop'
const data = [
  {title:"New Tasks",items:["DashBoard Task","Tabs Task"]},
  {title:"In Progress",items:["Azure Pipeline","Testing"]},
  {title:"Review",items:["Workflow Approval","Leave request"]},
  {title:"Done",items:["UAT Deployment","Prod Issues Fixed","Daily Standup"]},

];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragnDrop data={data}></DragnDrop>
      </header>
    </div>
  );
}

export default App;
