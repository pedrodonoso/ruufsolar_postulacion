import { useState } from "react";
import InputComponent from "../components/InputComponent";

export default function App() {
  const [xDimPanel, setxDimPanel] = useState(0);
  const [yDimPanel, setyDimPanel] = useState(0);
  const [xDimContainer, setxDimContainer] = useState(0);
  const [yDimContainer, setyDimContainer] = useState(0);

  return (
    <div className="grid justify-items-center p-4 w-screen h-screen bg-zinc-800 text-slate-50 ">
      <div className="flex flex-col space-y-3 w-3/4">
        <article className="space-y-3  gap-3">
          <h1>Cuadrado</h1>
          <section>
            <div className="flex flex-row gap-2">
              <InputComponent value={xDimContainer} setValue={setxDimContainer} label="Dimensión X Container"/>
              <InputComponent value={yDimContainer} setValue={setyDimContainer} label="Dimensión Y Container"/>
            </div>
            <div className="flex flex-row gap-2">
              <InputComponent value={xDimPanel} setValue={setxDimPanel} label="Dimensión X Panel"/>
              <InputComponent value={yDimPanel} setValue={setyDimPanel} label="Dimensión Y Panel"/>
            </div>
          </section>
        </article>
        <div>Triangulo</div>
      </div>
    </div>
  );
}
