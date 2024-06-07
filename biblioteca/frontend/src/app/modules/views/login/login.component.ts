import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from "../../services/usuario.service";
import { IUsuario } from "../../interfaces/IUsuario.interfaces";
import { catchError } from 'rxjs/operators';
import { VerificarLoginService } from "../../services/verificar-login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  hide = true;
  errorMessage = "";
  usuario: IUsuario = {} as IUsuario;
  email = new FormControl(null, [Validators.required]);
  password = new FormControl(null, [Validators.required, Validators.minLength(8)]);

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router,
    private loginVerified: VerificarLoginService
  ) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.usuarioService
        .login(this.usuario.email, this.usuario.senha)
        .pipe(
          catchError((error) => {
            console.error(error);
            this.errorMessage = "Tente novamente mais tarde.";
            throw error;
          })
        )
        .subscribe({
          next: () => {
            this.loginVerified.toggleVerifiedUser();
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          },
          error: (error) => {
            console.error(error);
            this.errorMessage = "Credenciais inválidas. " + error;
            this.usuarioService.showMessage("Credenciais inválidas.")
          },
        });
    }
  }

  updateErrorMessage(): void {
    if (this.email.hasError("required")) {
      this.errorMessage = "Você deve inserir o seu email";
    } else {
      this.errorMessage = "";
    }
  }

  clickEvent(event: Event): void {
    this.hide = !this.hide;
  }

  cadastro(): void {
    this.router.navigate(["/cadastro"]);
  }
}
