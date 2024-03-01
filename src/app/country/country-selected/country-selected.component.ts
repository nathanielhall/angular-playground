import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-country-selected',
 templateUrl: './country-selected.component.html'
})

export class CountrySelectedComponent {
 @Input() selected!: string;
}
