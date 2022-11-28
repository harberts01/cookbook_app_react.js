import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Recipe } from './components/Recipe Components/Recipe';
import { RecipeList } from './components/Recipe Components/RecipeList';
import { CreateCookbook } from './components/CreateCookbook';
// import { OpenCookbook } from './components/OpenCookbook';
import { ShowCookbooks } from './components/ShowCookbooks';
import { UpdateCookbook } from './components/UpdateCookbook';
import { OpenCookbook } from './components/OpenCookbook';




function App() {
  return (
    <Router>
    <div className='main'>
        <div>
          <Routes>
            <Route path = '/' element = {<HomePage />}/>
          </Routes>
        </div>
        <div style={{marginTop: 20}}>
          <Routes>
            <Route path = '/Recipe' element = {<Recipe />}/>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path = '/CreateCookbook' element = {<CreateCookbook />}/>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path = '/ShowCookbooks' element = {<ShowCookbooks />}/>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path = '/RecipeList' element = {<RecipeList />}/>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path = '/UpdateCookbook' element = {<UpdateCookbook />}/>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path = '/OpenCookbook' element = {<OpenCookbook />}/>
          </Routes>
        </div>
       
    </div>
    
    
  </Router>
  );
}

export default App;
