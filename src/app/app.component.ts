// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { Book } from './shared/models/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itens: Book[] = [];
  novoItem: Book = new Book('', '', 0, '');

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

  onSubmit() {
    this.apiService.postData(this.novoItem)
      .subscribe(() => {
        this.novoItem = new Book('', '', 0, '');
        this.onStarClick(0);
        this.loadData();
      });
  }

  onStarClick(rating: number) {
    this.novoItem.rating = rating;
  }
}
