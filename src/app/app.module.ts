import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListComponent } from './pages/list/list.component';
import { RbookComponent } from './pages/rbook/rbook.component';
import { RlibraryComponent } from './pages/rlibrary/rlibrary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    RbookComponent,
    RlibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastModule,
  ],
  providers: [
    provideClientHydration(),
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
