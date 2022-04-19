import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 0;

  today = new Date(Date.now());
  compareDates(date1: any, date2: any) {
    if (date1 === null || date2 === null) {
      return false;
    }
    const d1 = new Date(date1)
    const d2 = date2
    return d1 > d2;
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    },5000)
  }
}
