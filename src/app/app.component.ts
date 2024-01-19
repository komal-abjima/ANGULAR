import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
  // assignment-4
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

   // input() decorator
   serverElements = [{type: 'server', name: 'Test a server', content: 'Just a Test!'}];

   // Output() decorator
     onServerAdded(serverData: {serverName: string, serverContent: string}){
       this.serverElements.push({
         type: 'server',
         name: serverData.serverName,
         content: serverData.serverContent
       });
   
     }
     onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
       this.serverElements.push({
         type:'blueprint',
         name: blueprintData.serverName,
         content: blueprintData.serverContent
       });
     }

    //  ngOnchnages()
    addChanges(){
      this.serverElements[0].name='Changed!'
    }

    // onDestroy()
    onDestroy(){
      this.serverElements.splice(0,1);
    }

    // assignmnet-4
    onIntervalFired(FiredNumber: number){
      if(FiredNumber % 2 === 0){
        this.evenNumbers.push(FiredNumber);
      }
      else{
        this.oddNumbers.push(FiredNumber);
      }

      // console.log(FiredNumber);


    }
}
