import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Produtos } from '../../models/Produtos';


@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,RouterModule,MatButtonModule, MatCardModule,MatInputModule,
    MatSelectModule
  ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Produtos>()
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProduto: Produtos | null = null;
  
  produtoForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {

    console.log(this.dadosProduto)

    this.produtoForm = new FormGroup({
        id: new FormControl(this.dadosProduto? this.dadosProduto.id : 0),
        item: new FormControl(this.dadosProduto? this.dadosProduto.item : '', [Validators.required]),
        fornecedor: new FormControl(this.dadosProduto? this.dadosProduto.fornecedor : '', [Validators.required]),
        categoria: new FormControl(this.dadosProduto? this.dadosProduto.categoria : '', [Validators.required]),
        quantidade: new FormControl(this.dadosProduto? this.dadosProduto.quantidade : '', [Validators.required]),
        disponivel: new FormControl(this.dadosProduto? this.dadosProduto.disponivel : true),
        status: new FormControl(this.dadosProduto? this.dadosProduto.status : 'EmEstoque'),
        dataInclusao: new FormControl(new Date()),
        dataAlteracao: new FormControl(new Date())
    });
    
  }

  submit(){
    this.onSubmit.emit(this.produtoForm.value);
  }
}
