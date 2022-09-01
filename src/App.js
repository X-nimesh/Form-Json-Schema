import './App.css';
import InputText from './Components/InputText';
import formSchema from './formSchema.json';
import InputPassword from './Components/InputPassword';
import InputCheckbox from './Components/InputCheckbox';
import InputSelect from './Components/InputSelect';
function App() {


  return (
    <div className="App">
      <h1>Form from Json schema</h1>
      <form>
        {formSchema.map((item, index) => {
          switch (item.type) {
            case 'text':
              return <InputText key={index} content={item.content} />
            case 'Checkbox':
              return <InputCheckbox key={index} content={item.content} />
            case 'select':
              return <InputSelect key={index} content={item.content} />
            case 'password':
              return <InputPassword key={index} content={item.content} />
            default:
              return null;
          }

        }
        )}

      </form>
    </div>
  );

}
export default App;
