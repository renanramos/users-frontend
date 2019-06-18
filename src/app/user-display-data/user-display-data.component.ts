import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-display-data',
  templateUrl: './user-display-data.component.html',
  styleUrls: ['./user-display-data.component.css']
})
export class UserDisplayDataComponent implements OnInit {

  users = {}

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers()
  }

  loadUsers() {
    return this.userService.getAllUsers((data) => {
      this.users = data;
      console.log(this.users)
    });
  }

}
