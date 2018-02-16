import { Component, OnInit,Input } from '@angular/core';
import { Hotel } from '../../class/hotel';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() hotel:Hotel
  urlImage =environment.CONS_SERVE_IMAGE;
  start='star';
  constructor() { }

  ngOnInit() {
  }

}
