import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { Apollo, gql} from "apollo-angular";
import {NavigationEnd, Router} from "@angular/router";
import {DataUpdateService} from "../data-update.service";

const UPDATE_MUTATION = gql `
 mutation updateTask(
    $id: Int!,
    $title: String,
    $description: String
  ) {
    updateTask(updateInput: {
      id:$id,
      title:$title,
      description: $description
    }) {
        id
        completed
        }
  }
`;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  currentUrl: string;
  titleValue: string;
  descriptionValue: string;

  @Input() submitLabel: string;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private apollo: Apollo, private router: Router, private dataUpdate: DataUpdateService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    })
  }
  updateTask() {
    if(this.title.value == null || this.title.value == ''){
      this.titleValue = this.dataUpdate.getUpdateTitle();
    }else{
      this.titleValue = this.title.value;
    }
    if(this.description.value == null || this.description.value == ''){
      this.descriptionValue = this.dataUpdate.getUpdateDescription();
    }else{
      this.descriptionValue = this.description.value;
    }
    this.apollo.mutate({
      mutation: UPDATE_MUTATION,
      variables: {
        id: this.dataUpdate.getUpdateId(),
        title: this.titleValue,
        description: this.descriptionValue
      }
    }).subscribe();
  }
  oldTitle() {
    return this.dataUpdate.getUpdateTitle();
  }
  oldDescription() {
    return this.dataUpdate.getUpdateDescription();
  }
}
