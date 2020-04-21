import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidenavToggleService } from './services/sidenav-toggle.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'dogify';

  constructor(private sidenavToggleService: SidenavToggleService) {
    sidenavToggleService.sidenavToggle$.subscribe(
      () => {
        this.sidenav.toggle();
      }
    );
  }
}
