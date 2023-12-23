import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conn } from '../../env/env';
import { Book } from '../../shared/models/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = conn.apiUrl;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any[]>(`${this.apiUrl}/Books`);
  }  

  postData(item: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/Books`, item);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Books/${id}`);
  }
}
