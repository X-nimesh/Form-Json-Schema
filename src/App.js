import './App.css';
import InputText from './Components/InputText';
import formSchema from './formSchema.json';
import InputPassword from './Components/InputPassword';
import InputCheckbox from './Components/InputCheckbox';
import InputSelect from './Components/InputSelect';
import { useState } from 'react';
function App() {

  const [Name, setName] = useState('Nimesh')
  const [Password, setPassword] = useState('password12')
  const [Checkbox, setCheckbox] = useState({ "Football": true, "Basketball": false, "Cricket": true })
  const [Select, setSelect] = useState(
    "Patan"
  )
  let onSubmit = (e) => {
    console.log("Name:", Name, "Password:", Password, "Checked Items:", Checkbox, "Selected item:", Select)
    e.preventDefault();
    console.log('submit');
  }
  return (
    <div className="App">
      <h1>Form from Json schema</h1>
      <form>
        {formSchema.map((item, index) => {
          switch (item.type) {
            case 'text':
              return <InputText key={index} content={item.content} defaultValue={Name} setName={setName} />
            case 'Checkbox':
              return <InputCheckbox key={index} content={item.content} setCheckbox={setCheckbox} defaultValue={Checkbox} />
            case 'select':
              return <InputSelect key={index} content={item.content} defaultValue={Select} setSelect={setSelect} />
            case 'password':
              return <InputPassword key={index} content={item.content} defaultValue={Password} setPassword={setPassword} />
            default:
              return null;
          }

        }
        )}
        <button type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
      </form>
    </div>
  );

}
export default App;
