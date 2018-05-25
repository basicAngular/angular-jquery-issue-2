import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   logout(){
	      localStorage.removeItem('UserData');
        this.router.navigate(['admin']);
  }
}
