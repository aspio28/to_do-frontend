import { Component } from '@angular/core';
import { Apollo, gql} from "apollo-angular";

const CREATE_MUTATION = gql `
  mutation createTask($input: any) {
    createTask(input: $input) {
      id
      title
      description
    }
  }
`;
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {
  constructor(private apollo: Apollo) {}
  send({ task,description }: any) {
    this.apollo.mutate({
      mutation: CREATE_MUTATION,
      variables: {
        input: {
          title: task,
          description: description,
        }
      }
    }).subscribe()
  }
}
