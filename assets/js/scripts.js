

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
//MASCARA CDN - https://cdn.jsdelivr.net/gh/lagden/vanilla-masker@lagden/build/vanilla-masker.min.js
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.VMasker=b()}(this,function(){var a="9",b="A",c="S",d=[9,16,17,18,36,37,38,39,40,91,92,93],e=function(a){for(var b=0,c=d.length;c>b;b++)if(a==d[b])return!1;return!0},f=function(a){return a=a||{},a={precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",delimiter:a.delimiter||".",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:a.zeroCents,lastOutput:a.lastOutput},a.moneyPrecision=a.zeroCents?0:a.precision,a},g=function(d,e,f){for(;e<d.length;e++)(d[e]===a||d[e]===b||d[e]===c)&&(d[e]=f);return d},h=function(a){this.elements=a};h.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;b>a;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},h.prototype.bindElementToMask=function(a){for(var b=this,c=function(c){c=c||window.event;var d=c.target||c.srcElement;e(c.keyCode)&&setTimeout(function(){b.opts.lastOutput=d.lastOutput,d.value=i[a](d.value,b.opts),d.lastOutput=d.value,d.setSelectionRange&&b.opts.suffixUnit&&d.setSelectionRange(d.value.length,d.value.length-b.opts.suffixUnit.length)},0)},d=0,f=this.elements.length;f>d;d++)this.elements[d].lastOutput="",this.elements[d].onkeyup=c,this.elements[d].value.length&&(this.elements[d].value=i[a](this.elements[d].value,this.opts))},h.prototype.maskMoney=function(a){this.opts=f(a),this.bindElementToMask("toMoney")},h.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},h.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},h.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},h.prototype.unMask=function(){this.unbindElementToMask()};var i=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new h(b)};return i.toMoney=function(a,b){if(b=f(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var c="("+b.separator+"[0]{0,"+b.precision+"})",d=new RegExp(c,"g"),e=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(d,""),g>e&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),i=new RegExp("^(0|\\"+b.delimiter+")"),j=new RegExp("(\\"+b.separator+")$"),k=h.substr(0,h.length-b.moneyPrecision),l=k.substr(0,k.length%3),m=new Array(b.precision+1).join("0");k=k.substr(k.length%3,k.length);for(var n=0,o=k.length;o>n;n++)n%3===0&&(l+=b.delimiter),l+=k[n];if(l=l.replace(i,""),l=l.length?l:"0",!b.zeroCents){var p=h.length-b.precision,q=h.substr(p,b.precision),r=q.length,s=b.precision>r?b.precision:r;m=(m+q).slice(-s)}var t=b.unit+l+b.separator+m+b.suffixUnit;return t.replace(j,"")},i.toPattern=function(d,e){var f,h="object"==typeof e?e.pattern:e,i=h.replace(/\W/g,""),j=h.split(""),k=d.toString().replace(/\W/g,""),l=k.replace(/\W/g,""),m=0,n=j.length,o="object"==typeof e?e.placeholder:void 0;for(f=0;n>f;f++){if(m>=k.length){if(i.length==l.length)return j.join("");if(void 0!==o&&i.length>l.length)return g(j,f,o).join("");break}if(j[f]===a&&k[m].match(/[0-9]/)||j[f]===b&&k[m].match(/[a-zA-Z]/)||j[f]===c&&k[m].match(/[0-9a-zA-Z]/))j[f]=k[m++];else if(j[f]===a||j[f]===b||j[f]===c)return void 0!==o?g(j,f,o).join(""):j.slice(0,f).join("")}return j.join("").substr(0,f)},i.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},i.toAlphaNumeric=function(a){return a.toString().replace(/[^a-z0-9 ]+/i,"")},i});









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
        document.getElementById('openDate').addEventListener('click', function() {
            picker.show();
        });
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








