import { Component, inject } from '@angular/core';
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
export class Gallery {
  route : ActivatedRoute = inject(ActivatedRoute);
  router : Router = inject(Router);
  compounds : CompoundInfo[] = [];
  compoundService : CompoundService = inject(CompoundService);
  totalPages !: number;

  page : number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(){
    this.compoundService.getAllCompounds(this.page).subscribe((paginatedData)=>{
      console.log(paginatedData);
      this.compounds = paginatedData as CompoundInfo[];
    });
  }

  nextPage(){
    this.page++;
    this.router.navigate(['page/',this.page]);
    if(this.compounds.length===0){
      this.router.navigate(['page/1']);
    }
  }

  prevPage(){
    this.page--;
    this.page = Math.max(this.page, 1);
    this.router.navigate(['page/',this.page]);
  }

  navigateToCreate(){
    this.router.navigate(['create']);
  }
}
