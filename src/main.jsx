import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reducer,{initialState} from './Reducer';
import {StateProvider} from './StateProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>

      <App/>

    </StateProvider>
   
  </React.StrictMode>,
)
