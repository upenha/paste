import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreatePage from '../pages/CreatePage'
import ViewPage from '../pages/ViewPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <CreatePage />
        </Route>
        <Route path="/code/:id"> 
          <ViewPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}