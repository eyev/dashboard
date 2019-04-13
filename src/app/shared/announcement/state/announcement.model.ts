import { ID } from '@datorama/akita';

export interface Announcement {
  id: ID;
  author: string;
  position: string;
  time: string;
  avatar: string;
  message: string;
}

export function createAnnouncement(
  params: Partial<Announcement>,
): Announcement {
  return {
    id: 0,
    author: '',
    position: '',
    time: '',
    message: '',
    avatar: '',
    ...params,
  };
}
