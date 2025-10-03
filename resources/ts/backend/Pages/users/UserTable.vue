<script setup lang="ts">
import { UserService } from '../../Services/user/UserService';
import GenericTable from '../../Components/GenericTable.vue';


const props = defineProps(['users', 'isLoading', 'getUsers'])
const emit = defineEmits(['user-deleted'])
const selectedItems = Helpers.useDynamicRef([]);
const toast = Helpers.useDynamicInject('toast');



function getUserRole(user: any) {
    if (user.roles.length > 0) {
        return user.roles[0].name;
    }
    return "No Role";
}
const deleteUser = (item: any) => {
    Helpers.Swal().fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
        if (result.isConfirmed) {
            UserService.delete(item.uuid).then((res: any) => {
                Helpers.Swal().fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });
                props.getUsers();
            }).catch((err:any) => {
                console.log("err:", err.response.status);
                toast.value.showToast(err.response.status,'Error: '+err.response.status , err.message ?? err.response.message);
            })

        }
    });
}

const editUser = (item: any) => {
    Helpers.router().push({ name: "update-user", params: { uuid: item.uuid } });
}


const columns = [
    { key: "name", label: "User" },
    // { key: "email", label: "Email" },
    { key: "user_name", label: "User Name" },
    { key: "updated_at", label: "Status" },
    { key: "last_login", label: "Last Login" },
    { key: "created_at", label: "Created At" },
    //   { key: "updated_at", label: "Updated At" },

];

const actions = [
    { label: "View", icon: "ri-eye-line", action: "view", class: "warning", },
    { label: "Edit", icon: "ri-pencil-line", action: "edit", class: "info" },
    { label: "Delete", icon: "ri-delete-bin-line", action: "delete", class: "danger" },
];

function handleAction({ action, row }: { action: string; row: any }) {
    if(! row.uuid){
                toast.value.showToast(400,'Error','User uuid not found');
                return;
    }
    switch (action) {
        case 'view':
            console.log('Viewing:', row);
            break;
        case 'edit':
           
            Helpers.router().push({ name: 'edit-user', params: { uuid: row.uuid, slug: row.slug } });
            break;
        case 'delete':
            console.log('Deleting:', row);
            deleteUser(row);
            break;
        default:
            console.log('Unknown action:', action);
    }
}
</script>
<template>
    <div>

        <GenericTable :columns="columns" :isLoading="isLoading" :fetchData="getUsers" :rows="users" :actions="actions" @action="handleAction"
            @update:selectedItems="selectedItems = $event">
            <template #name="{ row }">
                <div class="d-flex align-items-center gap-3">
                    <div class="lh-1">
                        <span class="avatar avatar-md me-2 online avatar-rounded shadow">
                            <img :src="`/backend/assets/images/faces/9.jpg`" alt="">
                        </span>
                    </div>
                    <div>
                        <span class="d-block fw-semibold">{{ row.name }}</span>
                        <span class="fs-12 text-muted">{{ row.email }}</span>
                    </div>
                </div>
            </template>
            <template #updated_at="{ row }">
                <span :class="`badge rounded-pill bg-dark-transparent`">Active</span>
            </template>
        </GenericTable>
    </div>

</template>
