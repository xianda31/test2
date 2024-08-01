import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test2';
}
