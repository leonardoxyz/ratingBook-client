import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/books';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  itens: Book[] = [];

  ngOnInit() {
    this.loadData();
  }

  constructor(private apiService: ApiService) { }

  loadData() {
    this.apiService.getData()
      .subscribe(data => {
        this.itens = data;
      });
  }

  deleteItem(item: Book) {
    console.log('ID do livro:', item.id);
  
    if (item.id) {
      const confirmDelete = confirm(`Tem certeza de que deseja excluir o livro "${item.title}"?`);
  
      if (confirmDelete) {
        this.apiService.deleteData(item.id).subscribe(() => {
          this.loadData();
        });
      }
    } else {
      console.error('ID do livro não definido.');
    }
  }  
}
