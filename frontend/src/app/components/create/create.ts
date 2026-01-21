// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create',
//   imports: [],
//   templateUrl: './create.html',
//   styleUrl: './create.css',
// })
// export class Create {

// }

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundInfo } from '../../interfaces/compound-info';
import { CompoundService } from '../../services/compound-service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute);
  id : number = Number(this.route.snapshot.paramMap.get('id'));
  compoundService : CompoundService = inject(CompoundService);

  nullCompound : CompoundInfo = {
    id : 0,
    name : "null",
    image : "null",
    description : "null"
  };

  compound : CompoundInfo = this.nullCompound;
  editForm !: FormGroup;

  ngOnInit(): void {
    // this.compound = this.compoundService.getCompoundById(this.id);  

    this.editForm = new FormGroup({
      name : new FormControl(this.compound.name),
      image : new FormControl(this.compound.image),
      description : new FormControl(this.compound.description)
    });

  }

  constructor(private router : Router){
    
  }

  editedCompound : CompoundInfo = this.nullCompound;

  editFinally(){
    this.editedCompound.id = 0;
    this.editedCompound.name = this.editForm.value.name ?? 'null';
    this.editedCompound.image = this.editForm.value.image ?? 'null';
    this.editedCompound.description = this.editForm.value.description ?? 'null';
    this.compoundService.createCompound(this.editedCompound).subscribe((response)=>{
      console.log(response);
    });
    this.router.navigate(['page/1']);
  }
}
