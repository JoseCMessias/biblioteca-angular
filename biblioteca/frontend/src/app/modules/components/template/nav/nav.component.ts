import { Component } from "@angular/core";
import { UsuarioService } from "src/app/modules/services/usuario.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent {
  constructor(private usuarioService: UsuarioService) { } 

  isUsuarioLogado(): boolean {
    return this.usuarioService.isUsuarioLogado();
  }
}
