import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrphanService {

  constructor(private http: HttpClient) { }

  addOrphan(data:any){
    return this.http.post('https://api.sponsorship.com/api/orphans', data)
  }

  getOrphanData(){
    return this.http.get("assets/usersData.json")
  }
}
