import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Announcement } from './announcement.model';

export interface AnnouncementState extends EntityState<Announcement> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'announcement' })
export class AnnouncementStore extends EntityStore<AnnouncementState, Announcement> {

  constructor() {
    super();
  }

}

