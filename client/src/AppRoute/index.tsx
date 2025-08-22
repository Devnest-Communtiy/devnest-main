import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Web3LoginPage from '../Login';
import { useAuth } from '../AuthWrap';
import Web3404Page from '../Error';
import Home from '../pages/Home';
import App from '../App';

export default function AppRouter() {
    const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={< Home/>} />
         <Route path='/blogs' element={<App/>} />
        {!isAuthenticated && (
<Route path='/admin' element={<Web3LoginPage />} />
        )}
        <Route path='*' element={<Web3404Page/>} />
        {/* Add more routes as needed */}
     </Routes>
    </BrowserRouter>
    


  )
}
