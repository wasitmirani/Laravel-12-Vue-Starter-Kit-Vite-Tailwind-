<script lang="ts" setup>
import { Helpers } from "../../Utils/Helper";
import SidebarMenu from "../../Utils/Sidebar";

const menuList: any = Helpers.useDynamicRef([]);

Helpers.useDynamicOnMounted(() => {
    let sidebar = new SidebarMenu();
    const fetchedMenuList = sidebar.getMenuList();
    menuList.value = fetchedMenuList;
});
function isActive(link: string) {
    return Helpers.route().path === link ? 'active' : '';

}
function isAllowed(value: string): boolean {
    //   console.log("isAllowed", value);
    return true;
    // if (permissions.includes(value)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
const getMenuClass = (type: string) => {
    switch (type) {
        case "heading":
            return "menu-header fw-medium mt-4";
            break;
        default:
            return "menu-item";
            break;
    }
}
</script>

<template>
    <div>
        <!-- SideBarMenu -->
    </div>
</template>

<style>

</style>
