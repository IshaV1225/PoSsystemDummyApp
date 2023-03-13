import './App.css';
import Welcome from './pages/Welcome';
import AttendancePage from './pages/AttendancePage';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';


function App() {
  return ( 
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/mainPage" element={<MainPage/>}/>
          <Route exact path="/Attendance_page" element={<AttendancePage/>}/>
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
