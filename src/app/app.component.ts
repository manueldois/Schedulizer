import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     {
    //       rates(currency: "USD") {
    //         currency
    //         rate
    //       }
    //     }
    //   `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     console.log(result)
    //   });
    
  }
}
