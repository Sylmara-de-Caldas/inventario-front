import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,   
    imports: [RouterOutlet, RouterLink,
       FormsModule,  ReactiveFormsModule,
       CommonModule, HomeComponent, CadastroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InventarioFrontEnd';
}
