import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'ventchat',
		loadChildren: () => import('./ventchat/ventchat.module').then((m) => m.VentchatModule),
		data: { routeRegistered: false },
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
