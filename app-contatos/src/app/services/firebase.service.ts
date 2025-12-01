import { Injectable } from '@angular/core';
import { Database, ref, push, onValue, update, remove } from '@angular/fire/database';

export interface Contato {
  nome: string;
  email: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {}

  // Adicionar contato
  adicionarContato(contato: Contato) {
    const contatosRef = ref(this.db, 'contatos');
    return push(contatosRef, contato);
  }

  // Listar contatos
  listarContatos(callback: (dados: Contato[]) => void) {
    const contatosRef = ref(this.db, 'contatos');
    onValue(contatosRef, snapshot => {
      const dados = snapshot.val() || {};
      const contatos: Contato[] = Object.keys(dados).map(key => ({
        id: key,
        nome: dados[key].nome,
        email: dados[key].email
      }));
      console.log('Contatos do Firebase:', contatos);
      callback(contatos);
    });
  }

  // Atualizar contato
  atualizarContato(contato: Contato) {
    if (!contato.id) return; // garante que o id existe
    const contatoRef = ref(this.db, `contatos/${contato.id}`);
    return update(contatoRef, {
      nome: contato.nome,
      email: contato.email
    });
  }

  // Excluir contato
  excluirContato(id: string) {
    const contatoRef = ref(this.db, `contatos/${id}`);
    return remove(contatoRef);
  }
}
