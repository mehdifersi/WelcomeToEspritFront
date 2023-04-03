import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../services/login-service.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    email:'',
    password :'',
  };


  constructor(/*private snack:MatSnackBar,*/private login:LoginServiceService, private router:Router) { }

  ngOnInit(): void {
  }


  formSubmit(){

    //console.log("clicked");

    if(this.loginData.email.trim() == '' || this.loginData.email == null){

      Swal.fire('Champ obligatoire !!', 'email est un champ obligatoire', 'error');

      /*  this.snack.open('Username est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password == null){

      Swal.fire('Champ obligatoire !!', 'Password est un champ obligatoire', 'error');


      /*  this.snack.open('password est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("succes");
        console.log(data);

        this.login.loginUser(data.token);

        this.login.getCurrentUser(this.loginData.email).subscribe(
          (user:any)=>{
            this.login.setUser(user);
            // console.log(user);

            if(this.login.getUserRole()=='STUDENT'){

              Swal.fire('Bienvenue',this.login.getUser().email, 'success').then((result)=>{
                if(result.isConfirmed){

                  this.router.navigate(['/']);

                  // window.location.href='/';
                }
              });
              //  window.location.href='/';

            }else{
              this.login.logout();
            }



          }
        )



      },
      (error)=>{
        console.log("Error");
        console.log(error);
        Swal.fire('Information Invalide', '', 'error');
      }
    );



  }

}
