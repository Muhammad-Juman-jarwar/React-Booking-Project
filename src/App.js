import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

function App() {
  return (
    <BrowserRouter basename='/React-Booking-Project'>
      <Routes>
        <Route path="/React-Booking-Project" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
