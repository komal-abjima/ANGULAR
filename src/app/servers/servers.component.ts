import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowServer= false;
  CreateServer = "Server is not created..";
  ServerName:string =  "";
  MessageServer: boolean = false;
  Server = ["Test1", "Test2"]

  constructor(){
    setTimeout(() => {
      this.allowServer = true
    }, 2000);
  }

  ngOnInit(): void {
    
  }
  // event binding
  onCreateServer(){
    this.Server.push("ServerName");
    this.MessageServer = true;
    this.CreateServer = 'Server is created and server name is ' + this.ServerName;
  }


//by using event: any type
  // onupdateServerName(event: any){
  //   console.log(event);

  //   this.ServerName = event.target.value;
  // }

  //by using event: Event type
  onupdateServerName(event: Event){
    console.log(event);

    this.ServerName = (<HTMLInputElement>event.target).value;
  }



}
