import { Component } from '@angular/core';
import { IListraTodosRegistros } from '../../interfaces/IListra-Todos-Registros.interfaces';
import { ListarTodosRegistrosService } from '../../services/listar-todos-registros.service';

@Component({
  selector: 'app-buscar-todos-reditros',
  templateUrl: './buscar-todos-reditros.component.html',
  styleUrls: ['./buscar-todos-reditros.component.css']
})
export class BuscarTodosReditrosComponent {
  relatorio: IListraTodosRegistros[] = [];
  
  displayedColumns: string[] = ['livros', 'autores', 'editoras'];

  constructor(private listarTodosRegistrosService: ListarTodosRegistrosService) {}

  ngOnInit(): void {
    this.listarTodosRegistrosService.read().subscribe(relatorio => {
      this.relatorio = relatorio;
    });
  }
}
