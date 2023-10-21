import {Component, Input} from '@angular/core';
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
  @Input() deleteId!: number;
  constructor(private apollo: Apollo) {}

  deleteTask() {
    this.apollo.mutate({
      mutation: DELETE_MUTATION,
      variables: {
        id: this.deleteId
      }
    }).subscribe(
      ({data}) => {
        console.log('got data', data);
      });
  }
}
