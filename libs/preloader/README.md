# Page Loader

- design list coming soon

## Html Markup

```html

<!-- preloader -->
<div id="preloader">
    <div class="preloader">
        <span></span>
        <span></span>
    </div>
</div>
<!-- preloader end  -->

```


## Css

```css

/*--
    - Preloader
-----------------------------------------*/

.dark #preloader {
    background-color: #232323;
}

#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
    z-index: 999999;
}

.preloader {
    width: 50px;
    height: 50px;
    display: inline-block;
    padding: 0px;
    text-align: left;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
}

.preloader span {
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #7460ef;
    -webkit-animation: preloader 1.3s linear infinite;
    animation: preloader 1.3s linear infinite;
}

.preloader span:last-child {
    animation-delay: -0.8s;
    -webkit-animation-delay: -0.8s;
}

@keyframes preloader {
    0% {
        transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        transform: scale(1, 1);
        opacity: 0;
    }
}

@-webkit-keyframes preloader {
    0% {
        -webkit-transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        -webkit-transform: scale(1, 1);
        opacity: 0;
    }
}


```

## Js Code

```js

/*------------------------------------
	Preloader
--------------------------------------*/
$(window).on('load', function () {
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})

```
