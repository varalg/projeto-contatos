import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FirebaseService, Contato } from '../../services/firebase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class ListarContatosPage implements OnInit {
  contatos: Contato[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.listarContatos(dados => {
      this.contatos = dados;
    });
  }
}
