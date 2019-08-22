import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClaseCuatroPeticionesApi';

  public apiURL = 'https://jsonplaceholder.typicode.com/users';

}
