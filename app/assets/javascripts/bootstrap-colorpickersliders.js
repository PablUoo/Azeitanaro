/*
 *  Bootstrap Color Picker Sliders - v3.1.1
 *
 *  Bootstrap 3 optimized responsive color selector with HSV, HSL, RGB and CIE-Lch (which supports human perceived lightness) selectors and color swatches.
 *  http://www.virtuosoft.eu/code/bootstrap-colorpickersliders/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 *
 *  Requirements:  *
 *      TinyColor: https://github.com/bgrins/TinyColor/
 *
 *  Using color math algorithms from EasyRGB Web site:/
 *      http://www.easyrgb.com/index.php?X=MATH */

 // TinyColor v1.4.1
 // https://github.com/bgrins/TinyColor
 // 2016-07-07, Brian Grinstead, MIT License
 !function(a){function b(a,d){if(a=a?a:"",d=d||{},a instanceof b)return a;if(!(this instanceof b))return new b(a,d);var e=c(a);this._originalInput=a,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=P(100*this._a)/100,this._format=d.format||e.format,this._gradientType=d.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=e.ok,this._tc_id=O++}function c(a){var b={r:0,g:0,b:0},c=1,e=null,g=null,i=null,j=!1,k=!1;return"string"==typeof a&&(a=K(a)),"object"==typeof a&&(J(a.r)&&J(a.g)&&J(a.b)?(b=d(a.r,a.g,a.b),j=!0,k="%"===String(a.r).substr(-1)?"prgb":"rgb"):J(a.h)&&J(a.s)&&J(a.v)?(e=G(a.s),g=G(a.v),b=h(a.h,e,g),j=!0,k="hsv"):J(a.h)&&J(a.s)&&J(a.l)&&(e=G(a.s),i=G(a.l),b=f(a.h,e,i),j=!0,k="hsl"),a.hasOwnProperty("a")&&(c=a.a)),c=z(c),{ok:j,format:a.format||k,r:Q(255,R(b.r,0)),g:Q(255,R(b.g,0)),b:Q(255,R(b.b,0)),a:c}}function d(a,b,c){return{r:255*A(a,255),g:255*A(b,255),b:255*A(c,255)}}function e(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+6*(b-a)*(2/3-c):a}var e,f,g;if(a=A(a,360),b=A(b,100),c=A(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(b,c,d){b=6*A(b,360),c=A(c,100),d=A(d,100);var e=a.floor(b),f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6,k=[d,h,g,g,i,d][j],l=[i,d,d,h,g,g][j],m=[g,g,i,d,d,h][j];return{r:255*k,g:255*l,b:255*m}}function i(a,b,c,d){var e=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function j(a,b,c,d,e){var f=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16)),F(H(d))];return e&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function k(a,b,c,d){var e=[F(H(d)),F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return e.join("")}function l(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=B(d.s),b(d)}function m(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=B(d.s),b(d)}function n(a){return b(a).desaturate(100)}function o(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=B(d.l),b(d)}function p(a,c){c=0===c?0:c||10;var d=b(a).toRgb();return d.r=R(0,Q(255,d.r-P(255*-(c/100)))),d.g=R(0,Q(255,d.g-P(255*-(c/100)))),d.b=R(0,Q(255,d.b-P(255*-(c/100)))),b(d)}function q(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=B(d.l),b(d)}function r(a,c){var d=b(a).toHsl(),e=(d.h+c)%360;return d.h=0>e?360+e:e,b(d)}function s(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)}function t(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]}function u(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]}function v(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]}function w(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g}function x(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h}function y(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function z(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function A(b,c){D(b)&&(b="100%");var d=E(b);return b=Q(c,R(0,parseFloat(b))),d&&(b=parseInt(b*c,10)/100),a.abs(b-c)<1e-6?1:b%c/parseFloat(c)}function B(a){return Q(1,R(0,a))}function C(a){return parseInt(a,16)}function D(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function E(a){return"string"==typeof a&&-1!=a.indexOf("%")}function F(a){return 1==a.length?"0"+a:""+a}function G(a){return 1>=a&&(a=100*a+"%"),a}function H(b){return a.round(255*parseFloat(b)).toString(16)}function I(a){return C(a)/255}function J(a){return!!V.CSS_UNIT.exec(a)}function K(a){a=a.replace(M,"").replace(N,"").toLowerCase();var b=!1;if(T[a])a=T[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=V.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=V.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=V.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=V.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=V.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=V.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=V.hex8.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),a:I(c[4]),format:b?"name":"hex8"}:(c=V.hex6.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),format:b?"name":"hex"}:(c=V.hex4.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),a:I(c[4]+""+c[4]),format:b?"name":"hex8"}:(c=V.hex3.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),format:b?"name":"hex"}:!1}function L(a){var b,c;return a=a||{level:"AA",size:"small"},b=(a.level||"AA").toUpperCase(),c=(a.size||"small").toLowerCase(),"AA"!==b&&"AAA"!==b&&(b="AA"),"small"!==c&&"large"!==c&&(c="small"),{level:b,size:c}}var M=/^\s+/,N=/\s+$/,O=0,P=a.round,Q=a.min,R=a.max,S=a.random;b.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var b,c,d,e,f,g,h=this.toRgb();return b=h.r/255,c=h.g/255,d=h.b/255,e=.03928>=b?b/12.92:a.pow((b+.055)/1.055,2.4),f=.03928>=c?c/12.92:a.pow((c+.055)/1.055,2.4),g=.03928>=d?d/12.92:a.pow((d+.055)/1.055,2.4),.2126*e+.7152*f+.0722*g},setAlpha:function(a){return this._a=z(a),this._roundA=P(100*this._a)/100,this},toHsv:function(){var a=g(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=g(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=e(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return i(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return j(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*A(this._r,255))+"%",g:P(100*A(this._g,255))+"%",b:P(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%)":"rgba("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:U[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var c="#"+k(this._r,this._g,this._b,this._a),d=c,e=this._gradientType?"GradientType = 1, ":"";if(a){var f=b(a);d="#"+k(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+c+",endColorstr="+d+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0,e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"hex4"===a||"hex8"===a||"name"===a);return e?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},clone:function(){return b(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(q,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(n,arguments)},spin:function(){return this._applyModification(r,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(s,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(t,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}},b.fromRatio=function(a,c){if("object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]="a"===e?a[e]:G(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&&c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:S(),g:S(),b:S()})},b.mix=function(a,c,d){d=0===d?0:d||50;var e=b(a).toRgb(),f=b(c).toRgb(),g=d/100,h={r:(f.r-e.r)*g+e.r,g:(f.g-e.g)*g+e.g,b:(f.b-e.b)*g+e.b,a:(f.a-e.a)*g+e.a};return b(h)},b.readability=function(c,d){var e=b(c),f=b(d);return(a.max(e.getLuminance(),f.getLuminance())+.05)/(a.min(e.getLuminance(),f.getLuminance())+.05)},b.isReadable=function(a,c,d){var e,f,g=b.readability(a,c);switch(f=!1,e=L(d),e.level+e.size){case"AAsmall":case"AAAlarge":f=g>=4.5;break;case"AAlarge":f=g>=3;break;case"AAAsmall":f=g>=7}return f},b.mostReadable=function(a,c,d){var e,f,g,h,i=null,j=0;d=d||{},f=d.includeFallbackColors,g=d.level,h=d.size;for(var k=0;k<c.length;k++)e=b.readability(a,c[k]),e>j&&(j=e,i=b(c[k]));return b.isReadable(a,i,{level:g,size:h})||!f?i:(d.includeFallbackColors=!1,b.mostReadable(a,["#fff","#000"],d))};var T=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},U=b.hexNames=y(T),V=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{CSS_UNIT:new RegExp(c),rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):window.tinycolor=b}(Math);

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = function(root, jQuery) {
      if (jQuery === undefined) {
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    factory(jQuery);
  }
}(function($) {
  'use strict';

  $.fn.ColorPickerSliders = function(options) {

    return this.each(function() {

      var alreadyinitialized = false,
          settings,
          triggerelement = $(this),
          triggerelementisinput = triggerelement.is('input'),
          container,
          popover_container,
          elements,
          connectedinput = false,
          swatches,
          groupingname = '',
          rendermode = false,
          visible = false,
          MAXLIGHT = 101, // 101 needed for bright colors (maybe due to rounding errors)
          dragTarget = false,
          lastUpdateTime = 0,
          _moveThrottleTimer = null,
          _throttleDelay = 70,
          _inMoveHandler = false,
          _lastMoveHandlerRun = 0,
          color = {
            tiny: null,
            hsla: null,
            rgba: null,
            hsv: null,
            cielch: null
          },
          MAXVALIDCHROMA = 144;   // maximum valid chroma value found convertible to rgb (blue)

      init();

      function _initSettings() {
        if (typeof options === 'undefined') {
          options = {};
        }

        settings = $.extend({
          color: 'hsl(342, 50%, 70%)',
          size: 'default', // sm | default | lg
          placement: 'auto',
          trigger: 'focus', // focus | manual
          preventtouchkeyboardonshow: true, // makes the input readonly and needs a second click to be editable
          title: '',
          hsvpanel: false,
          sliders: true,
          grouping: true,
          swatches: ['FFFFFF', 'C0C0C0', '808080', '000000', 'FF0000', '800000', 'FFFF00', '808000', '00FF00', '008000', '00FFFF', '008080', '0000FF', '000080', 'FF00FF', '800080'], // array or false to disable swatches
          customswatches: 'colorpickkersliders', // false or a grop name
          connectedinput: false, // can be a jquery object or a selector
          flat: false,
          updateinterval: 30, // update interval of the sliders while in drag (ms)
          previewontriggerelement: true,
          previewcontrasttreshold: 15,
          previewformat: 'rgb', // rgb | hsl | hex | hsl-rgb
          erroneousciecolormarkers: true,
          invalidcolorsopacity: 1, // everything below 1 causes slightly slower responses
          finercierangeedges: true, // can be disabled for faster responses
          rendervalues: false,
          slidersplusminus: false,
          titleswatchesadd: 'Add color to swatches',
          titleswatchesremove: 'Remove color from swatches',
          titleswatchesreset: 'Reset to default swatches',
          order: {},
          labels: {},
          onchange: function() {
          }
        }, options);

        if (options.hasOwnProperty('order')) {
          settings.order = $.extend({
            opacity: false,
            hsl: false,
            lightness: false,
            rgb: false,
            cie: false,
            preview: false
          }, options.order);
        }
        else {
          settings.order = {
            opacity: 0,
            hsl: 1,
            rgb: 2,
            cie: 3, // cie sliders can increase response time of all sliders!
            preview: 4
          };
        }

        if (!options.hasOwnProperty('labels')) {
          options.labels = {};
        }

        settings.labels = $.extend({
          hslhue: 'HSL-Hue',
          hslsaturation: 'HSL-Saturation',
          hsllightness: 'HSL-Lightness',
          rgbred: 'RGB-Red',
          rgbgreen: 'RGB-Green',
          rgbblue: 'RGB-Blue',
          cielightness: 'CIE-Lightness',
          ciechroma: 'CIE-Chroma',
          ciehue: 'CIE-Hue',
          opacity: 'Opacity',
          preview: 'Preview'
        }, options.labels);
      }

      function init() {
        if (alreadyinitialized) {
          return;
        }

        alreadyinitialized = true;

        rendermode = $.fn.ColorPickerSliders.detectWhichGradientIsSupported();

        if (rendermode === 'filter') {
          rendermode = false;
        }

        if (!rendermode && $.fn.ColorPickerSliders.svgSupported()) {
          rendermode = 'svg';
        }

        _initSettings();

        // force preview when browser doesn't support css gradients
        if ((!settings.order.hasOwnProperty('preview') || settings.order.preview === false) && !rendermode) {
          settings.order.preview = 10;
        }

        _initConnectedElements();
        _initColor();
        _initConnectedinput();
        _updateTriggerelementColor();
        _updateConnectedInput();

        if (settings.flat) {
          showFlat();
        }

        _bindEvents();
      }

      function _buildComponent() {
        _initElements();
        _renderSwatches();
        _updateAllElements();
        _bindControllerEvents();
      }

      function _initColor() {
        if (triggerelementisinput) {
          color.tiny = tinycolor(triggerelement.val());

          if (!color.tiny.isValid()) {
            color.tiny = tinycolor(settings.color);
          }
        }
        else {
          color.tiny = tinycolor(settings.color);
        }

        color.hsla = color.tiny.toHsl();
        color.rgba = color.tiny.toRgb();
        color.hsv = color.tiny.toHsv();
        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);
      }

      function _initConnectedinput() {
        if (settings.connectedinput) {
          if (settings.connectedinput instanceof jQuery) {
            connectedinput = settings.connectedinput;
          }
          else {
            connectedinput = $(settings.connectedinput);
          }
        }
      }

      function updateColor(newcolor, disableinputupdate) {
        var updatedcolor = tinycolor(newcolor);

        if (updatedcolor.isValid()) {
          color.tiny = updatedcolor;
          color.hsla = updatedcolor.toHsl();
          color.rgba = updatedcolor.toRgb();
          color.hsv = updatedcolor.toHsv();
          color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

          if (settings.flat || visible) {
            container.removeClass('cp-unconvertible-cie-color');
            _updateAllElements(disableinputupdate);
          }
          else {
            if (!disableinputupdate) {
              _updateConnectedInput();
            }
            _updateTriggerelementColor();
          }

          return true;
        }
        else {
          return false;
        }
      }

      function show(disableLastlyUsedGroupUpdate) {
        if (settings.flat) {
          return;
        }

        if (visible) {
          // repositions the popover
          triggerelement.popover('hide');
          triggerelement.popover('show');
          _bindControllerEvents();
          return;
        }

        showPopover(disableLastlyUsedGroupUpdate);

        visible = true;
      }

      function hide() {
        visible = false;
        hidePopover();
      }

      function showPopover(disableLastlyUsedGroupUpdate) {
        if (popover_container instanceof jQuery) {
          return;
        }

        if (typeof disableLastlyUsedGroupUpdate === 'undefined') {
          disableLastlyUsedGroupUpdate = false;
        }

        popover_container = $('<div class="cp-popover-container"></div>').appendTo('body');

        container = $('<div class="cp-container"></div>').appendTo(popover_container);
        container.html(_getControllerHtml());

        switch (settings.size) {
          case 'sm':
            container.addClass('cp-container-sm');
            break;
          case 'lg':
            container.addClass('cp-container-lg');
            break;
        }

        _buildComponent();

        if (!disableLastlyUsedGroupUpdate) {
          activateLastlyUsedGroup();
        }

        triggerelement.popover({
          html: true,
          animation: false,
          trigger: 'manual',
          title: settings.title,
          placement: settings.placement,
          container: popover_container,
          content: function() {
            return container;
          }
        });

        triggerelement.popover('show');

        if (settings.slidersplusminus) {
          var button_width, popover;
          button_width = parseInt( $('.cp-container .cp-sliderbutton').css('width'), 10);
          popover = $('.cp-popover-container .popover-content');
          popover.css('padding-left', (parseInt(popover.css('padding-left'), 10) + button_width - 6) + 'px');
          popover.css('padding-right', (parseInt(popover.css('padding-right'), 10) + button_width - 6) + 'px');
        }
      }

      function hidePopover() {
        popover_container.remove();
        popover_container = null;

        triggerelement.popover('destroy');
      }

      function _getControllerHtml() {
        var sliders = [],
            color_picker_html = '';

        if (settings.sliders) {

          if (settings.order.opacity !== false) {
            sliders[settings.order.opacity] = '';

            if (settings.slidersplusminus) {
              sliders[settings.order.opacity] +=
                '<div class="cp-opacity cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-opacity cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.opacity] +=
              '<div class="cp-slider cp-opacity cp-transparency">' +
                '<span>' + settings.labels.opacity + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';
          }

          if (settings.order.hsl !== false) {
            sliders[settings.order.hsl] = '';

            if (settings.slidersplusminus) {
              sliders[settings.order.hsl] +=
                '<div class="cp-hslhue cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-hslhue cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.hsl] +=
              '<div class="cp-slider cp-hslhue cp-transparency">' +
                '<span>' + settings.labels.hslhue + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.hsl] +=
                '<div class="cp-hslsaturation cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-hslsaturation cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.hsl] +=
              '<div class="cp-slider cp-hslsaturation cp-transparency">' +
                '<span>' + settings.labels.hslsaturation + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.hsl] +=
                '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.hsl] +=
              '<div class="cp-slider cp-hsllightness cp-transparency">' +
                '<span>' + settings.labels.hsllightness + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';
          }

          if (settings.order.lightness !== false) {
            sliders[settings.order.lightness] = '';

            if (settings.slidersplusminus) {
              sliders[settings.order.lightness] +=
                '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.lightness] +=
              '<div class="cp-slider cp-hsllightness cp-transparency">' +
                '<span>' + settings.labels.hsllightness + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';
          }

          if (settings.order.rgb !== false) {
            sliders[settings.order.rgb] = '';

            if (settings.slidersplusminus) {
              sliders[settings.order.rgb] +=
                '<div class="cp-rgbred  cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-rgbred cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.rgb] +=
              '<div class="cp-slider cp-rgbred cp-transparency">' +
                '<span>' + settings.labels.rgbred + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.rgb] +=
                '<div class="cp-rgbgreen cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-rgbgreen cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.rgb] +=
              '<div class="cp-slider cp-rgbgreen cp-transparency">' +
                '<span>' + settings.labels.rgbgreen + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.rgb] +=
                '<div class="cp-rgbblue cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-rgbblue cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.rgb] +=
              '<div class="cp-slider cp-rgbblue cp-transparency">' +
                '<span>' + settings.labels.rgbblue + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';
          }

          if (settings.order.cie !== false) {
            sliders[settings.order.cie] = '';

            if (settings.slidersplusminus) {
              sliders[settings.order.cie] +=
                '<div class="cp-cielightness cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-cielightness cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.cie] +=
              '<div class="cp-slider cp-cielightness cp-transparency">' +
                '<span>' + settings.labels.cielightness + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.cie] +=
                '<div class="cp-ciechroma cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-ciechroma cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.cie] +=
              '<div class="cp-slider cp-ciechroma cp-transparency">' +
                '<span>' + settings.labels.ciechroma + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';

            if (settings.slidersplusminus) {
              sliders[settings.order.cie] +=
                '<div class="cp-ciehue cp-sliderbutton cp-sliderbutton-minus">-</div>' +
                '<div class="cp-ciehue cp-sliderbutton cp-sliderbutton-plus">+</div>';
            }
            sliders[settings.order.cie] +=
              '<div class="cp-slider cp-ciehue cp-transparency">' +
                '<span>' + settings.labels.ciehue + '</span>' +
                '<div class="cp-marker"></div>' +
              '</div>';
          }

          if (settings.order.preview !== false) {
            sliders[settings.order.preview] =
              '<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>';
          }

        }

        if (settings.grouping) {
          if (settings.hsvpanel + (settings.sliders && sliders.length > 0) + !!settings.swatches > 1) {
            color_picker_html += '<ul class="cp-pills">';
          }
          else {
            color_picker_html += '<ul class="cp-pills hidden">';
          }

          if (settings.hsvpanel) {
            color_picker_html += '<li><a href="#" class="cp-pill-hsvpanel">HSV panel</a></li>';
          }
          if (settings.sliders && sliders.length > 0) {
            color_picker_html += '<li><a href="#" class="cp-pill-sliders">Sliders</a></li>';
          }
          if (settings.swatches) {
            color_picker_html += '<li><a href="#" class="cp-pill-swatches">Swatches</a></li>';
          }

          color_picker_html += '</ul>';
        }

        if (settings.hsvpanel) {
          color_picker_html += '<div class="cp-hsvpanel">' +
              '<div class="cp-hsvpanel-sv"><span></span><div class="cp-marker-point"></div></div>' +
              '<div class="cp-hsvpanel-h"><span></span><div class="cp-hsvmarker-vertical"></div></div>' +
              '<div class="cp-hsvpanel-a cp-transparency"><span></span><div class="cp-hsvmarker-vertical"></div></div>' +
              '</div>';
        }

        if (settings.sliders) {
          color_picker_html += '<div class="cp-sliders">';

          for (var i = 0; i < sliders.length; i++) {
            if (typeof sliders[i] === 'undefined') {
              continue;
            }

            color_picker_html += sliders[i];
          }

          color_picker_html += '</div>';

        }

        if (settings.swatches) {
          color_picker_html += '<div class="cp-swatches clearfix"><button type="button" class="add btn btn-default" title="' + settings.titleswatchesadd + '"><span class="glyphicon glyphicon-floppy-save"></span></button><button type="button" class="remove btn btn-default" title="' + settings.titleswatchesremove + '"><span class="glyphicon glyphicon-trash"></span></button><button type="button" class="reset btn btn-default" title="' + settings.titleswatchesreset + '"><span class="glyphicon glyphicon-repeat"></span></button><ul></ul></div>';
        }

        return color_picker_html;
      }

      function _initElements() {
        elements = {
          actualswatch: false,
          swatchescontainer: $('.cp-swatches', container),
          swatches: $('.cp-swatches ul', container),
          swatches_add: $('.cp-swatches button.add', container),
          swatches_remove: $('.cp-swatches button.remove', container),
          swatches_reset: $('.cp-swatches button.reset', container),
          all_sliders: $('.cp-sliders, .cp-preview input', container),
          hsvpanel: {
            sv: $('.cp-hsvpanel-sv', container),
            sv_marker: $('.cp-hsvpanel-sv .cp-marker-point', container),
            h: $('.cp-hsvpanel-h', container),
            h_marker: $('.cp-hsvpanel-h .cp-hsvmarker-vertical', container),
            a: $('.cp-hsvpanel-a span', container),
            a_marker: $('.cp-hsvpanel-a .cp-hsvmarker-vertical', container)
          },
          sliders: {
            hue: $('.cp-hslhue span', container),
            hue_marker: $('.cp-hslhue .cp-marker', container),
            saturation: $('.cp-hslsaturation span', container),
            saturation_marker: $('.cp-hslsaturation .cp-marker', container),
            lightness: $('.cp-hsllightness span', container),
            lightness_marker: $('.cp-hsllightness .cp-marker', container),
            opacity: $('.cp-opacity span', container),
            opacity_marker: $('.cp-opacity .cp-marker', container),
            red: $('.cp-rgbred span', container),
            red_marker: $('.cp-rgbred .cp-marker', container),
            green: $('.cp-rgbgreen span', container),
            green_marker: $('.cp-rgbgreen .cp-marker', container),
            blue: $('.cp-rgbblue span', container),
            blue_marker: $('.cp-rgbblue .cp-marker', container),
            cielightness: $('.cp-cielightness span', container),
            cielightness_marker: $('.cp-cielightness .cp-marker', container),
            ciechroma: $('.cp-ciechroma span', container),
            ciechroma_marker: $('.cp-ciechroma .cp-marker', container),
            ciehue: $('.cp-ciehue span', container),
            ciehue_marker: $('.cp-ciehue .cp-marker', container),
            preview: $('.cp-preview input', container),
            slider_button: $('.cp-sliderbutton', container)
            },
          all_pills: $('.cp-pills', container),
          pills: {
            hsvpanel: $('.cp-pill-hsvpanel', container),
            sliders: $('.cp-pill-sliders', container),
            swatches: $('.cp-pill-swatches', container)
          }
        };

        if (!settings.customswatches) {
          elements.swatches_add.hide();
          elements.swatches_remove.hide();
          elements.swatches_reset.hide();
        }
      }

      function showFlat() {
        if (settings.flat) {
          if (triggerelementisinput) {
            container = $('<div class="cp-container"></div>').insertAfter(triggerelement);
          }
          else {
            container = $('<div class="cp-container"></div>');
            triggerelement.append(container);
          }

          container.append(_getControllerHtml());

          _buildComponent();

          activateLastlyUsedGroup();
        }
      }

      function _initConnectedElements() {
        if (settings.connectedinput instanceof jQuery) {
          settings.connectedinput.add(triggerelement);
        }
        else if (settings.connectedinput === false) {
          settings.connectedinput = triggerelement;
        }
        else {
          settings.connectedinput = $(settings.connectedinput).add(triggerelement);
        }
      }

      function _bindEvents() {
        triggerelement.on('colorpickersliders.updateColor', function(e, newcolor) {
          updateColor(newcolor);
        });

        triggerelement.on('colorpickersliders.show', function() {
          show();
        });

        triggerelement.on('colorpickersliders.hide', function() {
          hide();
        });

        if (!settings.flat && settings.trigger === 'focus') {
          // we need tabindex defined to be focusable
          if (typeof triggerelement.attr('tabindex') === 'undefined') {
            triggerelement.attr('tabindex', -1);
          }

          if (settings.preventtouchkeyboardonshow) {
            $(triggerelement).prop('readonly', true).addClass('cp-preventtouchkeyboardonshow');

            $(triggerelement).on('click', function(ev) {
              if (visible) {
                $(triggerelement).prop('readonly', false);
                ev.stopPropagation();
              }
            });
          }

          // buttons doesn't get focus in webkit browsers
          // https://bugs.webkit.org/show_bug.cgi?id=22261
          // and only input and button are focusable on iPad
          // so it is safer to register click on any other than inputs
          if (!triggerelementisinput) {
            $(triggerelement).on('click', function(ev) {
              show();

              ev.stopPropagation();
            });
          }

          $(triggerelement).on('focus', function(ev) {
            show();

            ev.stopPropagation();
          });

          $(triggerelement).on('blur', function(ev) {
            hide();

            if (settings.preventtouchkeyboardonshow) {
              $(triggerelement).prop('readonly', true);
            }

            ev.stopPropagation();
          });
        }

        if (connectedinput) {
          connectedinput.on('keyup change', function() {
            var $input = $(this);

            updateColor($input.val(), true);
          });
        }

      }

      function _bindControllerEvents() {
        container.on('contextmenu', function(ev) {
          ev.preventDefault();
          return false;
        });

        $(document).on('colorpickersliders.changeswatches', function() {
          _renderSwatches();
        });

        elements.swatches.on('touchstart mousedown click', 'li span', function(ev) {
          var color = $(this).css('background-color');
          updateColor(color);
          //_updateAllElements();
          ev.preventDefault();
        });

        elements.swatches_add.on('touchstart mousedown click', function(ev) {
          _addCurrentColorToSwatches();
          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.swatches_remove.on('touchstart mousedown click', function(ev) {
          _removeActualColorFromSwatches();
          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.swatches_reset.on('touchstart touchend mousedown click', function(ev) {
          // prevent multiple fire on android...
          if (ev.type === 'click' || ev.type === 'touchend') {
            _resetSwatches();
          }
          ev.preventDefault();
          ev.stopImmediatePropagation();
        });

        elements.sliders.slider_button.on('click', function(ev) {
          ev.preventDefault();
          if (ev.which > 1) {
            return;
          }

          function min_max (value, min, max) {
            if (value < min) {
              value = min;
            }
            if (value > max) {
              value = max;
            }
            return value;
          }

          var increment;
          if ($(ev.target).hasClass('cp-sliderbutton-plus')) {
            increment = 1;
          }
          else if ($(ev.target).hasClass('cp-sliderbutton-minus')) {
            increment = -1;
          }
          else {
            increment = 0;
          }

          if ($(ev.target).hasClass('cp-opacity')) {
            _updateColorsProperty('hsla', 'a', min_max((color.hsla.a + increment/100), 0, 1) );
          }
          if ($(ev.target).hasClass('cp-hslhue')) {
            _updateColorsProperty('hsla', 'h', min_max((color.hsla.h + increment), 0, 360) );
          }
          if ($(ev.target).hasClass('cp-hslsaturation')) {
            _updateColorsProperty('hsla', 's', min_max((color.hsla.s + increment/100), 0, 1) );
          }
          if ($(ev.target).hasClass('cp-hsllightness')) {
            _updateColorsProperty('hsla', 'l', min_max((color.hsla.l + increment/100), 0, 1) );
          }
          if ($(ev.target).hasClass('cp-rgbred')) {
            _updateColorsProperty('rgba', 'r', min_max((color.rgba.r + increment), 0, 255) );
          }
          if ($(ev.target).hasClass('cp-rgbgreen')) {
            _updateColorsProperty('rgba', 'g', min_max((color.rgba.g + increment), 0, 255) );
          }
          if ($(ev.target).hasClass('cp-rgbblue')) {
            _updateColorsProperty('rgba', 'b', min_max((color.rgba.b + increment), 0, 255) );
          }
          if ($(ev.target).hasClass('cp-cielightness')) {
            _updateColorsProperty('cielch', 'l', min_max((color.cielch.l + increment), 0, MAXLIGHT) );
          }
          if ($(ev.target).hasClass('cp-ciechroma')) {
            _updateColorsProperty('cielch', 'c', min_max((color.cielch.c + increment), 0, MAXVALIDCHROMA) );
          }
          if ($(ev.target).hasClass('cp-ciehue')) {
            _updateColorsProperty('cielch', 'h', min_max((color.cielch.h + increment), 0, 360) );
          }

          _updateAllElements();
        });

        elements.sliders.hue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'h', 3.6 * percent);

          _updateAllElements();
        });

        elements.sliders.saturation.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'saturation';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 's', percent / 100);

          _updateAllElements();
        });

        elements.sliders.lightness.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'lightness';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'l', percent / 100);

          _updateAllElements();
        });

        elements.sliders.opacity.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'opacity';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'a', percent / 100);

          _updateAllElements();
        });

        elements.sliders.red.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'red';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'r', 2.55 * percent);

          _updateAllElements();
        });

        elements.sliders.green.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'green';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'g', 2.55 * percent);

          _updateAllElements();
        });

        elements.sliders.blue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'blue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'b', 2.55 * percent);

          _updateAllElements();
        });

        elements.hsvpanel.sv.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsvsv';

          var percent = _updateHsvpanelMarkerPosition('sv', ev);

          _updateColorsProperty('hsv', 's', percent.horizontal / 100);
          _updateColorsProperty('hsv', 'v', (100 - percent.vertical) / 100);

          _updateAllElements();
        });

        elements.hsvpanel.h.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsvh';

          var percent = _updateHsvpanelMarkerPosition('h', ev);

          _updateColorsProperty('hsv', 'h', 3.6 * percent.vertical);

          _updateAllElements();
        });

        elements.hsvpanel.a.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsva';

          var percent = _updateHsvpanelMarkerPosition('a', ev);

          _updateColorsProperty('hsv', 'a', (100 - percent.vertical) / 100);

          _updateAllElements();
        });

        elements.sliders.cielightness.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'cielightness';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);

          _updateAllElements();
        });

        elements.sliders.ciechroma.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'ciechroma';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);

          _updateAllElements();
        });

        elements.sliders.ciehue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'ciehue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'h', 3.6 * percent);

          _updateAllElements();
        });

        elements.sliders.preview.on('click', function() {
          this.select();
        });

        $(document).on('touchmove mousemove', function(ev) {
          if (!dragTarget) {
            return;
          }

          if (new Date().getTime() - _lastMoveHandlerRun > _throttleDelay && !_inMoveHandler) {
            moveHandler(dragTarget, ev);
          }
          else {
            setMoveHandlerTimer(dragTarget, ev);
          }
        });

        $(document).on('touchend mouseup', function(ev) {
          if (ev.which > 1) {
            return;
          }

          if (dragTarget) {
            dragTarget = false;
            ev.preventDefault();
          }
        });

        elements.pills.hsvpanel.on('click', function(ev) {
          ev.preventDefault();

          activateGroupHsvpanel();
        });

        elements.pills.sliders.on('click', function(ev) {
          ev.preventDefault();

          activateGroupSliders();
        });

        elements.pills.swatches.on('click', function(ev) {
          ev.preventDefault();

          activateGroupSwatches();
        });

        if (!settings.flat) {
          popover_container.on('touchstart mousedown', '.popover', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();

            return false;
          });
        }
      }

      function setConfig(name, value) {
        try {
          localStorage.setItem('cp-userdata-' + name, JSON.stringify(value));
        }
        catch (err) {
        }
      }

      function getConfig(name) {
        var r;

        try {
          r = JSON.parse(localStorage.getItem('cp-userdata-' + name));

          return r;
        }
        catch (err) {
          return null;
        }
      }

      function getUsedGroupName() {
        if (groupingname !== '') {
          return groupingname;
        }

        if (elements.pills.hsvpanel.length === 0) {
          groupingname += '_hsvpanel_';
        }
        if (elements.pills.sliders.length === 0) {
          groupingname += '_sliders_';
        }
        if (elements.pills.swatches.length === 0) {
          groupingname += '_swatches_';
        }

        return groupingname;
      }

      function getLastlyUsedGroup() {
        return getConfig('config_activepill' + getUsedGroupName());
      }

      function setLastlyUsedGroup(value) {
        return setConfig('config_activepill' + getUsedGroupName(), value);
      }

      function activateLastlyUsedGroup() {
        switch (getLastlyUsedGroup()) {
          case 'hsvpanel':
            activateGroupHsvpanel();
            break;
          case 'sliders':
            activateGroupSliders();
            break;
          case 'swatches':
            activateGroupSwatches();
            break;
          default:
            if (elements.pills.hsvpanel.length) {
              activateGroupHsvpanel();
              break;
            }
            else if (elements.pills.sliders.length) {
              activateGroupSliders();
              break;
            }
            else if (elements.pills.swatches.length) {
              activateGroupSwatches();
              break;
            }
        }
      }

      function activateGroupHsvpanel() {
        if (elements.pills.hsvpanel.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.hsvpanel.addClass('active');

        container.removeClass('sliders-active swatches-active').addClass('hsvpanel-active');

        setLastlyUsedGroup('hsvpanel');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function activateGroupSliders() {
        if (elements.pills.sliders.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.sliders.addClass('active');

        container.removeClass('hsvpanel-active swatches-active').addClass('sliders-active');

        setLastlyUsedGroup('sliders');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function activateGroupSwatches() {
        if (elements.pills.swatches.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.swatches.addClass('active');

        container.removeClass('hsvpanel-active sliders-active').addClass('swatches-active');

        setLastlyUsedGroup('swatches');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function setMoveHandlerTimer(dragTarget, ev) {
        clearTimeout(_moveThrottleTimer);
        _moveThrottleTimer = setTimeout(function() {
          moveHandler(dragTarget, ev);
        }, _throttleDelay);
      }

      function moveHandler(dragTarget, ev) {
        var percent;

        if (_inMoveHandler) {
          setMoveHandlerTimer(dragTarget, ev);
          return;
        }

        _inMoveHandler = true;
        _lastMoveHandlerRun = new Date().getTime();

        if (dragTarget === 'hsvsv') {
          percent = _updateHsvpanelMarkerPosition('sv', ev);
        }
        else if (dragTarget === 'hsvh') {
          percent = _updateHsvpanelMarkerPosition('h', ev);
        }
        else if (dragTarget === 'hsva') {
          percent = _updateHsvpanelMarkerPosition('a', ev);
        }
        else {
          percent = _updateMarkerPosition(dragTarget, ev);
        }

        switch (dragTarget) {
          case 'hsvsv':
            _updateColorsProperty('hsv', 's', percent.horizontal / 100);
            _updateColorsProperty('hsv', 'v', (100 - percent.vertical) / 100);
            break;
          case 'hsvh':
            _updateColorsProperty('hsv', 'h', 3.6 * percent.vertical);
            break;
          case 'hsva':
            _updateColorsProperty('hsv', 'a', (100 - percent.vertical) / 100);
            break;
          case 'hue':
            _updateColorsProperty('hsla', 'h', 3.6 * percent);
            break;
          case 'saturation':
            _updateColorsProperty('hsla', 's', percent / 100);
            break;
          case 'lightness':
            _updateColorsProperty('hsla', 'l', percent / 100);
            break;
          case 'opacity':
            _updateColorsProperty('hsla', 'a', percent / 100);
            break;
          case 'red':
            _updateColorsProperty('rgba', 'r', 2.55 * percent);
            break;
          case 'green':
            _updateColorsProperty('rgba', 'g', 2.55 * percent);
            break;
          case 'blue':
            _updateColorsProperty('rgba', 'b', 2.55 * percent);
            break;
          case 'cielightness':
            _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);
            break;
          case 'ciechroma':
            _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);
            break;
          case 'ciehue':
            _updateColorsProperty('cielch', 'h', 3.6 * percent);
            break;
        }

        _updateAllElements();

        ev.preventDefault();
        _inMoveHandler = false;
      }

      function _parseCustomSwatches() {
        swatches = [];

        for (var i = 0; i < settings.swatches.length; i++) {
          var color = tinycolor(settings.swatches[i]);

          if (color.isValid()) {
            swatches.push(color.toRgbString());
          }
        }
      }

      function _renderSwatches() {
        if (!settings.swatches) {
          return;
        }

        if (settings.customswatches) {
          var customswatches = false;

          try {
            customswatches = JSON.parse(localStorage.getItem('swatches-' + settings.customswatches));
          }
          catch (err) {
          }

          if (customswatches) {
            swatches = customswatches;
          }
          else {
            _parseCustomSwatches();
          }
        }
        else {
          _parseCustomSwatches();
        }

        if (swatches instanceof Array) {
          elements.swatches.html('');
          for (var i = 0; i < swatches.length; i++) {
            var color = tinycolor(swatches[i]);

            if (color.isValid()) {
              var span = $('<span></span>').css('background-color', color.toRgbString());
              var button = $('<div class="btn btn-default cp-swatch"></div>');

              button.append(span);

              elements.swatches.append($('<li></li>').append(button));
            }
          }
        }

        _findActualColorsSwatch();
      }

      function _findActualColorsSwatch() {
        var found = false;

        $('span', elements.swatches).filter(function() {
          var swatchcolor = $(this).css('background-color');

          swatchcolor = tinycolor(swatchcolor);
          swatchcolor.alpha = Math.round(swatchcolor.alpha * 100) / 100;

          if (swatchcolor.toRgbString() === color.tiny.toRgbString()) {
            found = true;

            var currentswatch = $(this).parent();

            if (!currentswatch.is(elements.actualswatch)) {
              if (elements.actualswatch) {
                elements.actualswatch.removeClass('actual');
              }
              elements.actualswatch = currentswatch;
              currentswatch.addClass('actual');
            }
          }
        });

        if (!found) {
          if (elements.actualswatch) {
            elements.actualswatch.removeClass('actual');
            elements.actualswatch = false;
          }
        }

        if (elements.actualswatch) {
          elements.swatches_add.prop('disabled', true);
          elements.swatches_remove.prop('disabled', false);
        }
        else {
          elements.swatches_add.prop('disabled', false);
          elements.swatches_remove.prop('disabled', true);
        }
      }

      function _storeSwatches() {
        localStorage.setItem('swatches-' + settings.customswatches, JSON.stringify(swatches));
      }

      function _addCurrentColorToSwatches() {
        swatches.unshift(color.tiny.toRgbString());
        _storeSwatches();

        $(document).trigger('colorpickersliders.changeswatches');
      }

      function _removeActualColorFromSwatches() {
        var index = swatches.indexOf(color.tiny.toRgbString());

        if (index !== -1) {
          swatches.splice(index, 1);

          _storeSwatches();
          $(document).trigger('colorpickersliders.changeswatches');
        }
      }

      function _resetSwatches() {
        if (confirm('Do you really want to reset the swatches? All customizations will be lost!')) {
          _parseCustomSwatches();

          _storeSwatches();

          $(document).trigger('colorpickersliders.changeswatches');
        }
      }

      function _updateColorsProperty(format, property, value) {
        switch (format) {
          case 'hsv':

            color.hsv[property] = value;
            color.tiny = tinycolor({h: color.hsv.h, s: color.hsv.s, v: color.hsv.v, a: color.hsv.a});
            color.rgba = color.tiny.toRgb();
            color.hsla = color.tiny.toHsl();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            break;

          case 'hsla':

            color.hsla[property] = value;
            color.tiny = tinycolor({h: color.hsla.h, s: color.hsla.s, l: color.hsla.l, a: color.hsla.a});
            color.rgba = color.tiny.toRgb();
            color.hsv = color.tiny.toHsv();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            container.removeClass('cp-unconvertible-cie-color');

            break;

          case 'rgba':

            color.rgba[property] = value;
            color.tiny = tinycolor({r: color.rgba.r, g: color.rgba.g, b: color.rgba.b, a: color.hsla.a});
            color.hsla = color.tiny.toHsl();
            color.hsv = color.tiny.toHsv();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            container.removeClass('cp-unconvertible-cie-color');

            break;

          case 'cielch':

            color.cielch[property] = value;
            color.rgba = $.fn.ColorPickerSliders.lch2rgb(color.cielch);
            color.tiny = tinycolor(color.rgba);
            color.hsla = color.tiny.toHsl();
            color.hsv = color.tiny.toHsv();

            if (settings.erroneousciecolormarkers) {
              if (color.rgba.isok) {
                container.removeClass('cp-unconvertible-cie-color');
              }
              else {
                container.addClass('cp-unconvertible-cie-color');
              }
            }

            break;
        }
      }

      function _updateMarkerPosition(slidername, ev) {
        var percent = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.sliders[slidername]);

        elements.sliders[slidername + '_marker'].data('position', percent);

        return percent;
      }

      function _updateHsvpanelMarkerPosition(marker, ev) {
        var percents = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.hsvpanel.sv, true);

        elements.hsvpanel[marker + '_marker'].data('position', percents);

        return percents;
      }

      var updateAllElementsTimeout;

      function _updateAllElementsTimer(disableinputupdate) {
        updateAllElementsTimeout = setTimeout(function() {
          _updateAllElements(disableinputupdate);
        }, settings.updateinterval);
      }

      function _updateAllElements(disableinputupdate) {
        clearTimeout(updateAllElementsTimeout);

        Date.now = Date.now || function() {
          return +new Date();
        };

        if (Date.now() - lastUpdateTime < settings.updateinterval) {
          _updateAllElementsTimer(disableinputupdate);
          return;
        }

        if (typeof disableinputupdate === 'undefined') {
          disableinputupdate = false;
        }

        lastUpdateTime = Date.now();

        if (settings.hsvpanel !== false && (!settings.grouping || getLastlyUsedGroup() === 'hsvpanel')) {
          _renderHsvsv();
          _renderHsvh();
          _renderHsva();
        }

        if (settings.sliders && (!settings.grouping || getLastlyUsedGroup() === 'sliders')) {
          if (settings.order.opacity !== false) {
            _renderOpacity();
          }

          if (settings.order.hsl !== false) {
            _renderHue();
            _renderSaturation();
            _renderLightness();
          }

          if (settings.order.lightness !== false) {
            _renderLightness();
          }

          if (settings.order.rgb !== false) {
            _renderRed();
            _renderGreen();
            _renderBlue();
          }

          if (settings.order.cie !== false) {
            _renderCieLightness();
            _renderCieChroma();
            _renderCieHue();
          }

          if (settings.order.preview !== false) {
            _renderPreview();
          }
        }

        if (!disableinputupdate) {
          _updateConnectedInput();
        }

        if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
          elements.all_sliders.css('color', '#000');
          if (triggerelementisinput && settings.previewontriggerelement) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
          }
        }
        else {
          elements.all_sliders.css('color', '#fff');
          if (triggerelementisinput && settings.previewontriggerelement) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
          }
        }

        if (settings.swatches && (!settings.grouping || getLastlyUsedGroup() === 'swatches')) {
          _findActualColorsSwatch();
        }

        settings.onchange(container, color);

        triggerelement.data('color', color);
      }

      function _updateTriggerelementColor() {
        if (triggerelementisinput && settings.previewontriggerelement) {
          if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
          }
          else {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
          }
        }
      }

      function _updateConnectedInput() {
        if (connectedinput) {
          connectedinput.each(function(index, element) {
            var $element = $(element),
                format = $element.data('color-format') || settings.previewformat;

            switch (format) {
              case 'hex':
                if (color.hsla.a < 1) {
                  $element.val(color.tiny.toRgbString());
                }
                else {
                  $element.val(color.tiny.toHexString());
                }
                break;
              case 'hsl':
                $element.val(color.tiny.toHslString());
                break;
              case 'rgb':
                /* falls through */
              default:
                $element.val(color.tiny.toRgbString());
                break;
            }
          });
        }
      }

      function _renderHsvsv() {
        elements.hsvpanel.sv.css('background', tinycolor('hsv(' + color.hsv.h + ',100%,100%)').toRgbString());

        elements.hsvpanel.sv_marker.css('left', color.hsv.s * 100 + '%').css('top', 100 - color.hsv.v * 100 + '%');
      }

      function _renderHsvh() {
        elements.hsvpanel.h_marker.css('top', color.hsv.h / 360 * 100 + '%');
      }

      function _renderHsva() {
        setGradient(elements.hsvpanel.a, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'a', 1, 0, 2), true);

        elements.hsvpanel.a_marker.css('top', 100 - color.hsv.a * 100 + '%');
      }

      function _renderHue() {
        setGradient(elements.sliders.hue, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'h', 0, 360, 7));
        if (settings.rendervalues) {
          elements.sliders.hue.html(settings.labels.hslhue + ': ' + (color.hsla.h).toFixed(0));
        }
        elements.sliders.hue_marker.css('left', color.hsla.h / 360 * 100 + '%');
      }

      function _renderSaturation() {
        setGradient(elements.sliders.saturation, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 's', 0, 1, 2));
        if (settings.rendervalues) {
          elements.sliders.saturation.html(settings.labels.hslsaturation + ': ' + (color.hsla.s * 100).toFixed(0) + '%');
        }
        elements.sliders.saturation_marker.css('left', color.hsla.s * 100 + '%');
      }

      function _renderLightness() {
        setGradient(elements.sliders.lightness, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'l', 0, 1, 3));
        if (settings.rendervalues) {
          elements.sliders.lightness.html(settings.labels.hsllightness + ': ' + (color.hsla.l * 100).toFixed(0) + '%');
        }
        elements.sliders.lightness_marker.css('left', color.hsla.l * 100 + '%');
      }

      function _renderOpacity() {
        setGradient(elements.sliders.opacity, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'a', 0, 1, 2));
        if (settings.rendervalues) {
          elements.sliders.opacity.html(settings.labels.opacity + ': ' + (color.hsla.a * 100).toFixed(0) + '%');
        }
        elements.sliders.opacity_marker.css('left', color.hsla.a * 100 + '%');
      }

      function _renderRed() {
        setGradient(elements.sliders.red, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'r', 0, 255, 2));
        if (settings.rendervalues) {
          elements.sliders.red.html(settings.labels.rgbred + ': ' + (color.rgba.r).toFixed(0));
        }
        elements.sliders.red_marker.css('left', color.rgba.r / 255 * 100 + '%');
      }

      function _renderGreen() {
        setGradient(elements.sliders.green, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'g', 0, 255, 2));
        if (settings.rendervalues) {
          elements.sliders.green.html(settings.labels.rgbgreen + ': ' + (color.rgba.g).toFixed(0));
        }
        elements.sliders.green_marker.css('left', color.rgba.g / 255 * 100 + '%');
      }

      function _renderBlue() {
        setGradient(elements.sliders.blue, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'b', 0, 255, 2));
        if (settings.rendervalues) {
          elements.sliders.blue.html(settings.labels.rgbblue + ': ' + (color.rgba.b).toFixed(0));
        }
        elements.sliders.blue_marker.css('left', color.rgba.b / 255 * 100 + '%');
      }

      function _extendCieGradientStops(gradientstops, property) {
        if (settings.invalidcolorsopacity === 1 || !settings.finercierangeedges) {
          return gradientstops;
        }

        gradientstops.sort(function(a, b) {
          return a.position - b.position;
        });

        var tmparray = [];

        for (var i = 1; i < gradientstops.length; i++) {
          if (gradientstops[i].isok !== gradientstops[i - 1].isok) {
            var steps = Math.round(gradientstops[i].position) - Math.round(gradientstops[i - 1].position),
                extendedgradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(gradientstops[i].rawcolor, property, gradientstops[i - 1].rawcolor[property], gradientstops[i].rawcolor[property], steps, settings.invalidcolorsopacity, gradientstops[i - 1].position, gradientstops[i].position);

            for (var j = 0; j < extendedgradientstops.length; j++) {
              if (extendedgradientstops[j].isok !== gradientstops[i - 1].isok) {
                tmparray.push(extendedgradientstops[j]);

                if (j > 0) {
                  tmparray.push(extendedgradientstops[j - 1]);
                }

                break;
              }
            }
          }
        }

        return $.merge(tmparray, gradientstops);
      }

      function _renderCieLightness() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'l', 0, 100, 10, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'l');

        setGradient(elements.sliders.cielightness, gradientstops);
        if (settings.rendervalues) {
          elements.sliders.cielightness.html(settings.labels.cielightness + ': ' + (color.cielch.l).toFixed(0));
        }
        elements.sliders.cielightness_marker.css('left', color.cielch.l / MAXLIGHT * 100 + '%');
      }

      function _renderCieChroma() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'c', 0, MAXVALIDCHROMA, 5, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'c');

        setGradient(elements.sliders.ciechroma, gradientstops);
        if (settings.rendervalues) {
          elements.sliders.ciechroma.html(settings.labels.ciechroma + ': ' + (color.cielch.c).toFixed(0));
        }
        elements.sliders.ciechroma_marker.css('left', color.cielch.c / MAXVALIDCHROMA * 100 + '%');
      }

      function _renderCieHue() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'h', 0, 360, 28, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'h');

        setGradient(elements.sliders.ciehue, gradientstops);
        if (settings.rendervalues) {
          elements.sliders.ciehue.html(settings.labels.ciehue + ': ' + (color.cielch.h).toFixed(0));
        }
        elements.sliders.ciehue_marker.css('left', color.cielch.h / 360 * 100 + '%');
      }

      function _renderPreview() {
        elements.sliders.preview.css('background', $.fn.ColorPickerSliders.csscolor(color.rgba));

        var colorstring;

        switch (settings.previewformat) {
          case 'hex':
            if (color.hsla.a < 1) {
              colorstring = color.tiny.toRgbString();
            }
            else {
              colorstring = color.tiny.toHexString();
            }
            break;
          case 'hsl-rgb':
            colorstring = color.tiny.toHslString() + ' ' + color.tiny.toRgbString();
            break;
          case 'hsl':
            colorstring = color.tiny.toHslString();
            break;
          case 'rgb':
            /* falls through */
          default:
            colorstring = color.tiny.toRgbString();
            break;
        }

        elements.sliders.preview.val(colorstring);
      }

      function setGradient(element, gradientstops, vertical) {
        if (typeof vertical === 'undefined') {
          vertical = false;
        }

        gradientstops.sort(function(a, b) {
          return a.position - b.position;
        });

        switch (rendermode) {
          case 'noprefix':
            $.fn.ColorPickerSliders.renderNoprefix(element, gradientstops, vertical);
            break;
          case 'webkit':
            $.fn.ColorPickerSliders.renderWebkit(element, gradientstops, vertical);
            break;
          case 'ms':
            $.fn.ColorPickerSliders.renderMs(element, gradientstops, vertical);
            break;
          case 'svg': // can not repeat, radial can be only a covering ellipse (maybe there is a workaround, need more investigation)
            $.fn.ColorPickerSliders.renderSVG(element, gradientstops, vertical);
            break;
          case 'oldwebkit':   // can not repeat, no percent size with radial gradient (and no ellipse)
            $.fn.ColorPickerSliders.renderOldwebkit(element, gradientstops, vertical);
            break;
        }
      }

    });

  };

  $.fn.ColorPickerSliders.getEventCoordinates = function(ev) {
    if (typeof ev.pageX !== 'undefined') {
      return {
        pageX: ev.originalEvent.pageX,
        pageY: ev.originalEvent.pageY
      };
    }
    else if (typeof ev.originalEvent.touches !== 'undefined') {
      return {
        pageX: ev.originalEvent.touches[0].pageX,
        pageY: ev.originalEvent.touches[0].pageY
      };
    }
  };

  $.fn.ColorPickerSliders.calculateEventPositionPercentage = function(ev, containerElement, both) {
    if (typeof (both) === 'undefined') {
      both = false;
    }

    var c = $.fn.ColorPickerSliders.getEventCoordinates(ev);

    var xsize = containerElement.width(),
        offsetX = c.pageX - containerElement.offset().left;

    var horizontal = offsetX / xsize * 100;

    if (horizontal < 0) {
      horizontal = 0;
    }

    if (horizontal > 100) {
      horizontal = 100;
    }

    if (both) {
      var ysize = containerElement.height(),
          offsetY = c.pageY - containerElement.offset().top;

      var vertical = offsetY / ysize * 100;

      if (vertical < 0) {
        vertical = 0;
      }

      if (vertical > 100) {
        vertical = 100;
      }

      return {
        horizontal: horizontal,
        vertical: vertical
      };
    }

    return horizontal;
  };

  $.fn.ColorPickerSliders.getScaledGradientStops = function(color, scalableproperty, minvalue, maxvalue, steps, invalidcolorsopacity, minposition, maxposition) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    if (typeof minposition === 'undefined') {
      minposition = 0;
    }

    if (typeof maxposition === 'undefined') {
      maxposition = 100;
    }

    var gradientStops = [],
        diff = maxvalue - minvalue,
        isok = true;

    for (var i = 0; i < steps; ++i) {
      var currentstage = i / (steps - 1),
          modifiedcolor = $.fn.ColorPickerSliders.modifyColor(color, scalableproperty, currentstage * diff + minvalue),
          csscolor;

      if (invalidcolorsopacity < 1) {
        var stagergb = $.fn.ColorPickerSliders.lch2rgb(modifiedcolor, invalidcolorsopacity);

        isok = stagergb.isok;
        csscolor = $.fn.ColorPickerSliders.csscolor(stagergb, invalidcolorsopacity);
      }
      else {
        csscolor = $.fn.ColorPickerSliders.csscolor(modifiedcolor, invalidcolorsopacity);
      }

      gradientStops[i] = {
        color: csscolor,
        position: currentstage * (maxposition - minposition) + minposition,
        isok: isok,
        rawcolor: modifiedcolor
      };
    }

    return gradientStops;
  };

  $.fn.ColorPickerSliders.getGradientStopsCSSString = function(gradientstops) {
    var gradientstring = '',
        oldwebkit = '',
        svgstoppoints = '';

    for (var i = 0; i < gradientstops.length; i++) {
      var el = gradientstops[i];

      gradientstring += ',' + el.color + ' ' + el.position + '%';
      oldwebkit += ',color-stop(' + el.position + '%,' + el.color + ')';

      var svgcolor = tinycolor(el.color);

      svgstoppoints += '<stop ' + 'stop-color="' + svgcolor.toHexString() + '" stop-opacity="' + svgcolor.toRgb().a + '"' + ' offset="' + el.position / 100 + '"/>';
    }

    return {
      noprefix: gradientstring,
      oldwebkit: oldwebkit,
      svg: svgstoppoints
    };
  };

  $.fn.ColorPickerSliders.renderNoprefix = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = 'linear-gradient(to right';
    }
    else {
      css = 'linear-gradient(to bottom';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderWebkit = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = '-webkit-linear-gradient(left';
    }
    else {
      css = '-webkit-linear-gradient(top';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderOldwebkit = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).oldwebkit;

    if (!vertical) {
      css = '-webkit-gradient(linear, 0% 0%, 100% 0%';
    }
    else {
      css = '-webkit-gradient(linear, 0% 0%, 0 100%';
    }
    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderMs = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = '-ms-linear-gradient(to right';
    }
    else {
      css = '-ms-linear-gradient(to bottom';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderSVG = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var svg = '',
        svgstoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).svg;

    if (!vertical) {
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">';
    }
    else {
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100%">';
    }

    svg += svgstoppoints;
    svg += '</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>';
    svg = 'url(data:image/svg+xml;base64,' + $.fn.ColorPickerSliders.base64encode(svg) + ')';

    element.css('background-image', svg);
  };

  /* source: http://phpjs.org/functions/base64_encode/ */
  $.fn.ColorPickerSliders.base64encode = function(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
      return data;
    }

    do {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
  };

  $.fn.ColorPickerSliders.isGoodRgb = function(rgb) {
    // the default acceptable values are out of 0..255 due to
    // rounding errors with yellow and blue colors (258, -1)
    var maxacceptable = 258;
    var minacceptable = -1;

    if (rgb.r > maxacceptable || rgb.g > maxacceptable || rgb.b > maxacceptable || rgb.r < minacceptable || rgb.g < minacceptable || rgb.b < minacceptable) {
      return false;
    }
    else {
      rgb.r = Math.min(255, rgb.r);
      rgb.g = Math.min(255, rgb.g);
      rgb.b = Math.min(255, rgb.b);
      rgb.r = Math.max(0, rgb.r);
      rgb.g = Math.max(0, rgb.g);
      rgb.b = Math.max(0, rgb.b);

      return true;
    }
  };

  $.fn.ColorPickerSliders.rgb2lch = function(rgb) {
    var lch = $.fn.ColorPickerSliders.CIELab2CIELCH($.fn.ColorPickerSliders.XYZ2CIELab($.fn.ColorPickerSliders.rgb2XYZ(rgb)));

    if (rgb.hasOwnProperty('a')) {
      lch.a = rgb.a;
    }

    return lch;
  };

  $.fn.ColorPickerSliders.lch2rgb = function(lch, invalidcolorsopacity) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    var rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(lch)));

    if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
      if (lch.hasOwnProperty('a')) {
        rgb.a = lch.a;
      }

      rgb.isok = true;

      return rgb;
    }

    var tmp = $.extend({}, lch),
        lastbadchroma = tmp.c,
        lastgoodchroma = -1,
        loops = 0;

    do {
      ++loops;

      tmp.c = lastgoodchroma + ((lastbadchroma - lastgoodchroma) / 2);

      rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(tmp)));

      if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
        lastgoodchroma = tmp.c;
      }
      else {
        lastbadchroma = tmp.c;
      }
    } while (Math.abs(lastbadchroma - lastgoodchroma) > 0.9 && loops < 100);

    if (lch.hasOwnProperty('a')) {
      rgb.a = lch.a;
    }

    rgb.r = Math.max(0, rgb.r);
    rgb.g = Math.max(0, rgb.g);
    rgb.b = Math.max(0, rgb.b);

    rgb.r = Math.min(255, rgb.r);
    rgb.g = Math.min(255, rgb.g);
    rgb.b = Math.min(255, rgb.b);

    if (invalidcolorsopacity < 1) {
      if (rgb.hasOwnProperty('a')) {
        rgb.a = rgb.a * invalidcolorsopacity;
      }
      else {
        rgb.a = invalidcolorsopacity;
      }
    }

    rgb.isok = false;

    return rgb;
  };

  $.fn.ColorPickerSliders.modifyColor = function(color, property, value) {
    var modifiedcolor = $.extend({}, color);

    if (!color.hasOwnProperty(property)) {
      throw('Missing color property: ' + property);
    }

    modifiedcolor[property] = value;

    return modifiedcolor;
  };

  $.fn.ColorPickerSliders.csscolor = function(color, invalidcolorsopacity) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    var $return = false,
        tmpcolor = $.extend({}, color);

    if (tmpcolor.hasOwnProperty('c')) {
      // CIE-LCh
      tmpcolor = $.fn.ColorPickerSliders.lch2rgb(tmpcolor, invalidcolorsopacity);
    }

    if (tmpcolor.hasOwnProperty('h')) {
      // HSL
      $return = 'hsla(' + tmpcolor.h + ',' + tmpcolor.s * 100 + '%,' + tmpcolor.l * 100 + '%,' + tmpcolor.a + ')';
    }

    if (tmpcolor.hasOwnProperty('r')) {
      // RGB
      if (tmpcolor.a < 1) {
        $return = 'rgba(' + Math.round(tmpcolor.r) + ',' + Math.round(tmpcolor.g) + ',' + Math.round(tmpcolor.b) + ',' + tmpcolor.a + ')';
      }
      else {
        $return = 'rgb(' + Math.round(tmpcolor.r) + ',' + Math.round(tmpcolor.g) + ',' + Math.round(tmpcolor.b) + ')';
      }
    }

    return $return;
  };

  $.fn.ColorPickerSliders.rgb2XYZ = function(rgb) {
    var XYZ = {};

    var r = (rgb.r / 255);
    var g = (rgb.g / 255);
    var b = (rgb.b / 255);

    if (r > 0.04045) {
      r = Math.pow(((r + 0.055) / 1.055), 2.4);
    }
    else {
      r = r / 12.92;
    }

    if (g > 0.04045) {
      g = Math.pow(((g + 0.055) / 1.055), 2.4);
    }
    else {
      g = g / 12.92;
    }

    if (b > 0.04045) {
      b = Math.pow(((b + 0.055) / 1.055), 2.4);
    }
    else {
      b = b / 12.92;
    }

    r = r * 100;
    g = g * 100;
    b = b * 100;

    // Observer = 2°, Illuminant = D65
    XYZ.x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    XYZ.y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    XYZ.z = r * 0.0193 + g * 0.1192 + b * 0.9505;

    return XYZ;
  };

  $.fn.ColorPickerSliders.XYZ2CIELab = function(XYZ) {
    var CIELab = {};

    // Observer = 2°, Illuminant = D65
    var X = XYZ.x / 95.047;
    var Y = XYZ.y / 100.000;
    var Z = XYZ.z / 108.883;

    if (X > 0.008856) {
      X = Math.pow(X, 0.333333333);
    }
    else {
      X = 7.787 * X + 0.137931034;
    }

    if (Y > 0.008856) {
      Y = Math.pow(Y, 0.333333333);
    }
    else {
      Y = 7.787 * Y + 0.137931034;
    }

    if (Z > 0.008856) {
      Z = Math.pow(Z, 0.333333333);
    }
    else {
      Z = 7.787 * Z + 0.137931034;
    }

    CIELab.l = (116 * Y) - 16;
    CIELab.a = 500 * (X - Y);
    CIELab.b = 200 * (Y - Z);

    return CIELab;
  };

  $.fn.ColorPickerSliders.CIELab2CIELCH = function(CIELab) {
    var CIELCH = {};

    CIELCH.l = CIELab.l;
    CIELCH.c = Math.sqrt(Math.pow(CIELab.a, 2) + Math.pow(CIELab.b, 2));

    CIELCH.h = Math.atan2(CIELab.b, CIELab.a);  //Quadrant by signs

    if (CIELCH.h > 0) {
      CIELCH.h = (CIELCH.h / Math.PI) * 180;
    }
    else {
      CIELCH.h = 360 - (Math.abs(CIELCH.h) / Math.PI) * 180;
    }

    return CIELCH;
  };

  $.fn.ColorPickerSliders.CIELCH2CIELab = function(CIELCH) {
    var CIELab = {};

    CIELab.l = CIELCH.l;
    CIELab.a = Math.cos(CIELCH.h * 0.01745329251) * CIELCH.c;
    CIELab.b = Math.sin(CIELCH.h * 0.01745329251) * CIELCH.c;

    return CIELab;
  };

  $.fn.ColorPickerSliders.CIELab2XYZ = function(CIELab) {
    var XYZ = {};

    XYZ.y = (CIELab.l + 16) / 116;
    XYZ.x = CIELab.a / 500 + XYZ.y;
    XYZ.z = XYZ.y - CIELab.b / 200;

    if (Math.pow(XYZ.y, 3) > 0.008856) {
      XYZ.y = Math.pow(XYZ.y, 3);
    }
    else {
      XYZ.y = (XYZ.y - 0.137931034) / 7.787;
    }

    if (Math.pow(XYZ.x, 3) > 0.008856) {
      XYZ.x = Math.pow(XYZ.x, 3);
    }
    else {
      XYZ.x = (XYZ.x - 0.137931034) / 7.787;
    }

    if (Math.pow(XYZ.z, 3) > 0.008856) {
      XYZ.z = Math.pow(XYZ.z, 3);
    }
    else {
      XYZ.z = (XYZ.z - 0.137931034) / 7.787;
    }

    // Observer = 2°, Illuminant = D65
    XYZ.x = 95.047 * XYZ.x;
    XYZ.y = 100.000 * XYZ.y;
    XYZ.z = 108.883 * XYZ.z;

    return XYZ;
  };

  $.fn.ColorPickerSliders.XYZ2rgb = function(XYZ) {
    var rgb = {};

    // Observer = 2°, Illuminant = D65
    XYZ.x = XYZ.x / 100;        // X from 0 to 95.047
    XYZ.y = XYZ.y / 100;        // Y from 0 to 100.000
    XYZ.z = XYZ.z / 100;        // Z from 0 to 108.883

    rgb.r = XYZ.x * 3.2406 + XYZ.y * -1.5372 + XYZ.z * -0.4986;
    rgb.g = XYZ.x * -0.9689 + XYZ.y * 1.8758 + XYZ.z * 0.0415;
    rgb.b = XYZ.x * 0.0557 + XYZ.y * -0.2040 + XYZ.z * 1.0570;

    if (rgb.r > 0.0031308) {
      rgb.r = 1.055 * (Math.pow(rgb.r, 0.41666667)) - 0.055;
    }
    else {
      rgb.r = 12.92 * rgb.r;
    }

    if (rgb.g > 0.0031308) {
      rgb.g = 1.055 * (Math.pow(rgb.g, 0.41666667)) - 0.055;
    }
    else {
      rgb.g = 12.92 * rgb.g;
    }

    if (rgb.b > 0.0031308) {
      rgb.b = 1.055 * (Math.pow(rgb.b, 0.41666667)) - 0.055;
    }
    else {
      rgb.b = 12.92 * rgb.b;
    }

    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);

    return rgb;
  };

  $.fn.ColorPickerSliders.detectWhichGradientIsSupported = function() {
    var testelement = document.createElement('detectGradientSupport').style;

    try {
      testelement.backgroundImage = 'linear-gradient(to top left, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'noprefix';
      }

      testelement.backgroundImage = '-webkit-linear-gradient(left top, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'webkit';
      }

      testelement.backgroundImage = '-ms-linear-gradient(left top, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'ms';
      }

      testelement.backgroundImage = '-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'oldwebkit';
      }
    }
    catch (err) {
      try {
        testelement.filter = 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=0)';
        if (testelement.filter.indexOf('DXImageTransform') !== -1) {
          return 'filter';
        }
      }
      catch (err) {
      }
    }

    return false;
  };

  $.fn.ColorPickerSliders.svgSupported = function() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  };

}));
