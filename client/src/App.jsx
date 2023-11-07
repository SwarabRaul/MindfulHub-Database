import './App.css'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Registration from './components/Registration'
import ScheduleChat from './components/ScheduleChat'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Registration />
      <CreatePost />
      <ScheduleChat />
      <Testimonial />
    </>
  )
}

export default App
