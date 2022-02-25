import './App.css';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateAccount from './screens/Pages/CreateAccount/CreateAccount'
import SignIn from './screens/Pages/SignIn/SignIn'
function App() {
  

  return ( 
    <Router>
    <div className="App" style={{lineHeight:"81.5px"}}>
      <span ><img src="https://www.spot-saver.com/static/auth_logo.svg" alt="Spot Saver"/>
</span>
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="create-account" element={<CreateAccount/>} />
          </Routes>
    </div>
    </Router>
  );
}

export default App;
