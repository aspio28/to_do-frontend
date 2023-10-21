import { Component, Input } from '@angular/core';
import { Apollo, gql} from "apollo-angular";


const UPDATE_MUTATION = gql `
 mutation updateTask(
    $id: Int!,
    $completed: Boolean!
  ) {
    updateTask(updateInput: {
      id:$id,
      completed: $completed
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
  @Input() updateId!: number;
  @Input() updateCompleted! : boolean;
  constructor(private apollo: Apollo) {}

  updateTask() {
    this.apollo.mutate({
      mutation: UPDATE_MUTATION,
      variables: {
        id: this.updateId,
        completed: !this.updateCompleted
      }
    }).subscribe(
      ({data}) => {
        console.log('got data', data);
      });
  }

}
