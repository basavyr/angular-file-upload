export const MENU = [
  {
    title: 'Main',
    route: '/home-page',
    icon: 'fa fa-home',
    subMenu: [{ title: 'Main', route: '/home-page' }]
  },
  {
    title: 'Upload',
    route: '/upload-page',
    icon: 'fa fa-coffee',
    subMenu: [{ title: 'Upload', route: '/upload-page' }]
  },
  {
    title: 'About',
    route: '/about-page',
    icon: 'fa fa-address-card',
    subMenu: [
      { title: 'About', route: '/about-page' },
      { title: 'Contact', route: '/about-details' }
    ]
  }
];
