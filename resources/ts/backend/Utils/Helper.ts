



import { useRoute } from "vue-router";
import { ref, onMounted,inject, Ref, UnwrapRef, reactive, UnwrapNestedRefs, defineAsyncComponent,computed } from "vue";
import router from "../router"
import Swal from 'sweetalert2'
import * as moment from "moment";
//



class Helper {

    public static base_url = window.location.origin;

    useDynamicReactive<T extends object>(initialValue: T): UnwrapNestedRefs<T> {
        return reactive(initialValue);
    }
    useDynamicRef<T>(initialValue: T): Ref<UnwrapRef<T>> {
        return ref(initialValue) as Ref<UnwrapRef<T>>;
    }
    useDynamicInject<T>(key: string, defaultValue: T): Ref<UnwrapRef<T>> {
        return inject(key, ref(defaultValue)) as Ref<UnwrapRef<T>>;
    }   useDynamicOnMounted(callback?: () => void) {
        onMounted(() => {
            // Execute any optional code when the component mounts
            if (callback) {
                callback();
            }

            // Return the onMounted function if needed
            return onMounted;
        });
    }
    useDynamicDefineAsyncComponent(loader: () => Promise<any>, callback?: () => void) {
        return defineAsyncComponent(() => loader().then(component => {
            if (callback) {
                onMounted(() => {
                    callback();
                });
            }
            return component;
        }));
    }
    useDynamicComputed<T>(getter: () => T) {
        return computed(getter);
    }
    route = () => {
        return useRoute();
    };

    Swal = () => {
        return Swal;
    }
    router = () => {
        return router;
    }
    navigateTo(routeName: string) {
        return router.push({ name: routeName });
    }

    appendValidateClass = (errors: any, value: string) => {
        if (errors && errors[value])
            return "validate";
    }

    auth() {
        return window.user;
    }

    DateTimeFormat(date: String) {
        return moment.utc(String(date)).local().format('DD-MMM-YYYY , h:mm a')
    }
    HourFormat(date: String) {
        return moment.utc(String(date)).local().fromNow();
    }

    setStatusBadge(status:string){
        switch (status) {
            case 'primary':
                return "primary"
                break;
            case 'success':
                return "success"
                break;
            case 'danger':
                return "danger"
                break;
            case 'warning':
                return "warning"
                break;
            case 'info':
                return "info"
                break;
            case 'dark':
                return "dark"
                break;
            case 'light':
                return "light"
                break;
            default:
                return "dark"
                break;
                break;
        }
    }


}


export const Helpers = new Helper();
// Attach the Helpers class to the global object for easy access
if (typeof global !== "undefined") {
    global.Helpers = Helpers; // For Node.js
} else if (typeof window !== "undefined") {
    window.Helpers = Helpers; // For browser environment
}
