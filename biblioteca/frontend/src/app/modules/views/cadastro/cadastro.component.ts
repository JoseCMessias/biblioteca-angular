import { UsuarioService } from "./../../services/usuario.service";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { IUsuario } from "../../interfaces/IUsuario.interfaces";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent {
  hide = true;
  errorMessage = "";

  usuario: IUsuario = {} as IUsuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  updateErrorMessage(emailControl: any) {
    if (emailControl.hasError("required")) {
      this.errorMessage = "Você deve inserir o seu email";
    } else if (emailControl.hasError("email")) {
      this.errorMessage = "Não é um e-mail válido";
    } else {
      this.errorMessage = "";
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.usuarioService
        .create(this.usuario)
        .pipe(
          catchError(() => {
            this.usuarioService.showMessage(
              `Ocorreu um erro, tente mais tarde`
            );
            return throwError(() => new Error(`Erro ao criar usuario`));
          })
        )
        .subscribe({
          next: () => {
            this.usuarioService.showMessage("Usuário criado com sucesso!");
            console.log(this.usuario);
            this.router.navigate(["/login"]);
          },
        });
    } else {
      form.controls["nome"].markAsTouched();
      form.controls["email"].markAsTouched();
      form.controls["senha"].markAsTouched();
    }
  }

  login() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
