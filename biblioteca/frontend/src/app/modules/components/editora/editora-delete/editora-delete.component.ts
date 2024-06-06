import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEditora } from 'src/app/modules/interfaces/IEditora.interfaces';
import { EditoraService } from 'src/app/modules/services/editora.service';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-editora-delete',
  templateUrl: './editora-delete.component.html',
  styleUrls: ['./editora-delete.component.css']
})
export class EditoraDeleteComponent implements OnInit{

  editora: IEditora = {} as IEditora

  constructor(
    private editoraService: EditoraService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.editoraService.readById(Number.parseInt(id!)).subscribe(editora => {
      this.editora = editora
    });
  }

  deleteEditora(): void {
    this.editoraService.delete(this.editora.editora_id!).pipe(
      catchError((error) => {
        this.editoraService.showMessage(`A Editora possui uma chave ativa associada a um livro!`);
        return throwError(() => new Error(`Erro ao deletar autor`));
      })
    ).subscribe({
      next: () => {
        this.editoraService.showMessage(`Editora ${this.editora.nome} deletada com sucesso! `);
        this.router.navigate(['/editoras']);
      },
      error: (err) => {
        console.error('Erro:', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/editoras']);
  }
}
