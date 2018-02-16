import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Components/home/home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './Components/header/header.component';
import {HotelService} from './services/hotel.service';
import { HttpModule } from '@angular/http';
import { RangePipe } from './pipes/range.pipe';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,HttpModule,AngularSvgIconModule,NgxPaginationModule,CommonModule,ReactiveFormsModule, FormsModule
  ],
  providers: [HotelService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
