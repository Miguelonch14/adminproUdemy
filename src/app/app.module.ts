import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Rutas
import { APP_ROUTER } from './app.router';

// modulos
import { PaguesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PaguesModule,
    FormsModule
  ],
  providers: [],
  exports: [
    IncrementadorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
