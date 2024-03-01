import { Component, Input } from '@angular/core';
@Component({
 selector: 'app-country-flag',
 templateUrl: './country-flag.component.html'
})

export class CountryFlagComponent  {
 @Input() selected!: string;
}