import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEditora } from 'src/app/modules/interfaces/IEditora.interfaces';
import { EditoraService } from 'src/app/modules/services/editora.service';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-editora-create',
  templateUrl: './editora-create.component.html',
  styleUrls: ['./editora-create.component.css']
})
export class EditoraCreateComponent {

  editora: IEditora = {} as IEditora

  constructor(
    private editoraService: EditoraService, 
    private router: Router
  ){}

  createEditora(): void {
    this.editoraService
      .create(this.editora)
      .pipe(
        catchError((error) => {
          this.editoraService.showMessage(`O formulário não pode ser enviado vazio.`);
          return throwError(() => new Error(`Erro ao criar Editora ${error}`));
        })
      )
      .subscribe({
        next: () => {
          this.editoraService.showMessage("Editora criado!");
          this.router.navigate(["/editoras"]);
        },
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/editoras']);
  }
}
