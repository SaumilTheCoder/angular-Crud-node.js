import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'Custome Module',
        items: ['users','tables']
    },
    {
        text: 'Login',
        items: ['login'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    login: {
        icon: 'book-open',
        text: 'Login',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            // {
            //     text: 'Error',
            //     submenu: [
            //         {
            //             text: '401 Page',
            //             link: '/error/401',
            //         },
            //         {
            //             text: '404 Page',
            //             link: '/error/404',
            //         },
            //         {
            //             text: '500 Page',
            //             link: '/error/500',
            //         },
            //     ],
            // },
        ],
    },
    users: {
        icon: 'chart-area',
        text: 'Users',
        link: '/users',
    },
    tables: {
        icon: 'table',
        text: 'Users-tables',
        link: '/tables',
    },

};
