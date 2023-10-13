import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-in-window',
  templateUrl: './log-in-window.component.html',
  styleUrls: ['./log-in-window.component.scss']
})
export class LogInWindowComponent implements OnInit{

  ngOnInit() {
    let loginDialog = document.getElementById("loginDialog") as HTMLDialogElement;
    loginDialog.show();
  }
}
