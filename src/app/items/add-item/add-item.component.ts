import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../globals';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  baseurl = '';
  // response = '';
  constructor(
      private http: HttpClient,
      private globals: Globals) {
      this.baseurl = globals.baseurl;
      }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
      const req = this.http.post(this.baseurl + '/admin_login', { data: form.value })
          .subscribe(
              req => {
                console.log(req);
              },
              err => {
                console.log('error occured');
              }
          );
    }
}
