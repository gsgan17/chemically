import { Component, inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router : Router = inject(Router);
  constructor(){

  }

  navigateToCreate(){
    this.router.navigate(['create']);
  }
}
