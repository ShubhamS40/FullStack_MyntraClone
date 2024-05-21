import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomeItem from './route/HomeItem.jsx'
import Bag from './route/Bag.jsx'
import {Provider} from 'react-redux'
import myntraStore from './store/store.js'
import { useSelector } from 'react-redux'




const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomeItem/>

      },
      {
        path:'/bag',
        element:<Bag/>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add to store  */}
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
    
    
  </React.StrictMode>,
)
