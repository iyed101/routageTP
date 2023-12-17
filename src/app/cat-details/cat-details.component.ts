import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent {
  cat: Cat;
}
