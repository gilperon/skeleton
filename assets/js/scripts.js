

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








