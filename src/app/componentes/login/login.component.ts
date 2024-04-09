import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProdutoService } from '../../services/produto.service';

import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,RouterModule,MatButtonModule, MatCardModule,MatInputModule,
    MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private produtoService: ProdutoService, private router: Router){}

  ngOnInit(): void {

  this.loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
    });
  }

  onLogin(){
    const login = this.loginForm.value.login;
    const senha = this.loginForm.value.senha;
    this.produtoService.Onlogin(login,senha).subscribe((data)=>{
      localStorage.setItem("token", data.token);
      this.router.navigateByUrl('/home')
    })
  }

}
