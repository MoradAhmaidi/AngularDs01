import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../Models/projet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ProjectService {
  url:string = "https://mani-api.ma/api/Projets";
  constructor(private http:HttpClient ) { }

  getAll():Observable<Projet[]>{
    return this.http.get<Projet[]>(this.url);
  }
  getById(id:number):Observable<Projet>{
    return this.http.get<Projet>(this.url+ "/" +id)
  }
  add(projet:Projet){
    return this.http.post(this.url,projet);
  }
  remove(id:number){
    return this.http.delete(this.url + "/" + id);
  }
  update(projet:Projet){
    return this.http.put(this.url+ "/" +projet.Id,projet);
  }
}
