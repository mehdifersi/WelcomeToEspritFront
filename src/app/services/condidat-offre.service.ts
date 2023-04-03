import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class CondidatOffreService {

  constructor(private http:HttpClient) { }
  addapplicationandassigntooffer( condidatOffre:any,  id_offre:any){
    this.http.post(`${baseUrl}/candidatoffre/assign/`+id_offre,condidatOffre);
  }
}
