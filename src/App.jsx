import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-light dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

export default App
