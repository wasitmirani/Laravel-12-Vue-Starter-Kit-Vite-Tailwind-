<script setup lang="ts">
import { Helpers } from '../../Utils/Helper';
import { DropdownOptions } from '../../Utils/DropdownOptions';
import { UserService } from '../../Services/user/UserService';

// add veriables here
let errors = Helpers.useDynamicRef([]);
const isLoading = Helpers.useDynamicRef(false)
const genderDropdownItems = DropdownOptions.genderOptions();
const maritalStatusDropdownItems = DropdownOptions.maritalStatusOptions();
const toast = Helpers.useDynamicInject('toast');

let user = Helpers.useDynamicReactive({
    phone: '',
    thumbnail: '',
    company_name: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    dob: '',
    gender: '',
    marital_status: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
});

const onSubmit = (type?: string) => {
    userStore(user);
};
const onInput = (phone: any, phoneObject: any, input: any) => {
    if (phoneObject?.formatted) {
        user.phone = phoneObject.formatted;
    }
}

const addThumbnail = (media: any) => {
    if (media) {
        user.thumbnail = media.name;
    }

}

const userStore = (data: any) => {
    isLoading.value = true;

      UserService.store(data)
        .then((res: any) => {
          toast.value.showToast(res.status, 'User Store', res.data);
          setTimeout(() => {
            Helpers.router().push({ name: "users" });
          }, 300);
        }).catch((err: any) => {
          if(err.response.data){
            errors.value = err.response.data;
            toast.value.showToast(err.response.status, 'Error: '+err.status,err.response.data);
          }
        });
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
};

</script>
<template>
    <div class="row gap-x-6">

        <div class="col-xl-9">
            <form @submit.prevent="onSubmit">
                <div class="card custom-card">
                    <div class="card-body add-products">
                        <div class="card custom-card shadow-none mb-0 border-0">
                            <div class="card-body p-0">
                                <div class="row gy-3 mx-0">
                                    <div class="col-xl-12">
                                        <h6 class="bg-primary-transparent p-3 py-2 mb-0 rounded fw-semibold">User
                                            Details
                                        </h6>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 mb-3">
                                            <FormInput v-model="user.first_name" label="First Name" name="first_name"
                                                placeholder="John" type="text" :errors="errors" autofocus />
                                        </div>
                                        <div class="col-md-6 mb-3">

                                            <FormInput v-model="user.last_name" label="Last Name" name="last_name"
                                                placeholder="Last name" type="text" :errors="errors" autofocus />
                                        </div>
                                        <div class="col-md-6 mb-3">

                                            <FormInput v-model="user.email" label="Email Address" name="email"
                                                placeholder="Email Address" type="email" :errors="errors" autofocus />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Contact Number</label>
                                            <vue-tel-input
                                                :value="user.phone"
                                                @input="onInput"
                                                :enabled-country-code="true"
                                                :searchable="true"
                                            ></vue-tel-input>

                                            <div  v-if="errors" class="invalid-feedback">
                                                    <validate-input :errors="errors?.errors" value="phone" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <FormInput v-model="user.password" label="Password" name="password"
                                                placeholder="********" type="password" :errors="errors" autofocus />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <FormInput v-model="user.password_confirmation" label="Confirm Password"
                                                name="password_confirmation" placeholder="******" type="password"
                                                :errors="errors" autofocus />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="row">
                                                <div class="col-xl-12 mb-3">
                                                    <!-- <input type="text" class="form-control" placeholder="Landmark"
                                                    aria-label="Landmark"> -->
                                                    <label class="form-label">Marital Status</label>

                                                    <select v-model="user.marital_status" class="form-select">
                                                        <option disabled value="">Select Marital Status</option>
                                                        <option v-for="item in maritalStatusDropdownItems"
                                                            :key="item.value" :value="item.value">
                                                            {{ item.value }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-xl-12 mb-3">
                                                    <FormInput v-model="user.address" label="Address" name="address"
                                                        placeholder="Street" type="text" :errors="errors" autofocus />
                                                </div>

                                                <div class="col-xl-6 mb-3">

                                                        <FormInput v-model="user.city" label="City"
                                                name="city" placeholder="City" type="text"
                                                :errors="errors" autofocus />
                                                </div>
                                                <div class="col-xl-6 mb-3">

                                                    <FormInput v-model="user.state" label="State"
                                                name="state" placeholder="State" type="text"
                                                :errors="errors" autofocus />
                                                </div>
                                                <div class="col-xl-6 mb-3">

                                                        <FormInput v-model="user.zip_code" label="Postal/Zip code"
                                                name="zip_code" placeholder="Postal/Zip code" type="text"
                                                :errors="errors" autofocus />
                                                </div>
                                                <div class="col-xl-6 mb-3">
                                                    <label class="form-label">Country</label>

                                                    <select v-model="user.country" id="inputCountry"
                                                        class="form-select">
                                                        <option disabled value="">Select Country</option>

                                                        <option value="PK">PAK</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="row">
                                                <div class="col-xl-12 mb-3">

                                                    <label class="form-label">Gender</label>

                                                    <select v-model="user.gender" class="form-select"  :class="{ 'is-invalid': errors?.errors?.gender }">
                                                        <option disabled value="">Select Gender</option>
                                                        <option v-for="item in genderDropdownItems" :key="item.value"
                                                            :value="item.value">
                                                            {{ item.value }}
                                                        </option>
                                                    </select>

                                                    <validate-input class="text-danger"  v-if="errors" :errors="errors?.errors" value="gender" />


                                                </div>
                                                <div class="col-xl-12 mb-3">
                                                    <label class="form-label">Date Of Birth</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text text-muted"> <i
                                                                class="ri-calendar-line"></i> </div>
                                                        <input type="text" class="form-control" v-model="user.dob"
                                                            id="humanfrienndlydate" placeholder="Choose Date">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer border-top border-block-start-dashed d-sm-flex justify-content-end">
                        <router-link :to="{ name: 'users' }" class="btn btn-danger btn-wave me-2 mb-2 mb-sm-0"> <i
                                class="ri-delete-back-2-line"></i> Discard </router-link>
                        <button class="btn btn-success btn-wave me-2 mb-2 mb-sm-0">Draft User <i
                                class="ri-draft-line"></i>
                        </button>
                        <button class="btn btn-primary btn-wave mb-2 mb-sm-0" v-if="!isLoading">Save User <i
                                class="ri-save-3-line"></i></button>
                        <button class="btn btn-primary mb-2 mb-sm-0" type="button" disabled v-if="isLoading">
                            <span class="spinner-border spinner-border-sm align-middle" role="status"
                                aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-body add-products">
                    <div class="card custom-card shadow-none mb-0 border-0">
                        <div class="card-body p-0">
                            <div class="row gy-3 mx-0">
                                <div class="col-xl-12">
                                    <h6 class="bg-primary-transparent p-3 py-2 mb-0 rounded fw-semibold">Profile Picture
                                    </h6>
                                </div>
                                <Uploader server="/upload/user/image" max="1" maxFilesize="2" :warnings="true"
                                    @add="addThumbnail" />
                                <div class="button-wrapper">
                                    <div class="small">Allowed formats: JPG, GIF, PNG. Max size: 4MB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
