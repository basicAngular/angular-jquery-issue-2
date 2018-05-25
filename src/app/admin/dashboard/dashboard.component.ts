import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private router;
  public global:any;

  refresh() {
    this.router.navigate(['/dashboard']);
    this.ngOnInit();
  }
  ngOnInit() { }
}