import { Route, Routes } from 'react-router-dom'
import CreatePage from '../pages/CreatePage'
import ViewPage from '../pages/ViewPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePage />}/>
      <Route path="/code/:id" element={<ViewPage />}/>
    </Routes>
  )
}