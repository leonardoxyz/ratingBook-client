import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { conn } from '../../env/env';
import { Book } from '../../shared/models/books';
import { Observable, catchError } from 'rxjs';
import { Library } from '../../shared/models/library';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = conn.apiUrl;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Book[]>(`${this.apiUrl}/Books`);
  }

  getLibraries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Library`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro ao obter bibliotecas:', error);
          throw error;
        })
      );
  }
  

  postData(item: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/Books`, item);
  }

  postLibrary(item: Library): Observable<Library> {
    return this.http.post<Library>(`${this.apiUrl}/Library`, item);
  }

  deleteLibrary(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Library/${id}`)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Books/${id}`);
  }
}
