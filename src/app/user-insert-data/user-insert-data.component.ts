import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service/user-service.service';

@Component({
  selector: 'app-user-insert-data',
  templateUrl: './user-insert-data.component.html',
  styleUrls: ['./user-insert-data.component.css']
})
export class UserInsertDataComponent implements OnInit {

  isSubmitted = false;
  userForm: FormGroup
  showAlertMessage = false;
  response = ''
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required]
    })

  }

  get user() {
    return this.userForm.controls;
  }

  onSubmit() {

    this.isSubmitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {

      let newUser = {
        name: this.user.name.value,
        lastname: this.user.lastname.value,
        age: this.user.age.value
      }

      this.userService.createNewUser(newUser, (res) => {
        let response = JSON.parse(res)

        if (response.status === 200) {
          this.userForm.reset();
          this.userService.atualizaTabelaUsuarios(true);
        }
        this.showAlert(response.message)
      })
    }
  }

  showAlert(message: any) {
    this.response = message;
    this.showAlertMessage = true;
    setTimeout(() => {
      this.showAlertMessage = false;
    }, 5000);
  }

}
