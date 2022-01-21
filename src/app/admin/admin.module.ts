import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'signin',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [SigninComponent, AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
