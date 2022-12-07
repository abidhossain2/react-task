import { Route, Routes } from 'react-router-dom';
import './App.css';
import AttendanceList from './Pages/attendancePage/AttendanceList';
import LoginPage from './Pages/login_page/LoginPage';
import Form from './Pages/signup_pages/Form';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/attendance' element={<AttendanceList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
