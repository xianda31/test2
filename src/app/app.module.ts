import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth/auth/auth.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AmplifyAuthenticatorModule,

  ],
})
export class AppModule { }
