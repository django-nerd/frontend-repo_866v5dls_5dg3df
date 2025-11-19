import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Buyback from './components/Buyback'
import Careers from './components/Careers'
import Stores from './components/Stores'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Buyback />
        <Careers />
        <Stores />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
