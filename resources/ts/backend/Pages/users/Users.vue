<script setup lang="ts">
import { UserService } from '../../Services/user/UserService';
import UserTable from './UserTable.vue';
import UserFilterForm from './UserFilterForm.vue';
import OffCanvas from "../../Components/OffCanvas.vue";
import { DropdownOptions } from '../../Utils/DropdownOptions';


const users = Helpers.useDynamicRef([]);
const current_page   = Helpers.useDynamicRef(1);
const toast = Helpers.useDynamicInject('toast');
const isLoading = Helpers.useDynamicRef(false);
const sortableFilterOptions = DropdownOptions.sortableFilterOptions()

const getUsers = async (page = 1, per_page = 10) => {
    current_page.value = page;
    isLoading.value = true;
    await UserService.users(page.toString(), per_page).then((res) => {
        users.value = res.data.result.users;
        // toast.value.showToast(res.status, 'User Data', res.data);
    }).catch((err: any) => {
        console.log("err:", err.response.data.message);
        toast.value.showToast(err.status, 'Error: ' + err.status, err.response.data.message);
    })
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
}



function loadingStart(value: any) {
    isLoading.value = value;

}
function filterData(data: any) {
    users.value = data.result.users;
}


Helpers.useDynamicOnMounted(() => {
    getUsers();

});

</script>

<template>
    <div>
        <!-- Breadcrumb  -->
        <BreadcrumbComponent :current="'Users'" :links="[{ name: 'Dashboard', route: 'dashboard' }]" />
        <div class="row">
            <div class="col-xl-12">

                <div class="card custom-card">

                    <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="card-title d-flex align-items-center gap-2 flex-wrap">
                            <span>All Users List</span>
                            <!-- Search -->
                            <SearchInput
                                :label="'Search Users'"
                                :apiPath="`/user`"
                                @loading="loadingStart"
                                @filterData="filterData"
                                @reload="getUsers"
                                class="ms-3"
                            />
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <router-link
                                :to="{ name: 'create-user' }"
                                class="btn btn-primary d-flex align-items-center"
                            >
                                <i class="ri-add-line me-1 fw-medium align-middle"></i>
                                <span>Add User</span>
                            </router-link>
                            <button class="btn btn-success d-flex align-items-center">
                                <i class="ri-file-download-line me-1"></i>
                                <span>Export As CSV</span>
                            </button>
                            <div class="dropdown">
                                <a
                                    href="javascript:void(0);"
                                    class="btn btn-light btn-wave waves-effect waves-light d-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>Sort By</span>
                                    <i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li v-for="item in sortableFilterOptions" :key="item.value">
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            {{ item.label }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <OffCanvas
                                id="hs-overlay-right"
                                title="Filters"
                                buttonClass="btn btn-primary btn-wave waves-effect waves-light d-flex align-items-center"
                                buttonLabel="Filter"
                            >
                                <template #button-icon>
                                    <i class="ri-filter-3-line align-middle me-1"></i>
                                </template>
                                <template #body>
                                    <ul class="ti-list-group ti-list-group-flush mb-0">
                                        <li class="ti-list-group-item">Filter Option 1</li>
                                        <li class="ti-list-group-item">Filter Option 2</li>
                                    </ul>
                                </template>
                            </OffCanvas>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <UserTable :users="users" :getUsers="getUsers" :isLoading="isLoading" />
                    </div>
                    <div class="card-footer border-top-0">

                    </div>
                </div>
            </div>

        </div>
        <!--End::row-1 -->
    </div>
</template>
