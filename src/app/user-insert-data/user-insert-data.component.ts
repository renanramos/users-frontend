import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service/user-service.service';
import { Subscription } from 'rxjs';

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
  subscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) {
      this.subscription = userService.editaUsuario$.subscribe(
        val => {
          if(val){
            this.userForm.controls['id'].setValue(val.user_id)
            this.userForm.controls['name'].setValue(val.user_name)
            this.userForm.controls['lastname'].setValue(val.user_lastname)
            this.userForm.controls['age'].setValue(val.user_age)            
          }
        }
      )
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: ['', ],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required]
    })

  }

  get u() {
    return this.userForm.controls;
  }

  onSubmit() {

    this.isSubmitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {      

      let newUser = {
        id: this.u.id.value,
        name: this.u.name.value,
        lastname: this.u.lastname.value,
        age: this.u.age.value
      }
      if(newUser.id > 0){
        this.userService.updateUser(newUser, (res) => {
          let response = JSON.parse(res)

          if (response.status === 200){
            this.userForm.reset()
            this.userService.atualizaTabelaUsuarios(true)
          }
          this.showAlert(response.message)
        })
      }else{
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
  }

  showAlert(message: any) {
    this.response = message;
    this.showAlertMessage = true;
    setTimeout(() => {
      this.showAlertMessage = false;
    }, 5000);
  }

}
