import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ILivros } from "src/app/modules/interfaces/ILivros.interfaces";
import { LivroService } from "src/app/modules/services/livro.service";

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  livro: ILivros = {
    titulo: "",
    autor_id_fk: 1,
    editora_id_fk: 1,
    ano_publicado: 2024,
  };

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.livroService.readById(Number.parseInt(id!)).subscribe((livro) => {
      this.livro = livro;
    });
  }

  deleteLivro(): void {
    this.livroService
      .delete(this.livro.livro_id!)
      .pipe(
        catchError(() => {
          this.livroService.showMessage(`Erro ao tentar deletar o livro.`);
          return throwError(() => new Error(`Erro ao tentar deletar o livro.`));
        })
      )
      .subscribe({
        next: () => {
          this.livroService.showMessage(
            `Livro ${this.livro.titulo} deletado com sucesso! `
          );
          this.router.navigate(["/livros"]);
        },
        error: (err) => {
          console.error("Erro:", err);
        },
      });
  }

  cancel(): void {
    this.router.navigate(["/livros"]);
  }
}
