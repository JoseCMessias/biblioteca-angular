import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { IUsuario } from "../interfaces/IUsuario.interfaces";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseUrl = "http://localhost:3000/usuarios";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  login(email: string, senha: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, { email, senha });
  }

  create(usuario: IUsuario): Observable<IUsuario> {
    const url = `${this.baseUrl}`;
    return this.http.post<IUsuario>(url, usuario);
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }

  isUsuarioLogado(): boolean {
    return localStorage.getItem('usuario') !== null;
  }
}
