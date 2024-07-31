import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test2';
}
