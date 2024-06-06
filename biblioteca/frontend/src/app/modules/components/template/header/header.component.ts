import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/modules/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { } 

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(["/login"]);
    window.location.reload();
  }

  isUsuarioLogado(): boolean { 
    return this.usuarioService.isUsuarioLogado(); 
  }
}
