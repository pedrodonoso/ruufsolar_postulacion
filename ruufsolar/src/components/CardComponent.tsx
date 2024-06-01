import { useState } from "react";
import InputComponent from "./InputComponent";
import { CalculatorArgs } from "../interfaces/CalculatorInterface";

export default function CardComponent({
  calculator,
  title,
}: {
  calculator: ({ dpc, dsc, dpp, dsp }: CalculatorArgs) => number;
  title: string;
}) {
  const [xDimPanel, setxDimPanel] = useState(0);
  const [yDimPanel, setyDimPanel] = useState(0);
  const [xDimContainer, setxDimContainer] = useState(0);
  const [yDimContainer, setyDimContainer] = useState(0);
  const [result, setResult] = useState(0);

  const onClick = () => {
    const result = calculator({
      dpc: xDimContainer,
      dsc: yDimContainer,
      dpp: xDimPanel,
      dsp: yDimPanel,
    });
    setResult(result);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex flex-row">
          <InputComponent
            value={xDimContainer}
            setValue={setxDimContainer}
            label="Dimensión X Container"
          />
          <InputComponent
            value={yDimContainer}
            setValue={setyDimContainer}
            label="Dimensión Y Container"
          />
        </div>
        <div className="flex flex-row">
          <InputComponent
            value={xDimPanel}
            setValue={setxDimPanel}
            label="Dimensión X Panel"
          />
          <InputComponent
            value={yDimPanel}
            setValue={setyDimPanel}
            label="Dimensión Y Panel"
          />
        </div>
        <div className="flex flex-row">
          <button
            type="submit"
            onClick={onClick}
            className=" w-1/2 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Calcular
          </button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Resultado:
        </div>
        <div className="flex flex-row">
          <div className="text-sm font-lg text-gray-500 dark:text-gray-300  mx-auto">
            {result} Paneles
          </div>
        </div>
      </form>
    </div>
  );
}
