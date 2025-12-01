import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule]
})
export class LoginPage {
  email = '';
  senha = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.senha)
      .then(() => {
        alert('Login feito com sucesso!');
        this.router.navigate(['/listar-contatos']);
      })
      .catch(err => alert('Erro: ' + err.message));
  }
}
