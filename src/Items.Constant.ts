import Item from './Item.Interface';

const Items: Item[] = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    subItems: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' }
    ]
  },
  {
    name: 'settings',
    label: 'Settings',
    subItems: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance' },
      {
        name: 'notifications',
        label: 'Notifications',
        subItems: [
          { name: 'email', label: 'Email' },
          {
            name: 'desktop',
            label: 'Desktop',
            subItems: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' }
            ]
          },
          { name: 'sms', label: 'SMS' }
        ]
      }
    ]
  }
];

export default Items;
