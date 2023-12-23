import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/books';
import { ApiService } from '../../core/services/api.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rbook',
  templateUrl: './rbook.component.html',
  styleUrls: ['./rbook.component.css']
})
export class RbookComponent implements OnInit {
  itens: Book[] = [];
  novoItem: Book = new Book('', '', 0, '');
  toastVisible: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData()
      .subscribe(data => {
        this.itens = data;
      });
  }

  postData(item: Book): Observable<Book> {
    return this.apiService.postData(item).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro na solicitação POST:', error);
        throw error;
      })
    );
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.apiService.postData(this.novoItem)
        .subscribe(
          () => {
            this.novoItem = new Book('', '', 0, '',);
            this.onStarClick(0);
            this.loadData();
            this.toastVisible = true;
          },
          error => {
            console.error('Erro ao adicionar livro:', error);
          }
        );
    }
  }


  isFormValid(): boolean {
    return this.novoItem.title.trim() !== '' && this.novoItem.author.trim() !== '' && this.novoItem.libraryId.trim() !== '';
  }

  onStarClick(rating: number) {
    this.novoItem.rating = rating;
  }
}