

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
    setSubMenu = (title: string, link: string, can?: string) => {
        return {
            "title": title,
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
            this.setMultiMenu('Dashboards', 'bx bxs-home', 'dashboard-view',
                [
                    this.setSubMenu('Dashboard', '/dashboard', 'dashboard-view'),
                    // Add more sub-menu items as needed
                ],
            ),
            this.setHeadingMenu('Management & Apps'),
            this.setMultiMenu('Catalog', 'bx bxs-package', 'Catalog',
                [
                    this.setSubMenu('Account ', '/settings/user-account', 'account-view'),
                    this.setSubMenu('Users', '/settings/users', 'users-view'),
                    this.setSubMenu('Roles', '/settings/roles', 'roles-view'),
                ]
            ),
            this.setSingleMenu('Calendar', 'bx bx-calendar', '/calendar', 'calendar-view'),
            this.setHeadingMenu('Tools & Sessions'),
            this.setMultiMenu('Settings', 'bx bxs-cog', 'Settings',
                [
                    this.setSubMenu('Account ', '/settings/user-account', 'account-view'),
                    this.setSubMenu('Users', '/settings/users', 'users-view'),
                    this.setSubMenu('Roles', '/settings/roles', 'roles-view'),
                ]
            ),
        ];
    }

}
