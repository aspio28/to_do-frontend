import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import {NavigationEnd, Router} from "@angular/router";

const QUERY = gql `
{
  tasks {
    title
    description
    completed
  }
}`;
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  tasks: Observable<any>;
  currentUrl: string;
  constructor(private apollo: Apollo, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    })
  }
  ngOnInit() {
    this.tasks = this.apollo
      .watchQuery<any>({
        query: QUERY,
        pollInterval: 500,
      })
      .valueChanges.pipe(map(result => result.data.tasks));
  }
}

