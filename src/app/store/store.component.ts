import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items = [
  	{ name: "cursor" },
  	{ name: "grandma" }
  ]		
  ngOnInit() {
  }

}
