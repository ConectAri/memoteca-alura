import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from 'backend/componentes/pensamentos/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  pensamento : Pensamento = {

    conteudo: '',
    autoria: '',
    modelo:'modelo1'
    }

  constructor(private service: PensamentoService,
    private router: Router

    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
                                        //aerofankition
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])

  }

}
