import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-light dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
