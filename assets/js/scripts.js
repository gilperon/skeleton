

document.addEventListener('DOMContentLoaded', () => {
    function toggleMainClass() {
        const mainElement = document.querySelector('.section-hero-cover');
        if (mainElement) {
            if (Math.random() < 0.50) {
                mainElement.classList.add('hero-woman');
            } 
        }
    }
    toggleMainClass();




});


$(document).ready(function() {

    /* Função para animar imagens */
    iniciar_animacao(100,"animated");

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







//MASCARA CPF E CNPJ
function inputHandler(masks, max, event) {
	var c = event.target;
	var v = c.value.replace(/\D/g, '');
	var m = c.value.length > max ? 1 : 0;
	VMasker(c).unMask();
	VMasker(c).maskPattern(masks[m]);
	c.value = VMasker.toPattern(v, masks[m]);
}

$(document).ready(function() {
var docMask = ['999.999.999-999', '99.999.999/9999-99'];
var doc = document.querySelector('#cpfcnpj');
VMasker(doc).maskPattern(docMask[0]);
doc.addEventListener('input', inputHandler.bind(undefined, docMask, 14), false);
});
//MASCARA CDN - https://cdn.jsdelivr.net/gh/lagden/vanilla-masker@lagden/build/vanilla-masker.min.js
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.VMasker=b()}(this,function(){var a="9",b="A",c="S",d=[9,16,17,18,36,37,38,39,40,91,92,93],e=function(a){for(var b=0,c=d.length;c>b;b++)if(a==d[b])return!1;return!0},f=function(a){return a=a||{},a={precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",delimiter:a.delimiter||".",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:a.zeroCents,lastOutput:a.lastOutput},a.moneyPrecision=a.zeroCents?0:a.precision,a},g=function(d,e,f){for(;e<d.length;e++)(d[e]===a||d[e]===b||d[e]===c)&&(d[e]=f);return d},h=function(a){this.elements=a};h.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;b>a;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},h.prototype.bindElementToMask=function(a){for(var b=this,c=function(c){c=c||window.event;var d=c.target||c.srcElement;e(c.keyCode)&&setTimeout(function(){b.opts.lastOutput=d.lastOutput,d.value=i[a](d.value,b.opts),d.lastOutput=d.value,d.setSelectionRange&&b.opts.suffixUnit&&d.setSelectionRange(d.value.length,d.value.length-b.opts.suffixUnit.length)},0)},d=0,f=this.elements.length;f>d;d++)this.elements[d].lastOutput="",this.elements[d].onkeyup=c,this.elements[d].value.length&&(this.elements[d].value=i[a](this.elements[d].value,this.opts))},h.prototype.maskMoney=function(a){this.opts=f(a),this.bindElementToMask("toMoney")},h.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},h.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},h.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},h.prototype.unMask=function(){this.unbindElementToMask()};var i=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new h(b)};return i.toMoney=function(a,b){if(b=f(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var c="("+b.separator+"[0]{0,"+b.precision+"})",d=new RegExp(c,"g"),e=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(d,""),g>e&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),i=new RegExp("^(0|\\"+b.delimiter+")"),j=new RegExp("(\\"+b.separator+")$"),k=h.substr(0,h.length-b.moneyPrecision),l=k.substr(0,k.length%3),m=new Array(b.precision+1).join("0");k=k.substr(k.length%3,k.length);for(var n=0,o=k.length;o>n;n++)n%3===0&&(l+=b.delimiter),l+=k[n];if(l=l.replace(i,""),l=l.length?l:"0",!b.zeroCents){var p=h.length-b.precision,q=h.substr(p,b.precision),r=q.length,s=b.precision>r?b.precision:r;m=(m+q).slice(-s)}var t=b.unit+l+b.separator+m+b.suffixUnit;return t.replace(j,"")},i.toPattern=function(d,e){var f,h="object"==typeof e?e.pattern:e,i=h.replace(/\W/g,""),j=h.split(""),k=d.toString().replace(/\W/g,""),l=k.replace(/\W/g,""),m=0,n=j.length,o="object"==typeof e?e.placeholder:void 0;for(f=0;n>f;f++){if(m>=k.length){if(i.length==l.length)return j.join("");if(void 0!==o&&i.length>l.length)return g(j,f,o).join("");break}if(j[f]===a&&k[m].match(/[0-9]/)||j[f]===b&&k[m].match(/[a-zA-Z]/)||j[f]===c&&k[m].match(/[0-9a-zA-Z]/))j[f]=k[m++];else if(j[f]===a||j[f]===b||j[f]===c)return void 0!==o?g(j,f,o).join(""):j.slice(0,f).join("")}return j.join("").substr(0,f)},i.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},i.toAlphaNumeric=function(a){return a.toString().replace(/[^a-z0-9 ]+/i,"")},i});


