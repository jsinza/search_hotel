import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() find: EventEmitter<any> = new EventEmitter();

  hotel = {
    name: '',
    stars: [
      { name: '0', selected: true, id: 0 },
      { name: '5', selected: false, id: 5 },
      { name: '4', selected: false, id: 4 },
      { name: '3', selected: false, id: 3 },
      { name: '2', selected: false, id: 2 },
      { name: '1', selected: false, id: 1 }
    ]
  }
  form: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.hotel.name,
      stars: this.buildstars()
    });
  }
  findByHotels(value, posCheckbox) {
    const search = Object.assign({}, value, {
      stars: value.stars.map((s, i) => {
        if (i == posCheckbox) {
          return {
            id: this.hotel.stars[i].id,
            selected: !s
          }
        }
        return {
          id: this.hotel.stars[i].id,
          selected: s
        }
      }), name: value.name
    })
    if (posCheckbox == 0) {
      this.selectionAll();
    }else{
      this.notSelectionAll()
    }
    this.find.emit(search);
  }

  get stars(): FormArray {
    return this.form.get('stars') as FormArray;
  };

  buildstars() {
    const arr = this.hotel.stars.map(s => {
      return this.fb.control(s.selected);
    })
    return this.fb.array(arr);
  }

  selectionAll() {
    var stars =this.form.get('stars');
    for (let index = 1; index < stars.length; index++) {
      stars.controls[index]=this.fb.control(false);
      
    }
  }
  notSelectionAll() {
    var stars =this.form.get('stars');
    stars.controls[0]=this.fb.control(false);
  
  }

}
