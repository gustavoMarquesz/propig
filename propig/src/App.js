
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TimeLine from './pages/TimeLine';
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom"
import AdminTimeLine from './pages/AdminTimeLine';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/acompanhar-pedido' element={<TimeLine/>}/>
          <Route path='/admin-pedido' element={<AdminTimeLine/>}/>
          <Route path='/admin-pedido' element={<Footer/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
