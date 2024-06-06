import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEditora } from '../interfaces/IEditora.interfaces';
import { Observable } from 'rxjs';
import { ILivros } from '../interfaces/ILivros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  baseUrl = "http://localhost:3000/editoras";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(editora: IEditora): Observable<IEditora> {
    return this.http.post<IEditora>(this.baseUrl, editora)
  }

  read(): Observable<IEditora[]> {
    return this.http.get<IEditora[]>(this.baseUrl);
  }

  readById(id: number): Observable<IEditora> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IEditora>(url);
  }

  update(editora: IEditora): Observable<IEditora> {
    const url = `${this.baseUrl}/${editora.editora_id}`;
    return this.http.patch<IEditora>(url, {
      "nome": editora.nome, 
      "localizacao": editora.localizacao
    });
  }

  delete(id: number): Observable<IEditora> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IEditora>(url);
  }
}
