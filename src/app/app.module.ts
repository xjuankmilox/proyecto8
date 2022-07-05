import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
//servicio
import { ScriptService } from "./script.service";
//fin servicio

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth())
  ],
  providers: [ScriptService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ViewsModule { }
