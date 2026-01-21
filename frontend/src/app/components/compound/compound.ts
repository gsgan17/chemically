import { Component, Input, inject } from '@angular/core';
import { CompoundInfo } from '../../interfaces/compound-info';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CompoundService } from '../../services/compound-service';

@Component({
  selector: 'app-compound',
  imports: [],
  templateUrl: './compound.html',
  styleUrl: './compound.css',
})
export class Compound {
  @Input() compound !: CompoundInfo;

  compoundService : CompoundService = inject(CompoundService);

  constructor(private router : Router){

  }

  openDetails(){
    this.router.navigate(['details/',this.compound.id]);
  }

  deleteCompound(id : number){
    this.compoundService.deleteCompound(id).subscribe((response)=>{
      console.log(response);
    });
    console.log("compound deleted");
    alert("Compound Deleted");
  }
}
