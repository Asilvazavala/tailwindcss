import { PiedraPapelTijera } from "./components/PiedraPapelTijera/PiedraPapelTijera"
import { Prueba } from "./components/Prueba"
import { ResultsCard } from "./components/ResultsCard"

function App() {
  return (
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
      {/* <ResultsCard /> */}
      <div className="snap-center">
        <Prueba />
      </div>
      <div className="snap-center">
        <Prueba />
      </div>
      <div className="snap-center">
        <Prueba />
      </div>
      {/* <PiedraPapelTijera /> */}
    </main>
  )
}

export default App
