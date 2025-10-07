import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();
    const index = storage.findIndex(c => c.id === cliente.id);
    if (index > -1) {
      storage[index] = cliente;
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    }
  }

  deletar(cliente: Cliente) {
    const storage = this.obterStorage();
    const novaLista = storage.filter(c => c.id !== cliente.id);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novaLista));
  }

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();
    if (!nomeBusca) {
      return clientes;
    }
    return clientes.filter(cliente =>
      cliente.nome?.toLowerCase().includes(nomeBusca.toLowerCase())
    );
  }

  buscarClientePorId(id: string): Cliente | undefined {
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id);
  }

  private obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (repositorioClientes) {
      return JSON.parse(repositorioClientes);
    }
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify([]));
    return [];
  }
}
