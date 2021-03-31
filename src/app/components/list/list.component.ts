import { Component, OnInit } from '@angular/core';
import { Contact } from '../../classes/Contact';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list!: Contact[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe((details) => {
      this.list = details;
    });
  }

  delete(contact: Contact) {
    this.list = this.list.filter((con) => con !== contact);
  }

  create(contact: Contact) {
    this.list.push(contact);
  }
}
