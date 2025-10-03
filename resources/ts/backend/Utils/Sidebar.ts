

export default class SidebarMenu {

    private per_fix = "/app";

    setSingleMenu = (title: string, icon: string, link: string, can?: string) => {
        return {
            "title": title,
            "type": 'single',
            "icon": icon,
            "link": this.per_fix + link,
            "can": can,
        }
    }
    setMultiMenu = (title: string, icon: string, can?: string, sub_menu?: any) => {
        return {
            "title": title,
            "icon": icon,
            "can": can,
            "type": "multi",
            "sub_menu": sub_menu, // Initialize an empty array for sub-menu
        }
    }
    setSubMenu = (title: string, icon: string, link: string, can?: string) => {
        return {
            "title": title,
            "icon": icon,
            "link": this.per_fix + link,
            "can": can,

        }
    }
    setHeadingMenu = (title: string) => {
        return {
            "title": title,
            "type": "heading",
        }
    }
    getMenuList(): any[] {
        return [
            this.setHeadingMenu('Analytics'),
            this.setMultiMenu('Dashboards', 'bx bx-home menu-icon', 'dashboard-view',
                [
                    this.setSubMenu('Dashboard', 'bx bx-home', '/dashboard', 'dashboard-view'),
                    // Add more sub-menu items as needed
                ],
            ),
           
            // this.setHeadingMenu('Management & Apps'),
            this.setMultiMenu('Catalog', 'bx bxs-package menu-icon ', 'Catalog',
                [
                    this.setSubMenu('Account ', 'bx bx-user-circle sub-menu-icon', '/settings/user-account', 'account-view'),
                    this.setSubMenu('Users', 'bx bx-user sub-menu-icon', '/settings/users', 'users-view'),
                    this.setSubMenu('Roles', 'bx bx-user-minus sub-menu-icon', '/settings/roles', 'roles-view'),
                ]
            ),
            this.setSingleMenu('Calendar', 'bx bx-calendar menu-icon', '/calendar', 'calendar-view'),
            this.setHeadingMenu('Tools & Sessions'),
            this.setMultiMenu('Settings', 'bx bxs-cog menu-icon', 'Settings',
                [
                    this.setSubMenu('Account ', '/settings/user-account', 'account-view'),
                    this.setSubMenu('Users', '/settings/users', 'users-view'),
                    this.setSubMenu('Roles', '/settings/roles', 'roles-view'),
                ]
            ),
        ];
    }

}
