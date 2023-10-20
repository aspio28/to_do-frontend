import { Component } from '@angular/core';
import { Apollo, gql} from "apollo-angular";

const DELETE_MUTATION = gql `
  mutation deleteTask(
    $id: Int!,
  ) {
    deleteTask(id: $id)
  }
`;
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(private apollo: Apollo) {}

  deleteTask() {
    this.apollo.mutate({
      mutation: DELETE_MUTATION,
      variables: {
        id: 3
      }
    }).subscribe(
      ({data}) => {
        console.log('got data', data);
      });
  }
}
