import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Contact } from '../../classes/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact!: Contact;
  @Output() del: EventEmitter<Contact> = new EventEmitter();

  constructor(private contentService: ContentService) {}

  delete(contact: Contact) {
    this.del.emit(contact);
  }
}
