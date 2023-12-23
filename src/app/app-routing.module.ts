import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { RbookComponent } from './pages/rbook/rbook.component';
import { RlibraryComponent } from './pages/rlibrary/rlibrary.component';

const routes: Routes = [
  { path: 'list-all', component: ListComponent },
  { path: 'register-book', component: RbookComponent },
  { path: 'register-library', component: RlibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
