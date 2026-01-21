import { inject, Injectable } from '@angular/core';
import { CompoundInfo } from '../interfaces/compound-info';
import { Compound } from '../components/compound/compound';
import { HttpClient } from '@angular/common/http';
import { PaginatedCompounds } from '../interfaces/paginated-compounds';

@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  http : HttpClient = inject(HttpClient);
  url = 'http://localhost:3000/api/compounds';

  paginatedCompounds !: PaginatedCompounds;
  compounds : CompoundInfo[] = [
    {
      "id" : 1,
      "name" : "name",
      "image" : "image",
      "description" : "description"
    },
    {
      "id" : 2,
      "name" : "name",
      "image" : "image",
      "description" : "description"
    },
    {
      "id" : 3,
      "name" : "name",
      "image" : "image",
      "description" : "description"
    },
  ];

  nullCompound : CompoundInfo = {
    id : 0,
    name : "null",
    image : "null",
    description : "null"
  }

  getAllCompounds(page : number){
    return this.http.get(`${this.url}?page=${page}&limit=10`);
  }

  getCompoundById(id : number){
    return this.http.get(`${this.url}/${id}`);
  }

  createCompound(payload : CompoundInfo){
    console.log("compound created");
    return this.http.post(`${this.url}`,{
      name : payload.name,
      image : payload.image,
      description : payload.description
    });
  }

  updateCompound(payload : CompoundInfo){
    if(payload.id === 0){
      console.log("compound corrupt");
      return;
    }
    return this.http.put(`${this.url}/${payload.id}`, {
      name : payload.name, 
      image : payload.image,
      description : payload.description
    });
  }

  deleteCompound(id : number){
    console.log("compound deleted");
    return this.http.delete(`${this.url}/${id}`);
  }
}
