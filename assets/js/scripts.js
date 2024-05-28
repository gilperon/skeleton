

//MASCARA CPF E CNPJ (manter aqui no topo)
function startMaskCPFeCNPJ() {
    var cpfMask = '999.999.999-99';
    var cnpjMask = '99.999.999/9999-99';
    
    var cpfField = document.querySelector('#cpf');
    var cnpjField = document.querySelector('#cnpj');
    var cpfCnpjField = document.querySelector('#cpfcnpj');
    
    if (cpfField) {
        VMasker(cpfField).maskPattern(cpfMask);
        cpfField.addEventListener('input', inputHandler.bind(undefined, [cpfMask], 14), false);
    }
    
    if (cnpjField) {
        VMasker(cnpjField).maskPattern(cnpjMask);
        cnpjField.addEventListener('input', inputHandler.bind(undefined, [cnpjMask], 18), false);
    }

    if (cpfCnpjField) {
        VMasker(cpfCnpjField).maskPattern(cpfMask);
        cpfCnpjField.addEventListener('input', function(e) {
            var value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) {
                VMasker(cpfCnpjField).maskPattern(cnpjMask);
            } else {
                VMasker(cpfCnpjField).maskPattern(cpfMask);
            }
        }, false);
    }
}
function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = v.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    if (v) {
        c.value = VMasker.toPattern(v, masks[m]);
    }
}










document.addEventListener('DOMContentLoaded', () => {
    function toggleMainClass() {
        const mainElement = document.querySelector('.section-hero-cover');
        if (mainElement) {
            if (Math.random() < 0.30) { //30%
                //mainElement.classList.add('hero-woman');
            } 
        }
    }
    toggleMainClass();
});





// get attributes values from url
window.onload = function () {
    var url = document.location.href;
    var paramsString = url.split('?')[1];
    
    if (paramsString) {
        var params = paramsString.split('&');
        var data = {}, tmp;
        
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = decodeURIComponent(tmp[1]);  // Decode the parameter value
        }
        
        if (data.name) {
            //alert(data.name);
        }
    } else {
        console.warn('No query parameters found in the URL');
    }
};



function toggleBox(type){
    if(type=='cnpj'){
        $('#div-cnpj, #link-cnpj').show();
        $('#div-cpf, #link-cpf').hide();
        $('#div-data').find('label').html('Data de Abertura');
    }
    if(type=='cpf'){
        $('#div-cpf, #link-cpf').show();
        $('#div-cnpj, #link-cnpj').hide();
        $('#div-data').find('label').html('Data de Nascimento');
    }
}


$(document).ready(function() {

    /* Função para animar imagens */
    iniciar_animacao(100,"animated");
    // Mantenha aqui acima para mascara inicializar antes de tudo
    startMaskCPFeCNPJ();


    // Datapicker with MASK
    if (typeof Pikaday !== 'undefined') {
        var picker = new Pikaday({
            field: document.getElementById('data'),
            defaultDate: new Date(),   
            setDefaultDate: false,     
            yearRange: [1950, new Date().getFullYear()],
            format: 'DD/MM/YYYY',
            toString(date, format) {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            },
            parse(dateString, format) {
                const parts = dateString.split('/');
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                return new Date(year, month, day);
            }
        });
        let openDate = document.getElementById('openDate');
        if (openDate) {
                openDate.addEventListener('click', function() {
                picker.show();
            });
        }
        let dataField = document.querySelector('#data');
        let dataMask = '99/99/9999'
        if (dataField) {
            VMasker(dataField).maskPattern(dataMask);
            dataField.addEventListener('input', inputHandler.bind(undefined, [dataMask], 14), false);
        }
    }
    //End datapicker



    $('#searchButton').click(function() {
        var inputValue = $('#cpfcnpj').val();
        window.location.href = './consulta.html?name=' + encodeURIComponent(inputValue) +'&theme=' + $('body').attr('class') + '';
    });

    // Monitor all link clicks
    $('a').click(function(event) {
        var targetUrl = $(this).attr('href');
        if (targetUrl.includes('./consulta.html')) {
            event.preventDefault();
            window.location.href = './consulta.html?theme=' + $('body').attr('class') + '';
        }
    });

    if (window.location.pathname.includes('consulta.html')) {
        let params = getURLParams();
        if(params.theme && params.theme!=='undefined'){
            $('body').addClass(params.theme);
            $('.logo-datapact').addClass('d-none');
            $(`.logo-${params.theme}`).addClass('d-block');
        }
        if (params.name && params.name.length > 3) {

            let value = params.name;
            const unmaskedValue = value.replace(/[-/.]/g, '');
            if (unmaskedValue.length === 14) {
                $('#cnpj').val(params.name).trigger('input');
                toggleBox('cnpj');
            }else{
                $('#cpf').val(params.name).trigger('input');
                toggleBox('cpf');
            }

        }
        

    }

    if (window.location.pathname.includes('listagem-parceiros.html') || window.location.pathname.includes('negociacao.html')) {
        let params = getURLParams();
        if(params.theme && params.theme!=='undefined'){
            $('body').addClass(params.theme);
            $('.logo-datapact').addClass('d-none');
            $(`.logo-${params.theme}`).addClass('d-block');
        }
    }


    function getURLParams() {
        var url = document.location.href;
        var paramsString = url.split('?')[1];
        var data = {};
    
        if (paramsString) {
            var params = paramsString.split('&');
            var tmp;
    
            for (var i = 0, l = params.length; i < l; i++) {
                tmp = params[i].split('=');
                data[tmp[0]] = decodeURIComponent(tmp[1]);  // Decode the parameter value
            }
        } else {
            console.warn('No query parameters found in the URL');
        }
    
        return data;
    }






    $('#slider-contratos').owlCarousel({
        stagePadding: 16,
        loop:false,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })



    //owl
    /*! Carousel Home */
        // var brandSlider = $('#carousel-v2');
        // brandSlider.owlCarousel({
        //     stagePadding: 30,
        //     items: 1,
        //     autoplay: false,
        //     autoplayTimeout: 4000,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     loop: true,
        //     dots: false,
        //     autoHeight: false,
        //     navSpeed: 500,
        //     navText: ['<svg class="owl-arrow-v2 left" width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M19.69 10.753H7.505l3.833-3.606c.52-.49.52-1.298 0-1.787a1.351 1.351 0 00-1.836 0L3.39 11.11c-.52.49-.52 1.29 0 1.78l6.112 5.75c.51.48 1.326.48 1.836 0 .52-.49.52-1.289 0-1.778l-3.833-3.607H19.69c.703 0 1.31-.545 1.31-1.25 0-.707-.607-1.252-1.31-1.252zm-13.142.379H19.69 6.548zm0 1.745l4.526 4.259-4.526-4.259zm-3.118-.602a.833.833 0 01.224-.89l6.112-5.751a.965.965 0 000 0l-6.112 5.75a.833.833 0 00-.224.891z" clip-rule="evenodd"></path></svg>', '<svg class="owl-arrow-v2 right" width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.31 10.753h12.185l-3.833-3.606a1.219 1.219 0 010-1.787c.51-.48 1.326-.48 1.836 0l6.112 5.75c.52.49.52 1.29 0 1.78l-6.112 5.75c-.51.48-1.326.48-1.836 0a1.209 1.209 0 010-1.778l3.833-3.607H4.31c-.703 0-1.31-.545-1.31-1.25 0-.707.607-1.252 1.31-1.252zm13.142.379H4.31h13.142zm-4.526-5.498a.965.965 0 011.308 0l6.112 5.75-6.112-5.75a.965.965 0 00-1.308 0z" clip-rule="evenodd"></path></svg>'],
        //     responsive: {
        //         // breakpoint from 480 up
        //         480: {
        //             items: 2,
        //             stagePadding: 20,
        //             loop: true,
        //             dots: false,
        //             autoHeight: false
        //         },
        //         780: {
        //             items: 3,
        //             stagePadding: 0,
        //             loop: true,
        //             dots: false,
        //             autoHeight: false
        //         },
        //         980: {
        //             items: 3,
        //             stagePadding: 0,
        //             loop: true,
        //             dots: false,
        //             autoHeight: false
        //         }
        //     }
        // });
        // brandSlider.trigger('to.owl.carousel', 0);


        // //Coloca first-active e last-active no carousel
        // $('.owl-carousel').trigger('to.owl.carousel', 0);
        // function brandSliderClasses() {
        //     $('.owl-carousel').each(function() {
        //         var total = $(this).find('.owl-item.active').length;
        //         $(this).find('.owl-item').removeClass('first-active');
        //         $(this).find('.owl-item').removeClass('last-active');
        //         $(this).find('.owl-item.active').each(function(index) {
        //             if (index === 0) {
        //                 $(this).addClass('first-active')
        //             }
        //             if (index === total - 1 && total > 1) {
        //                 $(this).addClass('last-active')
        //             }
        //         })
        //     })
        // }
        // brandSliderClasses();
        // $('.owl-carousel').on('translated.owl.carousel', function(event) {
        //     brandSliderClasses()
        // });
        // //Clica em um vai para a primeira posição
        // $(document).on('click', '.owl-item', function() {
        //     let carousel = $(this).closest('.owl-carousel');
        //     let index = $(this).index();
        //     let relativeIndex = carousel.data('owl.carousel').relative(index);
        //     carousel.trigger('to.owl.carousel', [relativeIndex, 300]);
        // });











});

/* Exibe Menu Flutuante */
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('#desktop-menu').addClass('fixed');
    }else{
        $('#desktop-menu').removeClass('fixed');
    }
});










let valueDisplays = document.querySelectorAll(".counter_discount");

let interval = 2500; // Increased interval for slower transition


valueDisplays.forEach((valueDisplay) => {
let startValue = 50;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);

let zoom = 1;
let counter = setInterval(function () {
startValue += 1;
// zoom = zoom * 1.02;
// valueDisplay.style.zoom = zoom;
if(startValue == 100){
    valueDisplay.textContent = 99;
}else{
    valueDisplay.textContent = startValue.toString().padStart(2, '0');
}

if (startValue >= endValue) {
  clearInterval(counter);
  var elements = document.querySelectorAll(".counter_discount");

    // Iterate through each element and add the "pulse" class
    elements.forEach(function(element) {
        
        //document.querySelector(".fc-primary").style.color("#ff6c00");
        element.classList.add("expandOpen");
        //element.classList.add("pulse");
    });
}
}, duration);

});








