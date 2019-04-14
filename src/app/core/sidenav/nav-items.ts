export interface NavItem {
  name: string;
  route: string[];
  icon: string[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Home',
    route: ['/home'],
    icon: ['fas', 'home'],
  },
  {
    name: 'Customers',
    route: ['/customers'],
    icon: ['fas', 'users'],
  },
  {
    name: 'Tickets',
    route: ['/tickets'],
    icon: ['fas', 'life-ring'],
  },
];
