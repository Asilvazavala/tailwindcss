import { Async } from "./components/Async"
import { PiedraPapelTijera } from "./components/PiedraPapelTijera/PiedraPapelTijera"
import { Prueba } from "./components/Prueba"
import { ResultsCard } from "./components/ResultsCard"

function App() {
  return (
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
      {/* <div className="snap-center">
        <Prueba />
      </div> */}
      {/* <ResultsCard /> */}
      {/* <PiedraPapelTijera /> */}
      <Async />
    </main>
  )
}

export default App
