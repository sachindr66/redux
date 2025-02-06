// import React from 'react'
// import CakeContainer from './Components/CakeContainer'
// import { Provider } from 'react-redux'
// import store from './redux/Store'
// import IceCreamContainer from './Components/IceCreamContainer'
// import ItemContainer from './Components/ItemContainer'
// import HooksCakecontainer from './Components/HooksCakecontainer'
// import UserCotainer from './Components/UserCotainer'
// import PrcaticeContainer from './Components/PrcaticeContainer'

// const App = () => {
//   return (
//     <Provider store={store}>
//     <div>
//       <PrcaticeContainer/>
//       <UserCotainer/>
//       <ItemContainer cake/>
//       <ItemContainer/>
//       <HooksCakecontainer/>
//       <CakeContainer/>
//       <IceCreamContainer/>
//     </div>
//     </Provider>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components1/Home'
import Addusers from './Components1/Addusers'
import Updateuser from './Components1/Updateuser'
import Userlisting from './Components1/Userlisting'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import Store from './redux1/Store'


const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <div className='navbar navbar-expand-lg navbar-light bg-blue'>
      <Link to={'/'}>Home</Link>
      <Link to={'/user'}>User</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<Addusers></Addusers>}></Route>
        <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
        <Route path='/User' element={<Userlisting></Userlisting>}></Route>
      </Routes>
      </BrowserRouter>
      
      </Provider>
    </div>
  )
}

export default App
