import NavSection from './components/NavSection'
import BodySection from './components/BodySection'
import ExtraSection from './components/ExtraSection'
import './App.css' 

const App: React.FC = () => {
  return (
    <div className='app'>
      <NavSection  />
      <BodySection />
      <ExtraSection  />
    </div>
  )
}

export default App
