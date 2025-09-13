{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}
@extends('layouts.backend.auth-master')
@section('title')
Login
@endsection
@section('content')
  {{-- <!-- Login -->
  <div class="card p-md-7 p-1">
    <!-- Logo -->
    <div class="app-brand justify-content-center mt-5">
      <a href="{{route('login')}}" class="app-brand-link gap-2">
        <span class="app-brand-logo demo">
        <span style="color:#666cff;">
        <svg width="268" height="150" viewbox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z" fill="currentColor"></path>
            <path d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z" fill="url(#paint0_linear_2989_100980)" fill-opacity="0.4"></path>
            <path d="M22.9676 2.22569C24.0109 0.444187 26.3112 -0.172113 28.1054 0.849138C29.8996 1.87039 30.5084 4.14247 29.4651 5.92397L22.5251 17.7743C21.4818 19.5558 19.1816 20.1721 17.3873 19.1509C15.5931 18.1296 14.9843 15.8575 16.0276 14.076L22.9676 2.22569Z" fill="currentColor"></path>
            <path d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z" fill="currentColor"></path>
            <path d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z" fill="url(#paint1_linear_2989_100980)" fill-opacity="0.4"></path>
            <path d="M7.82901 2.22569C8.87231 0.444187 11.1726 -0.172113 12.9668 0.849138C14.7611 1.87039 15.3698 4.14247 14.3265 5.92397L7.38656 17.7743C6.34325 19.5558 4.04298 20.1721 2.24875 19.1509C0.454514 18.1296 -0.154233 15.8575 0.88907 14.076L7.82901 2.22569Z" fill="currentColor"></path>
            <defs>
            <lineargradient id="paint0_linear_2989_100980" x1="5.36642" y1="0.849138" x2="10.532" y2="24.104" gradientunits="userSpaceOnUse">
                <stop offset="0" stop-opacity="1"></stop>
                <stop offset="1" stop-opacity="0"></stop>
            </lineargradient>
            <lineargradient id="paint1_linear_2989_100980" x1="5.19475" y1="0.849139" x2="10.3357" y2="24.1155" gradientunits="userSpaceOnUse">
                <stop offset="0" stop-opacity="1"></stop>
                <stop offset="1" stop-opacity="0"></stop>
            </lineargradient>
            </defs>
        </svg>
        </span>
        </span>
        <span class="app-brand-text demo text-heading fw-semibold"> {{ config('app.name') }}</span>
      </a>
    </div>
    <!-- /Logo -->
    <div class="card-body mt-1">
      <h4 class="mb-1">Welcome to {{ config('app.name') }}! 👋</h4>
      <p class="mb-5">Please sign-in to your account and start the adventure</p>
      <x-auth-session-status class="mb-4" :status="session('status')" />

      <form method="POST"  id="formAuthentication" class="mb-5" action="{{ route('login') }}">
          @csrf
 
        <div class="form-floating form-floating-outline mb-5">
          <input type="text" class="form-control" id="email"  value="{{ old('email') }}" name="email" placeholder="Enter your email or username" autofocus="">
          <label for="email">Email or Username</label>
          @error('email')
          <span class="invalid-feedback" role="alert">
              <strong>{{ $message }}</strong>
          </span>
          @enderror
        </div>
        <div class="mb-5">
          <div class="form-password-toggle">
            <div class="input-group input-group-merge">
              <div class="form-floating form-floating-outline">
                <input type="password" id="password" class="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password">
                <label for="password">Password</label>
                @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
              </div>
              <span class="input-group-text cursor-pointer"><i class="ri-eye-off-line"></i></span>
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex justify-content-between mt-5">
          <div class="form-check mt-2">
            <input class="form-check-input" type="checkbox" id="remember-me">
            <label class="form-check-label" for="remember-me">
              Remember Me
            </label>
          </div>
          <a href="{{route('password.request')}}" class="float-end mb-1 mt-2">
            <span>Forgot Password?</span>
          </a>
        </div>
        <div class="mb-5">
          <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
        </div>
      </form>

      <p class="text-center">
        <span>New on our platform?</span>
        <a href="{{route('register')}}">
          <span>Create an account</span>
        </a>
      </p>

      <div class="divider my-5">
        <div class="divider-text">or</div>
      </div>

      <div class="d-flex justify-content-center gap-2">
        <a href="javascript:;" class="btn btn-icon rounded-circle btn-text-facebook">
          <i class="tf-icons ri-facebook-fill"></i>
        </a>

        <a href="javascript:;" class="btn btn-icon rounded-circle btn-text-twitter">
          <i class="tf-icons ri-twitter-fill"></i>
        </a>

        <a href="javascript:;" class="btn btn-icon rounded-circle btn-text-github">
          <i class="tf-icons ri-github-fill"></i>
        </a>

        <a href="javascript:;" class="btn btn-icon rounded-circle btn-text-google-plus">
          <i class="tf-icons ri-google-fill"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- /Login --> --}}
  <div class="authentication-background">
    <div class="container-lg">
        <div class="row justify-content-center authentication authentication-basic align-items-center h-100">
            <div class="col-xxl-7 col-sm-8 col-12">
                <div class="card custom-card my-4 border">
                    <div class="card-body">
                        <div class="row mx-0 align-items-center">
                        
                            <div class="col-xl-6">
                              <form method="POST"   class="mb-5" action="{{ route('login') }}">
                                @csrf
                                <div class="p-3">
                                    <div class="row gy-3">
                                     
                                        <div class="col-xl-12">
                                           <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                            <label class="form-label text-default" for="signin-email">Email Address<sup class="fs-12 text-danger">*</sup></label>
                                         
                                            <input class="form-control signin-email-input" id="validationCustom05" value="{{ old('email') }}" name="email" id="signin-email" placeholder="Enter your email address" type="email"> 
                                           

                                        </div>
                                        <div class="col-xl-12">
                                          
                      <x-input-error :messages="$errors->get('password')" class="mt-2" />
                                            <label class="form-label text-default" for="signin-password">Password<sup class="fs-12 text-danger">*</sup></label>
                                            <div class="input-group"> 
                                                <input class="form-control signin-password-input" id="signin-password" name="password"  placeholder="Enter your password" type="password"> 
                                                <button class="btn btn-primary-light show-password-button" type="button" onclick="createpassword('signin-password', this)">
                                                    <i class="ri-eye-off-line align-middle"></i>
                                                </button>

                                            </div>
                                          
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="form-check d-flex justify-content-between">
                                                <div>
                                                    <input class="form-check-input" type="checkbox" value="" id="rememberMe">
                                                    <label class="form-check-label text-muted fw-normal fs-12" for="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="https://laravelui.spruko.com/rixzo/reset-password-basic" class="text-success fw-medium fs-12">Forgot Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid mt-4">
                                        <button type="submit" class="btn btn-primary"><i class="ri-login-circle-line lh-1 me-2 align-middle"></i>Sign In</a>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-muted mt-3 mb-0">Don't have an account? <a class="text-primary fw-medium text-decoration-underline" href="{{ route('register') }}">Sign Up</a></p>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div class="col-xl-6 border rounded bg-secondary-transparent border-secondary border-opacity-10">
                                <div class="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                    <img src="{{asset('backend/assets/images/authentication/5.png')}}" alt="Sign In" class="img-fluid m-auto mb-3 flex-fill mt-4">
                                    <div class="flex-fill text-center">
                                        <h6 class="mb-2">Welcome Back!</h6>
                                        <p class="mb-0 text-muted fw-normal fs-12">Sign in to your account to continue.</p>
                                    </div>
                                    <div class="d-flex mb-2 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                        <button class="btn btn-sm d-flex align-items-center justify-content-center flex-fill btn-danger-light">
                                            <i class="ri-google-fill"></i>
                                            <span class="ms-2">Google</span>
                                        </button>
                                        <button class="btn btn-sm d-flex align-items-center justify-content-center flex-fill btn-primary-light">
                                            <i class="ri-facebook-fill"></i>
                                            <span class="ms-2">Facebook</span>
                                        </button>
                                        <button class="btn btn-sm d-flex align-items-center justify-content-center flex-fill btn-info-light">
                                            <i class="ri-twitter-x-line"></i>
                                            <span class="ms-2">Twitter</span>
                                        </button>
                                    </div>
                                    <a href="https://laravelui.spruko.com/rixzo/index">
                                        <img alt="logo" class="toggle-logo mb-4 pb-2" src="{{asset('backend/assets/images/brand-logos/toggle-logo.png')}}">
                                    </a>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection