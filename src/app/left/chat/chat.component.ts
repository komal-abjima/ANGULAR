import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  @Input() selectedContact: string;
  @Output() sendMessage = new EventEmitter<string>();
  newMessage: string = '';
  allMessages: any = {};
  messages: any[] = [];
 
  sendUserMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.sendMessage.emit(this.newMessage);
      this.newMessage = '';
    }
  }
  
  updateMessages(newMessages: any[], contactName: string): void {
    this.allMessages[contactName] = newMessages;
    this.messages = this.allMessages[contactName] || [];
    sessionStorage.setItem(contactName, JSON.stringify(this.messages));
  }
}