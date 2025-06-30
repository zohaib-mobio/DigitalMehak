// import logo from './logo.svg';
import './App.css';
import About from './Compents/About';
import Elementor from './Compents/Elementor';
import Navbar from'./Compents/Navabr'
import { Routes, Route } from 'react-router-dom'; 
import Ourservices from './Compents/Ourservices';
import Review from './Compents/Review';
import Footer from './Compents/Footer';
import EFoam from './Compents/Foam'
import Services from './Compents/Services';
// import Portfolio from './Pages/Portfolio';  
import Header from './Compents/Header';
import Contact from './Compents/Contact'; 
import Blog from './Compents/Blog';
import Video from './Banner-Video/Video'
import BlogView from './Compents/BlogView';


function App(props) { 
  return (
    <>
    <Navbar />
<Routes>
        <Route path='/'element={
          <> 
          <Video/>
          <Header/> 
          <Elementor/>
          <About/>
          <Ourservices/>
          <EFoam/> 
          </> 
        }>
        </Route>        
      </Routes>
      <Routes>
        <Route path='/services'element={<Services/>}/>
        {/* <Route path='/Portfolio'element={<Portfolio/>}/> */}
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/Blog'element={<Blog/>}/>
        <Route path='/View'element={<BlogView/>}/>
      </Routes>
      <Footer/> 
    </> 
  );   
}

export default App; 

