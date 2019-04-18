import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialogComponent } from '../app/core/commonComponents/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../app/core/commonComponents/confirmation-dialog/confirmation-dialog.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/commonComponents/header/header.component';
import { FooterComponent } from './core/commonComponents/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
    entryComponents: [ConfirmationDialogComponent],

  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
