import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../class/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  hotels: Hotel[];
  p: number = 1;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getall().subscribe(data => {
      this.hotels = data;
    }, error => { console.log(error); })
  }

  findyByNameOrStars(search: any): void {

    const name = search.name;
    const stars = this.getStarsFind(search.stars);

    this.hotelService.findByNameAndStars(name, stars).subscribe(data => {
      this.hotels = data;
    }, error => { console.log(error); })
  }

  getStarsFind(stars) {
    var valStars = [];
    stars.forEach(star => {
      if (star.id == 0 && star.selected) {
        valStars = [1, 2, 3, 4, 5]
        return;
      } else
        if (star.selected) {
          valStars.push(star.id);
        }
    });
    return valStars;
  }

}
