import { CalculatorArgs } from "../interfaces/CalculatorInterface";

const op = (x: number, y: number) => Math.floor(x / y);

function hip_CaCo(cadyacente: number, copuesto: number) {
  // h = sqrt(a^2 + o^2)
  return Math.sqrt(cadyacente ** 2 + copuesto ** 2);
}

function ad_TCo(tetha: number, copuesto: number) {
  // adyacente = opuesto / tan(tetha)
  return copuesto / Math.tan(tetha);
}

function tetha_HipCa(hipotenusa: number, cadyacente: number) {
  // tetha = acos(a / h)
  return Math.acos(cadyacente / hipotenusa);
}

function divPiso(B: number, b: number, x: number) {
  const l_piso = B - 2 * b; // restar a la base del contenedor las bases de los triangulos restantes
  const p_piso = op(l_piso, x); // cantidad de paneles en el piso
  return { p_piso, l_piso };
}

export function getTriangle({ dpc, dsc, dpp, dsp }: CalculatorArgs) {
  //dpc: B, dsc: H, dpp: x, dsp: y
  const pisos = op(dsc, dsp); // cantidad de pisos # altura contenedor / altura panel
  const C = hip_CaCo(dsc, dpc / 2); // cateto contenedor # cateto adyacente: H, opuesto: B/2
  const tetha = tetha_HipCa(C, dpc / 2); // angulo basal # hipotenusa: hipotenusa mitad de contenedor, adyacente : base mitad de contenedor
  const b = ad_TCo(tetha, dsp); // base triangulo restante # angulo basal: tetha, cateto opuesto : altura panel
  let result = 0; // suma de todos los paneles
  for (let i = 0; i < pisos; i++) {
    // itera por la cantidad de paneles que caben en la altura del contenedor
    const { p_piso, l_piso } = divPiso(dpc, b, dpp);
    if (l_piso <= 0 || p_piso <= 0) {
      // si la base del piso o la cantidad de paneles es 0,
      break;
    }
    dpc = l_piso;
    dsc -= dsp;
    result += p_piso;
  }
  return result;
}
