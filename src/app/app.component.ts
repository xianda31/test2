import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AmplifyAuthenticatorModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test2';

  // constructor(public authenticator: AuthenticatorService) {
  //   Amplify.configure(outputs);
  // }

}
