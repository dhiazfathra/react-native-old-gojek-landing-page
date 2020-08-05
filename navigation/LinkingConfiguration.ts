import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Orders: {
            screens: {
              OrdersScreen: 'Orders',
            },
          },
          Help: {
            screens: {
              HelpScreen: 'Help',
            },
          },
          Inbox: {
            screens: {
              InboxScreen: 'Inbox',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'Account',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
