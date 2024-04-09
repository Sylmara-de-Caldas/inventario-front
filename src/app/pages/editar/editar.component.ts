import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProdutoFormComponent } from '../../componentes/produto-form/produto-form.component';
import { Produtos } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink,RouterModule,ProdutoFormComponent,CommonModule,MatButtonModule,
    MatCardModule,MatInputModule,MatSelectModule
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent implements OnInit{

  btnAcao: string = "Editar";
  btnTitulo: string  = "Editando Produto"
  produto!: Produtos;

  constructor (private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.GetProductById(id).subscribe(data=>{
      this.produto = data.dados;
    })
  }

  updateProduct(produto: Produtos){
    this.produtoService.UpdateProduto(produto).subscribe(data =>{
      this.router.navigate(['/home'])
    })
  }
    

}
