
<script setup lang="ts">
const TabButtonComponent = Helpers.useDynamicDefineAsyncComponent(() => import('../../Components/TabButton.vue'));
import { Helpers } from "../../Utils/Helper";
const UserProfile = Helpers.useDynamicDefineAsyncComponent(()=>import('./partials/UserProfileComponent.vue'));
const SecurityComponent = Helpers.useDynamicDefineAsyncComponent(()=>import('./partials/SecurityComponent.vue'));



const auth_user = Helpers.auth();
const tabs_list = Helpers.useDynamicRef([
    {name:'account',icon:'ri-user-settings-line',label:'Account',class:'active'},
    {name:'security',icon:'ri-lock-line',label:'Security',class:''},
    {name:'billing',icon:'ri-lock-line',label:'Billing & Plans',class:''},
    {name:'branding',icon:'ri-layout-line',label:'Custom Branding',class:''},

]);

// Function to get the correct component based on the item name
const getComponent = (name:any) => {
  switch (name) {
    case 'account':
      return UserProfile;
    case 'security':
      return SecurityComponent;
    default:
      return null;
  }
};
</script>


<template>
    <div>
        <!-- <BreadcrumbComponent :active_name="auth_user.name" /> -->
        <div class="col-xl-12">
            <!-- <h6 class="text-muted">Filled Pills</h6> -->
            <div class="nav-align-top mb-6">
              <ul class="nav nav-pills mb-4 nav-fill" role="tablist">
                <li class="nav-item mb-1 mb-sm-0" role="presentation" v-for="item in tabs_list" :key="item.name">
                    <TabButtonComponent :name="item.name" :customclass="item.class" :icon="item.icon" :label="item.label"/>
                </li>

              </ul>
              <div class="tab-content">
                <!-- active show -->
                <div v-for="(item, index) in tabs_list" :key="item.name" :id="`navs-pills-justified-${item.name}`" role="tabpanel" :class="['tab-pane', 'fade', { active: index === 0, show: index === 0 }]">
                    <component :is="getComponent(item.name)" class="tab-pane-content"></component>
                  </div>

              </div>
            </div>
          </div>
    </div>

</template>

<style>
/* Override the styles affecting your component */
.nav-align-top>.tab-content,
.nav-align-right>.tab-content,
.nav-align-bottom>.tab-content,
.nav-align-left>.tab-content {
    flex-shrink: initial; /* or any other value you prefer */
    box-shadow: none;
    background: none;
}
</style>


