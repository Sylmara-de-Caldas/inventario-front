import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProdutoFormComponent } from '../../componentes/produto-form/produto-form.component';
import { Produtos } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ProdutoFormComponent, RouterLink, RouterModule,MatButtonModule,
    MatCardModule,MatInputModule,MatSelectModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private produtoService: ProdutoService, private router: Router){}

  btnAcao: string = "Cadastrar";
  btnTitulo: string = "Cadastrando Produto"
  
  createProduct(produto : Produtos){
    this.produtoService.CreateProduct(produto).subscribe(data =>{
        this.router.navigate(['/home'])
    })
    


  }

}
