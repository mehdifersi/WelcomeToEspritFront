import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../core/Model/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit{
  listUser?:Observable<User[]>
constructor(private userService:UserService) {
}

  ngOnInit() {
    this.listUser=this.userService.getUsers()
  }

}
