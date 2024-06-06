import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAutor } from 'src/app/modules/interfaces/IAutor.interfaces';
import { AutorService } from 'src/app/modules/services/autor.service';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-autor-delete',
  templateUrl: './autor-delete.component.html',
  styleUrls: ['./autor-delete.component.css']
})
export class AutorDeleteComponent implements OnInit{

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

  deleteAutor(): void {
    this.autorService.delete(this.autor.autor_id!).pipe(
      catchError((error) => {
        this.autorService.showMessage(`O autor possui uma chave ativa associada a um livro!`);
        return throwError(() => new Error(`Erro ao deletar autor`));
      })
    ).subscribe({
      next: () => {
        this.autorService.showMessage(`Autor(a) ${this.autor.nome} deletado com sucesso! `);
        this.router.navigate(['/autores']);
      },
      error: (err) => {
        console.error('Erro:', err);
      }
    });
  }
  

  cancel(): void {
    this.router.navigate(['/autores']);
  }
}