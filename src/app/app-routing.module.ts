import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
      component: MainComponent,
      children: [
        { path: 'contact', component: ContactComponent },
        { path: 'about-me', component: AboutMeComponent },
        /* { path: 'login', loadChildren: './modules/login/login.module#LoginModule' }, */
        /* { path: 'logout', loadChildren: './modules/login/login.module#LoginModule', data: { exit: 'true' } }, */
        /* { path: '', redirectTo: '/main', pathMatch: 'full' }, */
        /* { path: '**', redirectTo: '/main' }, */
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
