
import {  Routes,Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/Login';
import SideBar from './component/SideBar';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import { useState } from 'react';
import SideBarLayout from './pages/SideBarLayout';


function App() {

  const [istoggle,setIsToggle] = useState(false)
  return (
<>
{istoggle ?<SideBar/>:''}
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">


  
   <Routes>
  <Route path="/" element={
    <LoginPage istoggle = {istoggle}/>
  }/>
  <Route element={<SideBarLayout/>}>
  <Route path="/products" element={<ProductPage/>} />
  <Route  path="/profile" element={<ProfilePage/>}/>
  </Route>





   </Routes>
   

</div>
</>

  );
}

export default App;
