{{-- <x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Name -->
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ms-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}
@extends('layouts.backend.auth-master')
@section('title')
Register
@endsection
@section('content')

    <!-- Left Text -->
    <div class="d-none d-lg-flex col-lg-3 align-items-center justify-content-center p-12 mt-12 mt-xxl-0">
        <img alt="register-multi-steps-illustration" src="../../assets/img/illustrations/auth-register-multi-steps-illustration.png" class="h-auto mh-100 w-px-200">
      </div>
      <!-- /Left Text -->
  
      <!--  Multi Steps Registration -->
      <div class="d-flex col-lg-9 align-items-center justify-content-center authentication-bg p-5">
        <div class="w-px-700 mt-12 mt-lg-0 pt-lg-0 pt-4">
          <div id="multiStepsValidation" class="bs-stepper wizard-numbered shadow-none">
            <div class="bs-stepper-header border-bottom-0 mb-2">
              <div class="step" data-target="#accountDetailsValidation">
                <button type="button" class="step-trigger ps-0">
                  <span class="bs-stepper-circle"><i class="ri-check-line"></i></span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-number">01</span>
                    <span class="d-flex flex-column ms-2">
                      <span class="bs-stepper-title">Account</span>
                      <span class="bs-stepper-subtitle">Account Details</span>
                    </span>
                  </span>
                </button>
              </div>
              <div class="line"></div>
              <div class="step" data-target="#personalInfoValidation">
                <button type="button" class="step-trigger">
                  <span class="bs-stepper-circle"><i class="ri-check-line"></i></span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-number">02</span>
                    <span class="d-flex flex-column ms-2">
                      <span class="bs-stepper-title">Personal</span>
                      <span class="bs-stepper-subtitle">Enter Information</span>
                    </span>
                  </span>
                </button>
              </div>
              <div class="line"></div>
              <div class="step" data-target="#billingLinksValidation">
                <button type="button" class="step-trigger">
                  <span class="bs-stepper-circle"><i class="ri-check-line"></i></span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-number">03</span>
                    <span class="d-flex flex-column ms-2">
                      <span class="bs-stepper-title">Billing</span>
                      <span class="bs-stepper-subtitle">Payment Details</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div class="bs-stepper-content">
              <form id="multiStepsForm" onSubmit="return false">
                <!-- Account Details -->
                <div id="accountDetailsValidation" class="content">
                  <div class="content-header mb-5">
                    <h4 class="mb-1">Account Information</h4>
                    <span>Enter Your Account Details</span>
                  </div>
                  <div class="row gx-5">
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" name="multiStepsUsername" id="multiStepsUsername" class="form-control" placeholder="johndoe" />
                        <label for="multiStepsUsername">Username</label>
                      </div>
                    </div>
                    <div class="col-sm-6  mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="email" name="multiStepsEmail" id="multiStepsEmail" class="form-control" placeholder="john.doe@email.com" aria-label="john.doe" />
                        <label for="multiStepsEmail">Email</label>
                      </div>
                    </div>
                    <div class="col-sm-6 form-password-toggle mb-5">
                      <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                          <input type="password" id="multiStepsPass" name="multiStepsPass" class="form-control" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="multiStepsPass2" />
                          <label for="multiStepsPass">Password</label>
                        </div>
                        <span class="input-group-text cursor-pointer" id="multiStepsPass2"><i class="ri-eye-off-line"></i></span>
                      </div>
                    </div>
                    <div class="col-sm-6 form-password-toggle mb-5">
                      <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                          <input type="password" id="multiStepsConfirmPass" name="multiStepsConfirmPass" class="form-control" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="multiStepsConfirmPass2" />
                          <label for="multiStepsConfirmPass">Confirm Password</label>
                        </div>
                        <span class="input-group-text cursor-pointer" id="multiStepsConfirmPass2"><i class="ri-eye-off-line"></i></span>
                      </div>
                    </div>
                    <div class="col-md-12 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" name="multiStepsURL" id="multiStepsURL" class="form-control" placeholder="johndoe/profile" aria-label="johndoe" />
                        <label for="multiStepsURL">Profile Link</label>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-between">
                      <button class="btn btn-outline-secondary btn-prev" disabled> <i class="ri-arrow-left-line ri-16px me-sm-1_5 me-0"></i>
                        <span class="align-middle d-sm-inline-block d-none">Previous</span>
                      </button>
                      <button class="btn btn-primary btn-next"> <span class="align-middle d-sm-inline-block d-none me-sm-1_5 me-0">Next</span> <i class="ri-arrow-right-line ri-16px"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Personal Info -->
                <div id="personalInfoValidation" class="content">
                  <div class="content-header mb-5">
                    <h4 class="mb-1">Personal Information</h4>
                    <span>Enter Your Personal Information</span>
                  </div>
                  <div class="row gx-5">
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsFirstName" name="multiStepsFirstName" class="form-control" placeholder="John" />
                        <label for="multiStepsFirstName">First Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsLastName" name="multiStepsLastName" class="form-control" placeholder="Doe" />
                        <label for="multiStepsLastName">Last Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-5">
                      <div class="input-group input-group-merge">
                        <span class="input-group-text">US (+1)</span>
                        <div class="form-floating form-floating-outline">
                          <input type="text" id="multiStepsMobile" name="multiStepsMobile" class="form-control multi-steps-mobile" placeholder="202 555 0111" />
                          <label for="multiStepsMobile">Mobile</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsPincode" name="multiStepsPincode" class="form-control multi-steps-pincode" placeholder="Postal Code" maxlength="6" />
                        <label for="multiStepsPincode">Pincode</label>
                      </div>
                    </div>
                    <div class="col-md-12 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsAddress" name="multiStepsAddress" class="form-control" placeholder="Address" />
                        <label for="multiStepsAddress">Address</label>
                      </div>
                    </div>
                    <div class="col-md-12 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsArea" name="multiStepsArea" class="form-control" placeholder="Area/Landmark" />
                        <label for="multiStepsArea">Landmark</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsCity" class="form-control" placeholder="Jackson" />
                        <label for="multiStepsCity">City</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-5">
                      <div class="form-floating form-floating-outline">
                        <select id="multiStepsState" class="select2 form-select" data-allow-clear="true">
                          <option value="">Select</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                        <label for="multiStepsState">State</label>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-between">
                      <button class="btn btn-outline-secondary btn-prev"> <i class="ri-arrow-left-line ri-16px me-sm-1_5 me-0"></i>
                        <span class="align-middle d-sm-inline-block d-none">Previous</span>
                      </button>
                      <button class="btn btn-primary btn-next"> <span class="align-middle d-sm-inline-block d-none me-sm-1_5 me-0">Next</span> <i class="ri-arrow-right-line ri-16px"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Billing Links -->
                <div id="billingLinksValidation" class="content">
                  <div class="content-header mb-5">
                    <h4 class="mb-1">Select Plan</h4>
                    <span>Select plan as per your requirement</span>
                  </div>
                  <!-- Custom plan options -->
                  <div class="row gap-md-0 gap-4 mb-12 gx-5">
                    <div class="col-md">
                      <div class="form-check custom-option custom-option-icon">
                        <label class="form-check-label custom-option-content" for="basicOption">
                          <span class="custom-option-body">
                            <span class="fs-6 d-block fw-medium text-heading mb-2">Basic</span>
                            <small>A simple start for start ups & Students</small>
                            <span class="d-flex justify-content-center py-2">
                              <sup class="text-primary small lh-1 mt-3">$</sup>
                              <span class="h4 mb-0 text-primary">0</span>
                              <sub class="lh-1 mt-auto mb-3 text-muted small">/month</sub>
                            </span>
                          </span>
                          <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="basicOption" />
                        </label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-check custom-option custom-option-icon">
                        <label class="form-check-label custom-option-content" for="standardOption">
                          <span class="custom-option-body">
                            <span class="fs-6 d-block fw-medium text-heading mb-2">Standard</span>
                            <small>For small to medium businesses</small>
                            <span class="d-flex justify-content-center py-2">
                              <sup class="text-primary small lh-1 mt-3">$</sup>
                              <span class="h4 mb-0 text-primary">99</span>
                              <sub class="lh-1 mt-auto mb-3 text-muted small">/month</sub>
                            </span>
                          </span>
                          <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="standardOption" checked />
                        </label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-check custom-option custom-option-icon">
                        <label class="form-check-label custom-option-content" for="enterpriseOption">
                          <span class="custom-option-body">
                            <span class="fs-6 d-block fw-medium text-heading mb-2">Enterprise</span>
                            <small>Solution for enterprise & organizations</small>
                            <span class="d-flex justify-content-center py-2">
                              <sup class="text-primary small lh-1 mt-3">$</sup>
                              <span class="h4 mb-0 text-primary">499</span>
                              <sub class="lh-1 mt-auto mb-3 text-muted small">/month</sub>
                            </span>
                          </span>
                          <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="enterpriseOption" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <!--/ Custom plan options -->
                  <div class="content-header mb-5">
                    <h4 class="mb-1">Payment Information</h4>
                    <span>Enter your card information</span>
                  </div>
                  <!-- Credit Card Details -->
                  <div class="row gx-5">
                    <div class="col-md-12 mb-5">
                      <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                          <input id="multiStepsCard" class="form-control multi-steps-card" name="multiStepsCard" type="text" placeholder="1356 3215 6548 7898" aria-describedby="multiStepsCardImg" />
                          <label for="multiStepsCard">Card Number</label>
                        </div>
                        <span class="input-group-text cursor-pointer" id="multiStepsCardImg"><span class="card-type"></span></span>
                      </div>
                    </div>
                    <div class="col-md-5 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsName" class="form-control" name="multiStepsName" placeholder="John Doe" />
                        <label for="multiStepsName">Name On Card</label>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 mb-5">
                      <div class="form-floating form-floating-outline">
                        <input type="text" id="multiStepsExDate" class="form-control multi-steps-exp-date" name="multiStepsExDate" placeholder="MM/YY" />
                        <label for="multiStepsExDate">Expiry Date</label>
                      </div>
                    </div>
                    <div class="col-6 col-md-3 mb-5">
                      <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                          <input type="text" id="multiStepsCvv" class="form-control multi-steps-cvv" name="multiStepsCvv" maxlength="3" placeholder="654" />
                          <label for="multiStepsCvv">CVV Code</label>
                        </div>
                        <span class="input-group-text cursor-pointer" id="multiStepsCvvHelp"><i class="ri-question-line" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value"></i></span>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-between">
                      <button class="btn btn-outline-secondary btn-prev"> <i class="ri-arrow-left-line ri-16px me-sm-1_5 me-0"></i>
                        <span class="align-middle d-sm-inline-block d-none">Previous</span>
                      </button>
                      <button type="submit" class="btn btn-success btn-next btn-submit">Submit <i class="ri-check-line ri-16px ms-1_5"></i></button>
                    </div>
                  </div>
                  <!--/ Credit Card Details -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
@endsection