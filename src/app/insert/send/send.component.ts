import { Component } from '@angular/core';
import { Apollo, gql} from "apollo-angular";

const CREATE_MUTATION = gql `
  mutation createTask(
    $title: String!,
    $description: String!
  ) {
    createTask(taskInput: {
      title: $title,
      description: $description
    }) {
        id
        title
        }
  }
`;
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {
  constructor(private apollo: Apollo) {
  }
  send({task, description}: any) {
    this.apollo.mutate({
      mutation: CREATE_MUTATION,
      variables: {
        title: task,
        description: description,

      }
    }).subscribe(
      ({data}) => {
        console.log('got data', data);
      });
  }
}
