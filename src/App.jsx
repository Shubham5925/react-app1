import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Checkout  from './Checkout';

import {HashRouter as Router,Routes,Route} from 'react-router-dom';

function App() 
{
 

  return (
    <div>
      <Router>

        <Header/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        
        <Footer/>

      </Router>
    </div>
  )
}

export default App
