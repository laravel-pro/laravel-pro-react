<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script src="{{ mix('js/app.js') }}" defer></script>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-80839283-3"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-80839283-3');
        </script>

        <title>Laravel</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
