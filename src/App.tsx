import './App.css'
import { HeaderPage } from './components/Header/Header'
import { HomePage } from './components/Home/HomePage'
import { SectionProblem } from './components/SectionOne/Problema'
import { SectionCausas } from './components/SectionTwo/Causas'

function App() {
  return (
    <>
      <HeaderPage />
      <HomePage />
      <SectionProblem />
      <SectionCausas />
    </>
  )
}

export default App
