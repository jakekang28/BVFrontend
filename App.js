import Equiplist from "./Components/Equiplist";
import Header from "./Components/Header"
import Emptypage from "./Components/Emptypage"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import axios from 'axios'
import { QueryClientProvider, QueryClient } from "react-query";
import {useQuery} from 'react-query'
import Nav from "./Components/Nav";
import CardView from "./Components/CardView"
import AddEquip from "./Components/AddEquip"
import DummyCheckout from "./Components/DummyCheckout";
import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from './Components/Home'

const queryClient = new QueryClient()
function App() {
  // const {isLoading, data} =  useQuery('equipment-data',() =>{
  //   return axios.get(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/equiplist`)
  // })
  // if(isLoading){
  //   return <h2>Loading...</h2>
  // }
  return (
  <QueryClientProvider client = {queryClient}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path ='/' element={<Home/>}></Route> 
          <Route element = {<Header/>}>
            <Route exact path = "/equipment" element={<Equiplist />}/>
            <Route exact path = "/equipment/:sports" element={<Equiplist />}/>
            <Route exact path ="/detail/:id" element={<CardView/>}/>
            <Route exact path = "/add" element = {<AddEquip/>}/>
            <Route exact path = '/cart' element = {<DummyCheckout/>}/>
          </Route>
          <Route element={<Nav/>}>
            <Route exact path = "/equipment" element={<Equiplist />}/>
            <Route exact path = "/equipment/:sports" element={<Equiplist />}/>
          </Route>
          <Route exact path ="/detail/:id" element={<CardView/>}/>
          <Route exact path = "/add" element = {<AddEquip/>}/>
          <Route exact path ="/payment" element ={<DummyCheckout/>}/>
          <Route exact path ='/users/login' element = {<Login />}/>
          <Route exact path = '/users/register' element = {<Register/>}/>
          <Route exact path = '/cart' element = {<DummyCheckout/>}/>
        </Routes>
      </div>  
    </BrowserRouter>
  </QueryClientProvider>   
  );
}

export default App;
