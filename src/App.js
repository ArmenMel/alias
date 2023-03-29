
import { TextField } from '@mui/material';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <TextField id="standard-basic" label="Team 1 Name" variant="standard" />
      <TextField id="standard-basic" label="Team 2 Name" variant="standard" />
    </div>
  );
}

export default App;
