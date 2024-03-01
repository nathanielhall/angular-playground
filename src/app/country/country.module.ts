import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CountryComponent } from '../country/country.component';
import { CountryFlagComponent } from '../country/country-flag/country-flag.component';
import { CountrySelectedComponent } from '../country/country-selected/country-selected.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		CountryComponent,
		CountrySelectedComponent,
		CountryFlagComponent
	],
	exports: [
		CountryComponent,
		CountrySelectedComponent,
		CountryFlagComponent
	]
})
export class CountryModule {}