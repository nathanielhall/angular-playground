import {Component, ContentChild} from '@angular/core';
import {CountryService} from "./country.service";
import {CountrySelectedComponent} from './country-selected/country-selected.component'
import {CountryFlagComponent} from './country-flag/country-flag.component'

@Component({
 selector: 'app-country',
 templateUrl: './country.component.html',
 styleUrls: ['./country.component.css']
})
export class CountryComponent  {
  countries$ = this.countryService.getCountries();
  
//   selected$: Subject<string> = new Subject<string>();
  @ContentChild(CountrySelectedComponent) countrySelected!: CountrySelectedComponent;
  @ContentChild(CountryFlagComponent) countryFlag!: CountryFlagComponent;

  constructor(private countryService: CountryService) {  }

//   changed(value: any) {
// 	this.selected$.next(value);
//   }

  selectedCountry(selected:string):void {
	this.countrySelected.selected = selected;
	this.countryFlag.selected = selected;
   }

}