import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }
  public getVilles():any
{
return this.http.get(this.host+"/villes");
}

  getCinemas(v: any):any {
    return this.http.get(v._links.cinemas.href);
  }

  getSalles(c: any):any {
    return this.http.get(c._links.salles.href);
  }

  getProjections(salle:any):any {
   let url=salle._links.projections.href.replace("{?projection}","");;
  return this.http.get(url+"?projection=p1");
 }

  getTicketsPlaces(p: any):any {
    let url=p._links.tickets.href.replace("{?projection}","");;
    return this.http.get(url+"?projection=ticketProj");
  }


  payerTickets(dataForm: any) : any{
    return this.http.post(this.host+"/payerTickets",dataForm)
  }
}
