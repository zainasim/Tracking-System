import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.jsx';
import InterviewQuestion from './components/InterviewQuestion';
import AdminQuestion from './components/adminquestion';
import Media from './components/Media'
import ListUser from './components/ListUser'
import LandPage from './components/LandPage';
import EndPage from './components/EndPage';
import Dashboard from './components/Dashboard';
import Applicant from './components/Applicant';
import Setting from './components/Setting';
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LandPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/end' element={<EndPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/applicant' element={<Applicant/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/question' element={<InterviewQuestion/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/admin' element={<AdminQuestion/>}/>
        <Route path='/list' element={<ListUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
