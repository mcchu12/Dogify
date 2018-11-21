import { Component, OnInit } from '@angular/core';

import { SidenavToggleService } from 'src/app/services/sidenav-toggle.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private sidenavToggleService: SidenavToggleService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavToggleService.toggleSidenav();
  }

}
