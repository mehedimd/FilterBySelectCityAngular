import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendors } from '../models/vendors.model';

const baseUrl = "https://localhost:7298/api/Vendor"

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<Vendors[]>{
    return this.http.get<Vendors[]>(baseUrl);
  }
  filterByCity(city : string) : Observable<Vendors[]>{
    return this.http.get<Vendors[]>(`${baseUrl}/${city}`)
  }
  vendorCityList() : Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/VendorCityList`);
  }
}
