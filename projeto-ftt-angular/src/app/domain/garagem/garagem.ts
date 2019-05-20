import { Endereco } from "src/app/shared/model/endereco";
import { Carro } from "../carro/carro";

export class Garagem {
  id: number;
  nome: string;
  endereco: Endereco;
  carros: Carro[];
}
