import { CalculatorArgs } from "../interfaces/CalculatorInterface";

const op = (x: number, y: number) => Math.floor(x / y);

export function getSquare({ dpc, dsc, dpp, dsp }: CalculatorArgs) {
  // dpc : dimensión principal del contenedor
  // dsc : dimensión secundaria del contenedor
  // dpp : dimensión principal del panel
  // dsp : dimensión secundaria del panel

  const result = [];
  // Orientación 1
  const o1 = getDimP({ dpc, dsc, dpp, dsp });
  const o1R = getDimR({ dpc, dsc, dpp, dsp });
  result.push(o1 + o1R);
  // Orientación 2
  const o2 = getDimP({ dpc, dsc, dsp, dpp });
  const o2R = getDimR({ dpc, dsc, dsp, dpp });
  result.push(o2 + o2R);
  return Math.max(...result);
}

function getDimR({ dpc, dsc, dpp, dsp }: CalculatorArgs) {
  // dpc : dimensión principal del contenedor
  // dsc : dimensión secundaria del contenedor
  // dpp : dimensión principal del panel
  // dsp : dimensión secundaria del panel

  const resto = dpc % dpp;
  if (resto <= 0) {
    return 0;
  } else {
    const cant_dimp = op(resto, dsp); // cantidad de paneles en dimension secundaria que caben en la dimensión principal
    const cant_dims = op(dsc, dpp); // cantidad de paneles en dimensión principal que caben en la dimensión secundaria
    const dim_result = cant_dimp * cant_dims; // cantidad de paneles B x A en contenedor A x B
    if (dim_result <= 0) {
      return 0;
    } else {
      return dim_result;
    }
  }
}

function getDimP({ dpc, dsc, dpp, dsp }: CalculatorArgs) {
  // dpc : dimensión principal del contenedor
  // dsc : dimensión secundaria del contenedor
  // dpp : dimensión principal del panel
  // dsp : dimensión secundaria del panel

  const cant_dimp = op(dpc, dpp); // cantidad de paneles en dimension principal que caben en la dimensión principal
  const cant_dims = op(dsc, dsp); // cantidad de paneles en dimensión secundaria que caben en la dimensión secundaria
  const dim_result = cant_dimp * cant_dims; // cantidad de paneles A x B en contenedor A x B
  if (dim_result <= 0) {
    return 0;
  } else {
    return dim_result;
  }
}
