import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILivros } from '../interfaces/ILivros.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = "http://localhost:3000/livros";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(livro: ILivros): Observable<ILivros> {
    return this.http.post<ILivros>(this.baseUrl, livro)
  }

  read(): Observable<ILivros[]> {
    return this.http.get<ILivros[]>(this.baseUrl);
  }

  readById(id: number): Observable<ILivros> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ILivros>(url);
  }

  update(livro: ILivros): Observable<ILivros> {
    const url = `${this.baseUrl}/${livro.livro_id}`;
    return this.http.patch<ILivros>(url, {
      'titulo': livro.titulo, 
      'autor_id_fk': livro.autor_id_fk, 
      'editora_id_fk': livro.editora_id_fk, 
      'ano_publicado': livro.ano_publicado
    });
  }

  delete(id: number): Observable<ILivros> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ILivros>(url);
  }
}
