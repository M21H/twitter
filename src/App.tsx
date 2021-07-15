import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Main, Login } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/login' component={Login} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
