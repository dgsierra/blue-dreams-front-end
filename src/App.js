import { useState } from 'react';
import './App.css';
import User from './components/User';
// import PrivateText from './components/PrivateText';

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};
export default App;
