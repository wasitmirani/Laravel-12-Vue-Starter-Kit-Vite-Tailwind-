
<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="vertical" data-vertical-style="overlay" data-theme-mode="light" data-header-styles="light" data-menu-styles="light" data-toggled="close">

    <head>

        <!-- Meta Data -->
		<meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="Description" content="{{ config('app.name') }}">
        <meta name="Author" content="{{ config('app.name') }}">
        <meta name="keywords" content="{{ config('app.name') }}">
        
        <!-- TITLE -->
		    <title> {{ config('app.name') }} | @yield('title') </title>

        <link rel="icon" href="{{asset('/backend/assets/images/brand-logos/favicon.ico')}}" type="image/x-icon">

        <!-- BOOTSTRAP CSS -->
	    <link  id="style" href="{{asset('/backend/assets/libs/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

        <!-- APP SCSS -->
        <link rel="preload" as="style" href="{{asset('/backend/assets/app-_dJduKAg.css')}}" />
        <link rel="stylesheet" href="{{asset('/backend/assets/app-_dJduKAg.css')}}" />        

        <!-- ICONS CSS -->
        <link href="{{asset('/backend/assets/icon-fonts/icons.css')}}" rel="stylesheet">

        <!-- MAIN JS -->
        <script src="{{asset('/backend/assets/authentication-main.js')}}"></script>

        
     

	</head>

    <body>

        

          @yield('content')


        <!-- SCRIPTS -->

        <!-- BOOTSTRAP JS -->
        <script src="{{asset('/backend/assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

        
        <!-- Show Password JS -->
        <script src="{{asset('/backend/assets/show-password.js')}}"></script>
        

        <!-- END SCRIPTS -->

	</body>
</html>

