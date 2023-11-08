import {Component, OnInit} from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userIcon1 = faUser;
  userIcon2 = faUser;
  userIcon3 = faUser;
  ngOnInit(): void {
  }


}
