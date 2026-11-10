import "./App.css";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Consumerdashborad from "./Pages/ConsumerDashboard/Consumerdashborad";
import Providerdashborad from "./Pages/ProviderDashboard/Providerdashborad";
 
function App(){
    return(
     <BrowserRouter>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/consumerdashborad"element={<Consumerdashborad/>}/>
        <Route path="/providerdashboard"element={<Providerdashborad/>}/>
      </Routes>
     </BrowserRouter>
    );
}

export default App;
