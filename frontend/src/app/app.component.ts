import { Component, ViewChild } from '@angular/core';
import { SidenavToggleService } from './services/sidenav-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav;

  title = 'dogify';

  constructor(private sidenavToggleService: SidenavToggleService) {
    sidenavToggleService.sidenavToggle$.subscribe(
      () => {
        this.sidenav.toggle();
      }
    );
  }
}
