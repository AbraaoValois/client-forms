import { v4 as uuid } from 'uuid';

export class Cliente {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  uf?: string;
  municipio?: string;


  constructor(
    nome: string = '',
    cpf: string = '',
    dataNascimento: string = '',
    email: string = ''
  ) {
    this.id = uuid();
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.email = email;
  }

  static newCliente(): Cliente {
    return new Cliente();
  }
}
