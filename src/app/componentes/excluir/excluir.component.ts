import { Component, Inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Produtos } from '../../models/Produtos';


@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit{

  inputData: any;
  produto!: Produtos;

  constructor(
    private produtoService: ProdutoService, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private ref: MatDialogRef<ExcluirComponent>){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.produtoService.GetProductById(this.inputData.id).subscribe(data =>{
      this.produto = data.dados;
    });
  }

  deleteProduct(){
    this.produtoService.DeleteProduct(this.inputData.id).subscribe(data =>{
        this.ref.close();
        window.location.reload();
    });
  }

  cancel(){
    this.ref.close();
  }
}
