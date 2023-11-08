import './App.css'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Registration from './components/Registration'
import ScheduleChat from './components/ScheduleChat'
import Chat from './components/Chat'
import Testimonial from './components/Testimonial'
import PostPage from './components/PostPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Testimonial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/schedulechat' element={<ScheduleChat />} />
          <Route path='/:id' element={<PostPage />} />
        </Routes>
      </Router>

      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <CreatePost /> */}
      {/* <ScheduleChat /> */}
      {/* <Testimonial /> */}
    </>
  )
}

export default App
