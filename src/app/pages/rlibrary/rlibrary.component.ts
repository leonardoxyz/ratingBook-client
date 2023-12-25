import { Component } from '@angular/core';
import { Library } from '../../shared/models/library';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-rlibrary',
  templateUrl: './rlibrary.component.html',
  styleUrl: './rlibrary.component.css'
})
export class RlibraryComponent {
  newAddress: Library = new Library('', '');
  toastVisible: boolean = false;

  constructor(private apiService: ApiService) { }

  onSubmit() {
    if (this.isFormValid()) {
      this.apiService.postLibrary(this.newAddress)
        .subscribe(
          () => {
            this.newAddress = new Library('', '');
            this.toastVisible = true;
          },
          error => {
            console.error('Erro ao adicionar livro:', error);
          }
        );
    }
  }

  isFormValid(): boolean {
    return this.newAddress.address.trim() !== '';
  }
}
