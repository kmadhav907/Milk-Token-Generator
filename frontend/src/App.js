import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import HomePage from './Screens/HomePage';
import RegisterScreen from './Screens/RegisterScreen';
function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={HomePage} exact></Route>
          <Route path='/register' element={RegisterScreen}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
