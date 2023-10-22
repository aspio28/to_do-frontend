import { Component, Input } from '@angular/core';
import { Apollo, gql} from "apollo-angular";


const CHECK_MUTATION = gql `
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
  selector: 'app-check-task',
  templateUrl: './check-task.component.html',
  styleUrls: ['./check-task.component.scss']
})
export class CheckTaskComponent {
  @Input() checkId!: number;
  @Input() checkCompleted! : boolean;
  constructor(private apollo: Apollo) {}

  checkTask() {
    this.apollo.mutate({
      mutation: CHECK_MUTATION,
      variables: {
        id: this.checkId,
        completed: !this.checkCompleted
      }
    }).subscribe();
  }

}
