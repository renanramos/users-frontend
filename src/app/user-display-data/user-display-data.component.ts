import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user-service/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-display-data',
  templateUrl: './user-display-data.component.html',
  styleUrls: ['./user-display-data.component.css']
})
export class UserDisplayDataComponent implements OnInit {

  users = []
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = userService.atualizaTabela$.subscribe(
      val => val ? this.loadUsers() : val
    )
  }

  ngOnInit() {
    this.loadUsers()
  }

  loadUsers() {
    return this.userService.getAllUsers((data) => {
      this.users = data;
    });
  }

  editUser(user: any){    
    this.userService.editarUsuario(user);
  }

  deleteUser(id: any){
    this.userService.deleteUser(id);
  }

}
