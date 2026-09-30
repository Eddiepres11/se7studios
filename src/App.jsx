import NoiseOverlay from './components/NoiseOverlay.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import RefreshSection from './components/RefreshSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <Nav />
      <main className="w-full">
        <Hero />
        <RefreshSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}
