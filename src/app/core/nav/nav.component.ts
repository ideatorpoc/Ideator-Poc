import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../shared/authentication.service';
import { Router } from '@angular/router';

class MenuItem{
    constructor(public caption: string, public link: any[]){

    }
}

@Component({
    selector:'idea-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    menuItems: MenuItem[];

  constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit(){
        this.menuItems = [
      { caption: 'Ideas', link: ['/ideas'] },
      { caption: 'Login', link: ['/login'] }    
    ];
    }

  logout() {
      //this.loading = true;
      this.authenticationService.logout()
          .subscribe(result => {
             this.router.navigate(['/login']);
          });
  }

} 