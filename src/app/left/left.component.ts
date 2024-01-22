import { Component, ViewChild } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent {
  selectedContact: string;
  newContactName: string = '';
  searchText: string = '';
  showAddContactInput: boolean = false;

  @ViewChild(ChatComponent) chatComponent: ChatComponent;

  contacts: any[] = [
    { name: 'Person 1', messages: [] },
    { name: 'Person 2', messages: [] },
    { name: 'Person 3', messages: [] }

  ];

  ngOnInit(): void {
    this.selectedContact = this.contacts[0].name;
    this.loadMessages();
  }

  onContactSelected(contact: string): void {
    this.selectedContact = contact;
    this.loadMessages();
  }
  receiveUserMessage(message: string): void {
    const selectedContactObj = this.contacts.find((c) => c.name === this.selectedContact);
    if (selectedContactObj) {
      selectedContactObj.messages.unshift({ text: message });
      this.saveMessages(selectedContactObj);
    }

    if (this.chatComponent) {
      this.chatComponent.updateMessages(selectedContactObj.messages, this.selectedContact);
    }
  }

  loadMessages(): void {
    const selectedContactObj = this.contacts.find((c) => c.name === this.selectedContact);
    if (selectedContactObj) {
      const storedMessages = sessionStorage.getItem(this.selectedContact);
      selectedContactObj.messages = storedMessages ? JSON.parse(storedMessages) : [];
      this.chatComponent.updateMessages(selectedContactObj.messages, this.selectedContact);
    }
  }

  saveMessages(contact: any): void {
    sessionStorage.setItem(contact.name, JSON.stringify(contact.messages));
  }

  addContact(): void {
    if (this.newContactName.trim() !== '') {
      const newContact = { name: this.newContactName, messages: [] };
      this.contacts.push(newContact);
      this.newContactName = '';
      this.showAddContactInput = !this.showAddContactInput;
    }
  }

  searchContacts(): any[] {
    return this.contacts.filter(
      (contact) => contact.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  toggleAddContact() {
    this.showAddContactInput = !this.showAddContactInput;
  }
}