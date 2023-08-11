import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/pensamento/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
     path: '', //Caminho vazio no qual redireciona para a rota listarPensamento
      redirectTo: 'listarPensamento',
      pathMatch: 'full' //Define que o caminho deve ser exatamente igual ao especificado(toda URL)
  },
  {
     path: 'criarPensamento',
     component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
 },
 {
  path: 'pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
},
{
  path: 'pensamentos/editarPensamento/:id',
  component: EditarPensamentoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
