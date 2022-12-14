import { useState } from 'react';
import './App.css';
import DynamicForm from './Components/DynamicForm';

function App() {
  const [FormData, setFormData] = useState({
    "Name": "hello world",
    "Phone": "9869166973",
    "Password": "",
    "Age": 23
  })
  return (
    <div className="App">
      <h1>Form from Json schema</h1>
      <DynamicForm setFormData={setFormData} FormData={FormData} />
    </div>
  );

}
export default App;
