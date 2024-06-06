import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAutor } from 'src/app/modules/interfaces/IAutor.interfaces';
import { AutorService } from 'src/app/modules/services/autor.service';

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Component({
  selector: 'app-autor-update',
  templateUrl: './autor-update.component.html',
  styleUrls: ['./autor-update.component.css']
})
export class AutorUpdateComponent implements OnInit{

  autor: IAutor = {
    nome: '',
  };

  constructor(
    private autorService: AutorService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.autorService.readById(Number.parseInt(id!)).subscribe(autor => {
      this.autor = autor
    });
  }

  updateAutor(): void {
    this.autorService
      .update(this.autor)
      .pipe(
        catchError((error) => {
          this.autorService.showMessage(`O formulário não pode ser enviado vazio.`);
          return throwError(() => new Error(`Erro ao tentar alterar autor ${error}`));
        })
      )
      .subscribe({
        next: () => {
          this.autorService.showMessage("Autor alterado com sucesso!");
          this.router.navigate(["/autores"]);
        },
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/autores']);
  }
}
