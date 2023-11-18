import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registration from './components/Registration';
import CreatePost from './components/CreatePost';
import ScheduleChat from './components/ScheduleChat';
import Chat from './components/Chat';
import PostPage from './components/PostPage';
import QuestionnaireForm from './components/QuestionnaireForm';
import BlogPage from './components/BlogPage';
// import ResourcePage from './components/ResourcePage';
import Blog from './components/Blog';
import LiveChat from './components/LiveChat'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/schedulechat" element={<ScheduleChat />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/resources" element={<ResourcePage />} /> */}
          <Route path="/questionnaireForm" element={<QuestionnaireForm />} />
          <Route path="/livechat" element={<LiveChat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
