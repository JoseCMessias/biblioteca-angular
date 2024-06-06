import { Component, OnInit } from '@angular/core';
import { IEditora } from 'src/app/modules/interfaces/IEditora.interfaces';
import { EditoraService } from 'src/app/modules/services/editora.service';

@Component({
  selector: 'app-editora-read',
  templateUrl: './editora-read.component.html',
  styleUrls: ['./editora-read.component.css']
})
export class EditoraReadComponent implements OnInit {

  editoras: IEditora[] = [];
  displayedColumns: (number | string | string)[] = ['id', 'name', 'localizacao', 'action'];

  constructor(private editoraService: EditoraService){}

  ngOnInit(): void {
    this.editoraService.read().subscribe(editoras => {
      this.editoras = editoras;
    });
  }
}
