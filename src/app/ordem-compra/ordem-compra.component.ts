import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  @ViewChild('formulario') public formAttr: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  confirmarCompra(): void {

    let pedido: Pedido = new Pedido(
      this.formAttr.value.endereco,
      this.formAttr.value.numero,
      this.formAttr.value.complemento,
      this.formAttr.value.formaPagamento
    );

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
    
  }
}
