import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AnnouncementStore, AnnouncementState } from './announcement.store';
import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementQuery extends QueryEntity<AnnouncementState, Announcement> {

  constructor(protected store: AnnouncementStore) {
    super(store);
  }

}
