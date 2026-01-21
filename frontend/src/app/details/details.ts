import { Component, inject, ɵAngularComponentDebugMetadata } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CompoundInfo } from '../interfaces/compound-info';
import { CompoundService } from '../services/compound-service';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  nullCompound : CompoundInfo = {
    id : 0,
    name : "null",
    image : "null",
    description : "null"
  };

  compound : CompoundInfo = this.nullCompound;
  route : ActivatedRoute = inject(ActivatedRoute);
  id : number = Number(this.route.snapshot.paramMap.get('id'));
  compoundService : CompoundService = inject(CompoundService);
  router : Router = inject(Router);

  constructor(){
    this.compoundService.getCompoundById(this.id).subscribe((response)=>{
      this.compound = response as CompoundInfo;
    });
  }

  navigateToEdit(){
    this.router.navigate(['edit/', this.id]).then(()=>{
      window.location.reload();
    });;
  }
}
