import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'

@Component({
  selector: 'app-animationdemon',
  animations:[
    trigger('slideInOut',[
      state('void', style({
        transform: 'translateY(0%)',
        opacity:0
      })),
      transition(':enter', [
        animate(300, style({
          transform:'translateY(0%)',
          opacity:1
        }))
      ])
    ])
  ],
  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-100%)'}),
  //       animate('200ms ease-in', style({transform: 'translateY(0%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
  //     ])
  //   ])
  // ],
  templateUrl: './animationdemon.component.html',
  styleUrls: ['./animationdemon.component.css']
})
export class AnimationdemonComponent implements OnInit {
  expandFilter: boolean = true;
  icon: string ='fa-plus';
  constructor() { }

  ngOnInit() {
  }
  public toggleFilter(val): void {
    if (val){
      this.icon ='fa-plus';
    } else {
      this.icon = 'fa-minus';
    }
    this.expandFilter = !this.expandFilter;
  }

}
