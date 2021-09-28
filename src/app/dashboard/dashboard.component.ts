import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public navLinks: any[] = [];
  public activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'First',
        link: './first',
        index: 0
      }, {
        label: 'Second',
        link: './second',
        index: 1
      }, {
        label: 'Third',
        link: './third',
        index: 2
      }, {
        label: 'Fourth',
        link: './fourth',
        index: 3
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public logout(): void {
    localStorage.clear();
    window.location.reload();
  }

}
