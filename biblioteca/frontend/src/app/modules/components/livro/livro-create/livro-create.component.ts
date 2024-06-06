import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ILivros } from "src/app/modules/interfaces/ILivros.interfaces";
import { LivroService } from "src/app/modules/services/livro.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { IEditora } from "src/app/modules/interfaces/IEditora.interfaces";
import { IAutor } from "src/app/modules/interfaces/IAutor.interfaces";
import { EditoraService } from "src/app/modules/services/editora.service";
import { AutorService } from "src/app/modules/services/autor.service";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  livros: ILivros = {} as ILivros;
  editoras: IEditora[] = [];
  autores: IAutor[] = [];
  anosPublicacao: number[] = [];

  constructor(
    private livroService: LivroService,
    private editoraService: EditoraService,
    private autorService: AutorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.autorService.read().subscribe((autores) => {
      this.autores = autores;
    });

    this.editoraService.read().subscribe((editoras) => {
      this.editoras = editoras;
    });

    this.livroService.read().subscribe((livros) => {
      this.anosPublicacao = this.extractUniqueYears(livros);
    });
  }

  private extractUniqueYears(livros: ILivros[]): number[] {
    const years: number[] = [];
    livros.forEach((livro) => {
      if (!years.includes(livro.ano_publicado)) {
        years.push(livro.ano_publicado);
      }
    });
    return years.sort((a, b) => b - a);
  }

  createLivro(): void {
    if (
      !this.livros.titulo ||
      !this.livros.autor_id_fk ||
      !this.livros.editora_id_fk ||
      !this.livros.ano_publicado
    ) {
      this.livroService.showMessage(
        `Por favor, preencha todos os campos obrigatórios.`
      );
      return;
    }

    this.livroService
      .create(this.livros)
      .pipe(
        catchError((error) => {
          this.livroService.showMessage(
            `Erro ao criar livro: ${error.message}`
          );
          return throwError(
            () => new Error(`Erro ao criar livro: ${error.message}`)
          );
        })
      )
      .subscribe({
        next: () => {
          this.livroService.showMessage("Livro criado!");
          this.router.navigate(["/livros"]);
        },
      });
  }

  cancel(): void {
    this.router.navigate(["/livros"]);
  }
}
