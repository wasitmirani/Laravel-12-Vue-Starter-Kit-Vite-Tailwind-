import { createApp } from "vue";

// import './registerServiceWorker'
import { createPinia } from 'pinia'
import App from "./App.vue";
// import BreadcrumbComponent from  "./vue/backend/components/BreadcrumbComponent.vue";;
// import SearchInput from "./vue/backend/components/SearchInputComponent.vue";
// import LoadingBox from "./vue/backend/components/LoadingBoxComponent.vue";
// import Avatar from "./vue/backend/components/AvatarComponent.vue";
// import ValidateInput from "./vue/backend/components/ValidateInputComponent.vue";
// import GenericInput from "./vue/backend/components/GenericInputComponent.vue";
// import * as moment from 'moment'
// import Swal from 'sweetalert2'
// import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';
// import ToastService from 'primevue/toastservice';
// import Uploader from 'vue-media-upload';
// import VueTelInput from 'vue3-tel-input'
// import 'vue3-tel-input/dist/vue3-tel-input.css'
import { useGlobal } from './global-composables'; // Import the composable
// import VueMultiselect from 'vue-multiselect'
// import "vue-multiselect/dist/vue-multiselect.css"



import router from "./router";





const pinia = createPinia()
const app = createApp(App);


  let permissions = JSON.parse(`${localStorage.getItem('permissions')}`);
  app.directive("can", {
    beforeMount(el, binding, vnode) {
      if (permissions.includes(binding.value)) {
        return vnode.el.hidden = false;
      }
      else {
        return vnode.el.hidden = true;
      }
    }
  });
app.use(pinia);
app.use(router);
app.provide('useGlobal', useGlobal); // Provide the composable




// app.component('BreadcrumbComponent',BreadcrumbComponent);
// app.component('Uploader', Uploader);

// app.component('SearchInput',SearchInput);
// app.component('LoadingBox',LoadingBox);
// app.component('validate-input',ValidateInput);
// app.component('generic-input',GenericInput);
// app.component('VueMultiselect',VueMultiselect);
// app.component('Avatar',Avatar);
// 

// window.Swal =  app.config.globalProperties.$swal;

app.config.globalProperties.$router = router;
app.mount('#frontend-app');




