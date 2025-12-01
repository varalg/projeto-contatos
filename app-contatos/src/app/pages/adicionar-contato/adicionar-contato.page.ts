import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule]
})
export class AdicionarContatoPage {
  nome = '';
  email = '';

  constructor(private firebaseService: FirebaseService) {}

  adicionar() {
    if (this.nome && this.email) {
      this.firebaseService.adicionarContato({ nome: this.nome, email: this.email });
      this.nome = '';
      this.email = '';
      alert('Contato adicionado!');
    } else {
      alert('Preencha todos os campos');
    }
  }
}
