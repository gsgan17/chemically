import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundInfo } from '../../interfaces/compound-info';
import { CompoundService } from '../../services/compound-service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
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
    this.compoundService.getCompoundById(this.id).subscribe((response)=>{
      this.compound = response as CompoundInfo;
    });  

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
    this.editedCompound.id = this.id;
    this.editedCompound.name = this.editForm.value.name ?? 'null';
    this.editedCompound.image = this.editForm.value.image ?? 'null';
    this.editedCompound.description = this.editForm.value.description ?? 'null';
    console.log(this.editedCompound);
    this.compoundService.updateCompound(this.editedCompound)?.subscribe((response)=>{
      console.log(response);
    });
    this.router.navigate(['details/', this.id]);
  }
}
