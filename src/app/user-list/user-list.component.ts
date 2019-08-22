import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public listUsers: User[] = [];

  constructor(private userServiceService: UserServiceService) {
    this.makeUserListRequest();
  }

  ngOnInit() {
  }

  public makeUserListRequest() {
    this.userServiceService.getUsersListFromApi().subscribe((data: User[]) => {
      this.listUsers = data;
    });
  }
}
