import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Globals } from '../../globals';
// tslint:disable-next-line:class-name

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  baseurl = '';
  itemData: any = '';
  constructor (
      private http: HttpClient,
      private globals: Globals) {
      this.baseurl = globals.baseurl;
  }

  ngOnInit() {
    this.itemList();
  }

  itemList() {
    this.http.get(this.baseurl + '/items').subscribe(data => {
      this.itemData = data;
    });
  }
}


