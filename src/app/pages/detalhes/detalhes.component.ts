import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from '../../componentes/produto-form/produto-form.component';
import { Produtos } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule,ProdutoFormComponent,
    MatButtonModule,MatCardModule,MatInputModule,MatSelectModule
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  produto? : Produtos;
  id!: number;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.GetProductById(this.id).subscribe(data =>{
      const dados = data.dados;

      dados.dataInclusao = new Date(dados.dataInclusao!).toLocaleDateString('pr-BR');
      dados.dataAlteracao = new Date(dados.dataAlteracao!).toLocaleDateString('pr-BR');

      this.produto = data.dados;
    })
  }
 
  disableProduct(event: Event){
    event.preventDefault();

    this.produtoService.DisableProduct(this.id).subscribe(data =>{
      this.router.navigate(['/home']);
    })
  }


}
