import CardComponent from "../components/CardComponent";
import { getSquare } from "../lib/square";
import { getTriangle } from "../lib/triangle";

export default function App() {
  return (
    <div className="felx justifiy-center justify-items-center w-screen h-full md:h-screen bg-zinc-800 text-slate-50">
      <nav className="flex flex-row bg-zinc-900 w-full h-16 justify-center p-5">
        <h1 className="text-lg font-semibold">
          Calculadoras de paneles solares
        </h1>
      </nav>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center p-6 w-fit mx-auto">
        <CardComponent
          calculator={getSquare}
          labels={{
            dpc: "Dimensión Principal del Contenedor",
            dsc: "Dimensión Secundaria del Contenedor",
            dpp: "Dimensión Principal del Panel",
            dsp: "Dimensión Secundaria del Panel",
          }}
          title="Contenedor Cuadrado"
        />
        <CardComponent
          calculator={getTriangle}
          labels={{
            dpc: "Base del triangulo contenedor",
            dsc: "Altura del triangulo contenedor",
            dpp: "Dimensión Principal del Panel",
            dsp: "Dimensión Secundaria del Panel",
          }}
          title="Contenedor Triangular"
        />
      </main>
    </div>
  );
}
