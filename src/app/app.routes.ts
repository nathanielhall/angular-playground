import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'users', component: UserComponent},
	{path: 'home', component: HomeComponent}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

