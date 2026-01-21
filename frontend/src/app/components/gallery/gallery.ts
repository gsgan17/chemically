import { Component, inject, OnInit } from '@angular/core';
import { Compound } from '../compound/compound';
import { CompoundInfo } from '../../interfaces/compound-info';
import { CommonModule } from '@angular/common';
import { CompoundService } from '../../services/compound-service';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [Compound, CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute);
  router : Router = inject(Router);
  compounds : CompoundInfo[] = [];
  compoundService : CompoundService = inject(CompoundService);
  totalPages !: number;

  page : number = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.compoundService.getAllCompounds(this.page).subscribe((paginatedData)=>{
      console.log(paginatedData);
      this.compounds = paginatedData as CompoundInfo[];
      if(this.compounds.length===0){
        this.router.navigate(['page/1']).then(()=>{
          window.location.reload();
        });
      }
    });
  }

  constructor(){
    
  }

  nextPage(){
    this.page++;
    this.router.navigate(['page/',this.page]).then(()=>{
      window.location.reload();
    });
    if(this.compounds.length===0){
      this.router.navigate(['page/1']).then(()=>{
        window.location.reload();
      });
    }
    // this.ngOnInit;
  }

  prevPage(){
    this.page--;
    this.page = Math.max(this.page, 1);
    this.router.navigate(['page/',this.page]).then(()=>{
      window.location.reload();
    });
    // this.ngOnInit();
  }

  navigateToCreate(){
    this.router.navigate(['create']).then(()=>{
      window.location.reload();
    });
  }
}
