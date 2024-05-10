import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../services/vendors.service';
import { Vendors } from '../../models/vendors.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css'
})
export class VendorsComponent implements OnInit{

  allVendors? : Vendors[];
  allCitys? : any;
  cityName : any;
  countCity: any;

  constructor(private service : VendorsService){}
  ngOnInit(): void {
    this.retriveAll();
    this.retriveAllCity();
  }


  retriveAll(): void{
    this.service.getAll().subscribe({
      next : (data) => this.allVendors = data,
      error: e => console.error(e)
    })
  }
  // retrive all distinct city
  retriveAllCity(): void{
    this.service.vendorCityList().subscribe({
      next : data => {
        this.allCitys = data;
        this.countCity = data.length
      },
      error : e => console.error(e)
    })
  }

  // get city name

  getCityName() : void{
    console.log(this.cityName);
    if(this.cityName != 'default'){
      this.service.filterByCity(this.cityName).subscribe({
        next : data => {
          this.allVendors = data;
          this.countCity = data.length;
        },
        error: e => console.error(e)
      })
    }
    else{
      this.ngOnInit();
    }
  }
}
