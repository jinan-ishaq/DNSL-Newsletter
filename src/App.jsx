import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Manage from "./components/Manage"
import OverView from "./components/OverView"
import SeekHelp from "./components/SeekHelp"

function App() {

  return (
    <>
      <Header/>
      <main className="w-full mx-auto">
        <OverView/>
        <Manage/>
        <SeekHelp/>
        <Cards/>
      </main>
      <Footer/>
    </>
  )
}

export default App
