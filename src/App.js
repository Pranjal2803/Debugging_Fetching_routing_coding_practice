import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  </div>
)

export default App
