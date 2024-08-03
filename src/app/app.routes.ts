import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { AppComponent } from './app.component';
import { AdminsComponent } from './admin/admins/admins.component';
import { MembersComponent } from './ffb/members/members.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'admins', component: AdminsComponent },
    { path: 'members', component: MembersComponent },
    // { path: 'home', component: AppComponent },
    // { path: '**', redirectTo: '/' }
];
