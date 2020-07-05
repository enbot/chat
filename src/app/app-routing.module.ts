import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
