import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {DataUpdateService} from "../../data-update.service";

@Component({
  selector: 'app-load-update',
  templateUrl: './load-update.component.html',
  styleUrls: ['./load-update.component.scss']
})
export class LoadUpdateComponent {
  @Input() taskId!: number;
  @Input() taskTitle!: string;
  @Input() taskDescription!: string;

  currentUrl: string;
  constructor(private router: Router, private dataUpdate: DataUpdateService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    })
  }
  taskToUpdate() {
    this.dataUpdate.setUpdate(this.taskId, this.taskTitle, this.taskDescription);
  }
}
