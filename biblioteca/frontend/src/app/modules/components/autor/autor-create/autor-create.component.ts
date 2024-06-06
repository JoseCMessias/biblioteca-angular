import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/modules/services/autor.service";
import { Router } from "@angular/router";
import { IAutor } from "src/app/modules/interfaces/IAutor.interfaces";

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Component({
  selector: "app-autor-create",
  templateUrl: "./autor-create.component.html",
  styleUrls: ["./autor-create.component.css"],
})
export class AutorCreateComponent {
  autor: IAutor = {} as IAutor;

  constructor(private autorService: AutorService, private router: Router) {}

  createAutor(): void {
    this.autorService
      .create(this.autor)
      .pipe(
        catchError((error) => {
          this.autorService.showMessage(`O formulário não pode ser enviado vazio.`);
          return throwError(() => new Error(`Erro ao criar autor ${error}`));
        })
      )
      .subscribe({
        next: () => {
          this.autorService.showMessage("Autor criado!");
          this.router.navigate(["/autores"]);
        },
      }
    );
  }

  cancel(): void {
    this.router.navigate(["/autores"]);
  }
}
