import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Http }    from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  foo: string
  bar: number
  myCollection: number[]
  myBool: boolean
  myServiceResult: string[]
  myServiceResult2: string
  users: object[]
  myFormInput: string = "Brian"
  myProperty: string

  constructor(
      private userService: UsersService,
      private route: ActivatedRoute,
    private http: Http
  ){ }

  ngOnInit() {
      this.foo = 'foo here'
      this.bar = 123
      this.myCollection = [100,200,300]
      this.myBool = true
      this.myServiceResult = this.userService.cars
      this.myServiceResult2 = this.userService.myData()
      this.myProperty = "foobar"

      // http://localhost:4200/users/777
      this.route.params.subscribe(params => {
       console.log(+params['id']); // (+) converts string 'id' to a number
    }); // Returns a Subscriber  object

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
       this.users = data.json();
    });

  }

  doSomething(){
      alert('Done!')
  }

}
