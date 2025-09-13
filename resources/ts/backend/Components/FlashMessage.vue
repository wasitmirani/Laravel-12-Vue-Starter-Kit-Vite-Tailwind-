<template>
    <div id="ToastMsg" :class="`toast colored-toast bg-${alert.type}-transparent`" role="alert" aria-live="assertive"
        aria-atomic="true" style="display: none;">
        <div :class="`toast-header bg-${alert.type} text-fixed-white text-dark`">
            <i :class="`bd-placeholder-img rounded me-2  ${alert.icon} `"></i>
            <strong class="me-auto">{{ alert.title }}</strong>
            <button type="button" class="btn-close" @click="hideToast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-dark">
            {{ alert.text }}
        </div>
    </div>
</template>

<script lang="ts" setup>
const toast = Helpers.useDynamicRef(null);
const alert = Helpers.useDynamicReactive({
    title: '',
    text: '',
    type: '',
    icon: '',
});
const showToast = (status: number, title: string, response: any): any => {

    const toast_item = document.getElementById('ToastMsg');
    console.log('status', status, 'title', title, 'response', response);
    if (toast_item) {
        toast_item.style.display = 'block';
        toast_item.style.opacity = '1';
        console.log('alert', status);
        const data = { status: status, title: title, text: response?.message ?? response };

        setMessage(data);
        console.log('alert', alert);
        setTimeout(() => {
            hideToast();
        }, 3000); // Close the toast after 5 seconds
    }
    else {
        console.log('Toast item not found');
        hideToast();
    }
};

const hideToast = () => {
    const toast_item = document.getElementById('ToastMsg');
    if (toast_item) {
        toast_item.style.display = 'none';
        toast_item.style.opacity = '0';
    }
};
const setMessage = (item: any) => {

    alert.title = item.title;
    alert.text = item.text;
    console.log('item.status', item.status);
    switch (item.status) {
        case 200:
        case 201:
            alert.type = 'success';
            alert.icon = 'ri-check-double-fill ';
            break;
        case 400:
            alert.type = 'danger';
            alert.icon = 'ri-error-warning-fill';
            break;
        case 404:
            alert.type = 'warning';
            alert.icon = 'ri-alarm-warning-fill';
            break;
        case 422:
            alert.type = 'danger';
            alert.icon = 'ri-alarm-warning-fill';
            break;
        case 500:
            console.log('500', item);
            alert.type = 'danger';
            alert.icon = 'ri-bug-fill';
            break;
        default:
            alert.type = 'dark';
            alert.icon = 'ri-alarm-warning-fill';
            alert.title = 'Error';
            alert.text = 'Something went wrong';
            break;
    }
};
defineExpose({ toast, showToast });
</script>

<style scoped>
.toast {
    position: fixed;
    top: 15px;
    right: 5px;
    z-index: 1050;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}
</style>
