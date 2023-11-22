import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator/calculator';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AllKhata } from './pages/AdminpannelCompoenents/AllKhata/AllKhata';
import { NewKhata } from './pages/AdminpannelCompoenents/newentryform/NewKhata';
import { Register } from './pages/Auth/Register';
import { Login } from './pages/Auth/Login';
import SingleKhata from './pages/AdminpannelCompoenents/SingleKhata/SingleKhata';
import { PrivateRoute } from './PrivateRoutes/PrivateRoute';

function App() {
  return (
    <Layout>
<Routes>
  <Route path='/' element={<Navigate to="/calculator"/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>} />  
 <Route path='/calculator' element={<Calculator/>}/>
  <Route path="/:id" element={<PrivateRoute/>}>
    <Route path='/:id/dashboard' element={<Dashboard/>}/>
    <Route path='/:id/allkhata' element={<AllKhata/>}/>
    <Route path='/:id/newkhata' element={<NewKhata/>}/>
    <Route path='/:id/singlekhata' element={<SingleKhata/>}/>
  </Route>

</Routes>
    </Layout>

  );
}

export default App;
