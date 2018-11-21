import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {

  // Observable string source
  private sidenavToggleSource = new Subject<string>();

  // Observable string stream
  sidenavToggle$ = this.sidenavToggleSource.asObservable();

  toggleSidenav() {
    this.sidenavToggleSource.next();
  }
}
