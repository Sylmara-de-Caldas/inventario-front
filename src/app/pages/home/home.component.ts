import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { RouterLink, RouterModule } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produtos } from '../../models/Produtos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule, FormsModule, RouterLink, RouterModule,
    MatButtonModule, MatCardModule,MatInputModule,MatSelectModule,MatTableModule,MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {


  produtos: Produtos[] = [];
  produtosGerais: Produtos [] = [];

  colunas = ['Disponivel', 'Item', 'Fornecedor', 'Categoria', 'Ações', 'Deletar']
  
  constructor( private produtoService: ProdutoService, public  dialog: MatDialog){}
  
  //inicialização
  ngOnInit(): void {
    this.produtoService.GetProducts().subscribe(data => {
      const dados = data.dados;
      
       dados.map(item => {
         item.dataInclusao = new Date(item.dataInclusao!).toLocaleDateString('pt-BR'),
         item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-BR');

       });

      this.produtosGerais = dados;
      this.produtos = dados;

    })
  }

  //buscar item a cada input de pesquisa
  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtos = this.produtosGerais.filter(product => {
      return product.item.toLowerCase().includes(value);
    })
  }
  
  //abertura da dupla confirmação da deleção
  openDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data:{
        id: id
      }
    });
  }
}
