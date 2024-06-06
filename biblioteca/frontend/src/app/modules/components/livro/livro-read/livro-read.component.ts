import { Component, OnInit } from '@angular/core';
import { IAutor } from 'src/app/modules/interfaces/IAutor.interfaces';
import { IEditora } from 'src/app/modules/interfaces/IEditora.interfaces';
import { ILivros } from 'src/app/modules/interfaces/ILivros.interfaces';
import { AutorService } from 'src/app/modules/services/autor.service';
import { EditoraService } from 'src/app/modules/services/editora.service';
import { LivroService } from 'src/app/modules/services/livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livros: ILivros[] = [];
  editoras: IEditora[] = [];
  autores: IAutor[] = [];
  combinedData: any[] = [];
  
  displayedColumns: string[] = ['id', 'titulo', 'autor_nome', 'editora_nome', 'ano_publicado', 'action'];

  constructor(
    private livrosService: LivroService,
    private editoraService: EditoraService,
    private autorService: AutorService,
  ){}

  ngOnInit(): void {
    this.livrosService.read().subscribe(livros => {
      this.livros = livros;
      this.combinarDados();
    });

    this.autorService.read().subscribe(autores => {
      this.autores = autores;
      this.combinarDados();
    });

    this.editoraService.read().subscribe(editoras => {
      this.editoras = editoras;
      this.combinarDados();
    });
  }

  combinarDados() {
    if (this.livros.length && this.autores.length && this.editoras.length) {
      this.combinedData = this.livros.map(livro => {
        const autor = this.autores.find(a => a.autor_id === livro.autor_id_fk);
        const editora = this.editoras.find(e => e.editora_id === livro.editora_id_fk);
        return {
          id: livro.livro_id,
          titulo: livro.titulo,
          autor_nome: autor ? autor.nome : 'Desconhecido',
          editora_nome: editora ? editora.nome : 'Desconhecido',
          ano_publicado: livro.ano_publicado       
        };
      });
    }
  }
}
