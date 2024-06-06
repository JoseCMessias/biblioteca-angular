import { IAutor } from 'src/app/modules/interfaces/IAutor.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  baseUrl = "http://localhost:3000/autores";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(autor: IAutor): Observable<IAutor> {
    return this.http.post<IAutor>(this.baseUrl, autor);
  }

  read(): Observable<IAutor[]> {
    return this.http.get<IAutor[]>(this.baseUrl);
  }

  readById(id: number): Observable<IAutor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IAutor>(url);
  }

  update(autor: IAutor): Observable<IAutor> {
    const url = `${this.baseUrl}/${autor.autor_id}`;
    return this.http.patch<IAutor>(url, {"nome": autor.nome});
  }

  delete(id: number): Observable<IAutor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IAutor>(url);
  }
}
