import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public userData$: Observable<any>;

  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.userData$ = this.store.select('products');
    console.log(this.userData$);
  }

}
