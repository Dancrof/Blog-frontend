import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = { 
    username: ''
  };

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile()
    .subscribe(
      res =>{
        console.log(res)
        this.user = res;
      },
      err => console.log(err)
    )
  }

}
