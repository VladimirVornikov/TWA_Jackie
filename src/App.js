import './App.css';
import {Routes, Route} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AddPeoplePage from './pages/AddPeoplePage'
import FindAMatchPage from "./pages/FindAMatchPage"
import InvitePage from "./pages/InvitePage"
import MatchResultPage from "./pages/MatchResultPage"
import MyInfoPage from "./pages/MyInfoPage"
import PaymentPage from "./pages/PaymentPage"
import ProfilePage from "./pages/ProfilePage"
import ReportPage from "./pages/ReportPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/addPeople' element={<AddPeoplePage/>}/>
        <Route path='/find' element={<FindAMatchPage/>}/>
        <Route path='/invite' element={<InvitePage/>}/>
        <Route path='/result' element={<MatchResultPage/>}/>
        <Route path='/myinfo' element={<MyInfoPage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/report' element={<ReportPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
