import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Atributo que se chama pensamento
  // O @Input() é um decorator que indica que o atributo pensamento pode receber
  //valores externos
  @Input()  pensamento: Pensamento = {
    conteudo: 'Eu amo Angular',
    autoria: 'Ariane',
    modelo: 'modelo3',
    id: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';


}

}
