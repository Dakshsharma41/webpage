import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DesignationComponent } from './component/designation/designation.component';
import { MasterComponent } from './component/master/master.component';
import { RolesComponent } from './component/roles/roles.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DesignationComponent,MasterComponent,RolesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webpage';
}
