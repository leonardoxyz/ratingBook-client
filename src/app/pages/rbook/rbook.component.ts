import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/books';
import { ApiService } from '../../core/services/api.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Library } from '../../shared/models/library';

@Component({
  selector: 'app-rbook',
  templateUrl: './rbook.component.html',
  styleUrls: ['./rbook.component.css'],
})
export class RbookComponent implements OnInit {
  itens: Book[] = [];
  libraries: any[] = [];
  novoItem: Book = new Book('', '', 0, '');
  toastVisible: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
    this.loadLibraries();
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

  loadLibraries() {
    this.apiService.getLibraries()
      .subscribe(data => {
        this.libraries = data;
      });
  }

  deleteLibrary(item: Library) {
    console.log('Library ID:', item.id);
  
    if (item.id) {
      const confirmDelete = confirm(`Tem certeza de que deseja excluir o livro "${item.address}"?`);
  
      if (confirmDelete) {
        this.apiService.deleteLibrary(item.id).subscribe(() => {
          this.loadLibraries();
        });
      }
    } else {
      console.error('ID da Livraria não definido.');
    }
  }  

  onSubmit() {
    if (this.isFormValid()) {
      this.apiService.postData(this.novoItem)
        .subscribe(
          () => {
            this.novoItem = new Book('', '', 0, '');
            this.onStarClick(0);
            this.loadData();
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
