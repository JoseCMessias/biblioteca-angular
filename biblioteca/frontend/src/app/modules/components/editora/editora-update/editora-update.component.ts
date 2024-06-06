import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEditora } from 'src/app/modules/interfaces/IEditora.interfaces';
import { EditoraService } from 'src/app/modules/services/editora.service';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-editora-update',
  templateUrl: './editora-update.component.html',
  styleUrls: ['./editora-update.component.css']
})
export class EditoraUpdateComponent implements OnInit{


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
  
  updateEditora(): void {
    this.editoraService
      .update(this.editora)
      .pipe(
        catchError((error) => {
          this.editoraService.showMessage(`O formulário não pode ser enviado vazio.`);
          return throwError(() => new Error(`Erro ao tentar alterar Editora ${error}`));
        })
      )
      .subscribe({
        next: () => {
          this.editoraService.showMessage("Editora alterada com sucesso!");
          this.router.navigate(["/editoras"]);
        },
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/editoras']);
  }
}
