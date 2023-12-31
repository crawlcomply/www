import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/slash/slash.module').then(m => m.SlashModule)
  },
  {
    path: 'doc',
    loadChildren: () => import('src/app/doc/doc.module').then(m => m.DocModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('src/app/demo/demo.module').then(m => m.DemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
