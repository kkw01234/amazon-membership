!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([,function(e,n,t){"use strict";t.r(n);const r=(e,n,t="black")=>{e.innerHTML=n,e.style.color=t};function o(e){return l(i(c(e)))}function i(e){return s(d(a(e),8*e.length))}function l(e){for(var n,t=A?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<e.length;o++)n=e.charCodeAt(o),r+=t.charAt(n>>>4&15)+t.charAt(15&n);return r}function c(e){for(var n,t,r="",o=-1;++o<e.length;)n=e.charCodeAt(o),t=o+1<e.length?e.charCodeAt(o+1):0,n>=55296&&56319>=n&&t>=56320&&57343>=t&&(n=65536+((1023&n)<<10)+(1023&t),o++),127>=n?r+=String.fromCharCode(n):2047>=n?r+=String.fromCharCode(192|n>>>6&31,128|63&n):65535>=n?r+=String.fromCharCode(224|n>>>12&15,128|n>>>6&63,128|63&n):2097151>=n&&(r+=String.fromCharCode(240|n>>>18&7,128|n>>>12&63,128|n>>>6&63,128|63&n));return r}function a(e){for(var n=Array(e.length>>2),t=0;t<n.length;t++)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<24-t%32;return n}function s(e){for(var n="",t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>24-t%32&255);return n}function d(e,n){null==f&&(f=new Array(new u(1116352408,-685199838),new u(1899447441,602891725),new u(-1245643825,-330482897),new u(-373957723,-2121671748),new u(961987163,-213338824),new u(1508970993,-1241133031),new u(-1841331548,-1357295717),new u(-1424204075,-630357736),new u(-670586216,-1560083902),new u(310598401,1164996542),new u(607225278,1323610764),new u(1426881987,-704662302),new u(1925078388,-226784913),new u(-2132889090,991336113),new u(-1680079193,633803317),new u(-1046744716,-815192428),new u(-459576895,-1628353838),new u(-272742522,944711139),new u(264347078,-1953704523),new u(604807628,2007800933),new u(770255983,1495990901),new u(1249150122,1856431235),new u(1555081692,-1119749164),new u(1996064986,-2096016459),new u(-1740746414,-295247957),new u(-1473132947,766784016),new u(-1341970488,-1728372417),new u(-1084653625,-1091629340),new u(-958395405,1034457026),new u(-710438585,-1828018395),new u(113926993,-536640913),new u(338241895,168717936),new u(666307205,1188179964),new u(773529912,1546045734),new u(1294757372,1522805485),new u(1396182291,-1651133473),new u(1695183700,-1951439906),new u(1986661051,1014477480),new u(-2117940946,1206759142),new u(-1838011259,344077627),new u(-1564481375,1290863460),new u(-1474664885,-1136513023),new u(-1035236496,-789014639),new u(-949202525,106217008),new u(-778901479,-688958952),new u(-694614492,1432725776),new u(-200395387,1467031594),new u(275423344,851169720),new u(430227734,-1194143544),new u(506948616,1363258195),new u(659060556,-544281703),new u(883997877,-509917016),new u(958139571,-976659869),new u(1322822218,-482243893),new u(1537002063,2003034995),new u(1747873779,-692930397),new u(1955562222,1575990012),new u(2024104815,1125592928),new u(-2067236844,-1578062990),new u(-1933114872,442776044),new u(-1866530822,593698344),new u(-1538233109,-561857047),new u(-1090935817,-1295615723),new u(-965641998,-479046869),new u(-903397682,-366583396),new u(-779700025,566280711),new u(-354779690,-840897762),new u(-176337025,-294727304),new u(116418474,1914138554),new u(174292421,-1563912026),new u(289380356,-1090974290),new u(460393269,320620315),new u(685471733,587496836),new u(852142971,1086792851),new u(1017036298,365543100),new u(1126000580,-1676669620),new u(1288033470,-885112138),new u(1501505948,-60457430),new u(1607167915,987167468),new u(1816402316,1246189591)));var t,r,o=new Array(new u(1779033703,-205731576),new u(-1150833019,-2067093701),new u(1013904242,-23791573),new u(-1521486534,1595750129),new u(1359893119,-1377402159),new u(-1694144372,725511199),new u(528734635,-79577749),new u(1541459225,327033209)),i=new u(0,0),l=new u(0,0),c=new u(0,0),a=new u(0,0),s=new u(0,0),d=new u(0,0),A=new u(0,0),y=new u(0,0),T=new u(0,0),_=new u(0,0),L=new u(0,0),S=new u(0,0),g=new u(0,0),N=new u(0,0),D=new u(0,0),b=new u(0,0),k=new u(0,0),C=new Array(80);for(r=0;80>r;r++)C[r]=new u(0,0);for(e[n>>5]|=128<<24-(31&n),e[31+(n+128>>10<<5)]=n,r=0;r<e.length;r+=32){for(h(c,o[0]),h(a,o[1]),h(s,o[2]),h(d,o[3]),h(A,o[4]),h(y,o[5]),h(T,o[6]),h(_,o[7]),t=0;16>t;t++)C[t].h=e[r+2*t],C[t].l=e[r+2*t+1];for(t=16;80>t;t++)m(D,C[t-2],19),p(b,C[t-2],29),v(k,C[t-2],6),S.l=D.l^b.l^k.l,S.h=D.h^b.h^k.h,m(D,C[t-15],1),m(b,C[t-15],8),v(k,C[t-15],7),L.l=D.l^b.l^k.l,L.h=D.h^b.h^k.h,w(C[t],S,C[t-7],L,C[t-16]);for(t=0;80>t;t++)g.l=A.l&y.l^~A.l&T.l,g.h=A.h&y.h^~A.h&T.h,m(D,A,14),m(b,A,18),p(k,A,9),S.l=D.l^b.l^k.l,S.h=D.h^b.h^k.h,m(D,c,28),p(b,c,2),p(k,c,7),L.l=D.l^b.l^k.l,L.h=D.h^b.h^k.h,N.l=c.l&a.l^c.l&s.l^a.l&s.l,N.h=c.h&a.h^c.h&s.h^a.h&s.h,I(i,_,S,g,f[t],C[t]),E(l,L,N),h(_,T),h(T,y),h(y,A),E(A,d,i),h(d,s),h(s,a),h(a,c),E(c,i,l);E(o[0],o[0],c),E(o[1],o[1],a),E(o[2],o[2],s),E(o[3],o[3],d),E(o[4],o[4],A),E(o[5],o[5],y),E(o[6],o[6],T),E(o[7],o[7],_)}var R=new Array(16);for(r=0;8>r;r++)R[2*r]=o[r].h,R[2*r+1]=o[r].l;return R}function u(e,n){this.h=e,this.l=n}function h(e,n){e.h=n.h,e.l=n.l}function m(e,n,t){e.l=n.l>>>t|n.h<<32-t,e.h=n.h>>>t|n.l<<32-t}function p(e,n,t){e.l=n.h>>>t|n.l<<32-t,e.h=n.l>>>t|n.h<<32-t}function v(e,n,t){e.l=n.l>>>t|n.h<<32-t,e.h=n.h>>>t}function E(e,n,t){var r=(65535&n.l)+(65535&t.l),o=(n.l>>>16)+(t.l>>>16)+(r>>>16),i=(65535&n.h)+(65535&t.h)+(o>>>16),l=(n.h>>>16)+(t.h>>>16)+(i>>>16);e.l=65535&r|o<<16,e.h=65535&i|l<<16}function w(e,n,t,r,o){var i=(65535&n.l)+(65535&t.l)+(65535&r.l)+(65535&o.l),l=(n.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(i>>>16),c=(65535&n.h)+(65535&t.h)+(65535&r.h)+(65535&o.h)+(l>>>16),a=(n.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(c>>>16);e.l=65535&i|l<<16,e.h=65535&c|a<<16}function I(e,n,t,r,o,i){var l=(65535&n.l)+(65535&t.l)+(65535&r.l)+(65535&o.l)+(65535&i.l),c=(n.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(i.l>>>16)+(l>>>16),a=(65535&n.h)+(65535&t.h)+(65535&r.h)+(65535&o.h)+(65535&i.h)+(c>>>16),s=(n.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(i.h>>>16)+(a>>>16);e.l=65535&l|c<<16,e.h=65535&a|s<<16}var f,A=0;t.d(n,"register",(function(){return T}));const y={DEFAULT:{content:"",color:"black"},INVALID_ID:{content:"5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",color:"red"},VALID_ID:{content:"사용 가능한 아이디입니다.",color:"green"},EXIST_USER:{content:"이미 사용중인 아이디 입니다.",color:"red"},SAFETY_PASSWORD:{content:"안전한 비밀번호 입니다.",color:"green"},IMPROPER_LENGTH_PASSWORD:{content:"8자 이상 16자 이하로 입력해주세요",color:"red"},NOT_FIND_CAPITAL_LETTER:{content:"영문 대문자를 최소 1자 이상 포함해주세요",color:"red"},NOT_FIND_NUMBER:{content:"숫자를 최소 1자 이상 포함해주세요",color:"red"},NOT_FIND_SPECIAL_LETTER:{content:"특수문자를 최소 1자 이상 포함해주세요",color:"red"},NOT_MATCHING_PASSWORD:{content:"비밀번호가 일치하지 않습니다.",color:"red"},MATCHING_PASSWORD:{content:"비밀번호가 일치합니다.",color:"green"},INVALID_BIRTH_YEAR:{content:"태어난 년도 4자리를 정확하게 입력하세요",color:"red"},UNABLE_REGISTER:{content:"15세 이상 99세 이하일 경우만 회원가입 하실 수 있습니다.",color:"red"},INVALID_BIRTH_MONTH:{content:"월을 선택해 주세요",color:"red"},INVALID_BIRTH_DATE:{content:"정확한 일자를 입력해주세요",color:"red"},INVALID_EMAIL:{content:"이메일 주소를 확인하세요",color:"red"},INVALID_PHONE_NUMBER:{content:"형식에 맞지않는 번호입니다.",color:"red"},OVER_THREE_TAGS:{content:"관심사를 3개 이상 입력해 주세요",color:"red"}},T={render:()=>'\n        <div class="title">회원가입</div>\n        <form>\n        <div class="input-container">\n            <p>아이디</p>\n            <div class="inputText">\n                <input type="text" name="id">\n            </div>\n            <div id="nameError"></div>\n        </div>\n        <div class="input-container">\n            <p>패스워드</p>\n            <div class="inputText">\n                <input type="password" name="password">\n            </div>\n            <div id="passwordError"></div>\n        </div>\n        <div class="input-container">\n            <p>비밀번호 재확인</p>\n            <div class="inputText">\n                <input type="password" name="reconfirmationPassword">\n            </div>\n            <div id="reconfirmationPasswordError"></div>\n        </div>\n        <div class="input-container">\n            <p>이름</p>\n            <div class="inputText">\n                <input type="text" name="name">\n            </div>\n            <div id="nameError"></div>\n        </div>\n        <div class="input-container">\n            <p>생년월일</p>\n            <div class="inputText">\n                <input type="text" name="birthYear" placeholder="년(6자)">\n                <select name="birthMonth">\n                    <option value="">월</option>\n                </select>\n                <input type="text" name="birthDate" placeholder="일">\n            </div>\n            <div id="birthError"></div>\n        </div>\n        <div class="input-container">\n            <p>성별</p>\n            <div class="inputText">\n                <select name="gender">\n                    <option value="">성별</option>\n                    <option value="male">남</option>\n                    <option value="female">여</option>\n                </select>\n            </div>\n        </div>\n        <div class="input-container">\n            <p>이메일</p>\n            <div class="inputText">\n                <input type="email" name="email">\n            </div>\n            <div id="emailError"></div>\n        </div>\n        <div class="input-container">\n            <p>휴대전화</p>\n            <div class="inputText">\n                <input type="text" name="phone">\n            </div>\n            <div id="phoneError"></div>\n        </div>\n        <div class="input-container">\n            <p>관심사</p>\n            <div class="tags-input">\n                <input type="interests" name="interestsform">\n                <input type="hidden" name="interests" value="">\n            </div>\n            <div id="interestsError"></div>\n        </div>\n        <div class="terms-container">\n            <span> 약관에 동의합니다.</span>\n            <input type="checkbox" name="terms" disabled="disabled">\n        </div>\n        <div class="btn-container">\n            <button type="button" class="btn btn-middle" id="initialization-button">초기화</button>\n            <button type="button" class="btn btn-middle" id="register-button">가입하기</button>\n        </div>\n        </form>\n    <div id="register-modal" class="modal">\n        <div class="modal-content">\n           \n        </div>\n    </div>\n    ',init(){_.init(),L.init(),S.init(),g.init(),N.init(),D.init(),b.init(),k.init(),C.init(),H.init(),R.init()}},_={init(){let e=!1;const n=document.querySelector("input[name=id]"),t=document.querySelector("#nameError");n.addEventListener("focusout",async()=>{e=!1;const o=await this.checkId(n.value);r(t,o.content,o.color),o===y.VALID_ID&&(e=!0)}),this.clearIdForm=()=>{n.value="",r(t,""),e=!1},this.getId=()=>!!e&&n.value},async checkId(e){return this.checkAvailableId(e)?await this.findUser(e)?y.EXIST_USER:y.VALID_ID:y.INVALID_ID},checkAvailableId(e){if(e.length<5)return!1;return 0===e.replace(/[_0-9a-zA-z-]*/,"").length},findUser:async e=>new Promise(n=>{fetch("/registerpage/checkid",{method:"post",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(e=>{n(e.result)})})})},L={init(){let e,n;const t=document.querySelector("input[name=password]"),o=document.querySelector("input[name=reconfirmationPassword]"),i=document.querySelector("#passwordError"),l=document.querySelector("#reconfirmationPasswordError");t.addEventListener("input",()=>{e=!1;const n=this.checkPassword(t.value);r(i,n.content,n.color),r(l,y.DEFAULT.content),n==y.SAFETY_PASSWORD&&(e=!0)}),o.addEventListener("input",()=>{n=!1;const e=this.checkReconfirmationandPassword(t.value,o.value);r(l,e.content,e.color),e===y.MATCHING_PASSWORD&&(n=!0)}),this.clearPasswordForm=()=>{t.value="",o.value="",r(i,y.DEFAULT.content),r(l,y.DEFAULT.content),e=!1},this.getPassword=()=>!(!e||!n)&&t.value},checkPassword(e){if(e.length<8)return y.IMPROPER_LENGTH_PASSWORD;let n=/[A-Z]/,t=n.test(e);return t?(t=(n=/[0-9]/).test(e))?(t=(n=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/).test(e))?y.SAFETY_PASSWORD:y.NOT_FIND_SPECIAL_LETTER:y.NOT_FIND_NUMBER:y.NOT_FIND_CAPITAL_LETTER},checkReconfirmationandPassword:(e,n)=>e===n?y.MATCHING_PASSWORD:y.NOT_MATCHING_PASSWORD},S={init(){const e=document.querySelector("input[name=name]");this.clearNameForm=()=>{e.value=""},this.getName=()=>""!=e.value&&e.value}},g={init(){let e,n,t;const o=document.querySelector("input[name=birthYear]"),i=document.querySelector("Select[name=birthMonth]"),l=document.querySelector("input[name=birthDate]"),c=document.querySelector("#birthError");for(let e=1;e<=12;e++)i.insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`);o.addEventListener("input",()=>{e=!1;const a=this.checkBirthYear(o.value);if(r(c,a.content,a.color),a==y.DEFAULT){e=!0;const a=this.checkBirthYear(o.value),s=this.checkBirthDate(o.value,i.value,l.value);a===y.INVALID_BIRTH_MONTH?(r(c,a.content,a.color),n=!1):s===y.INVALID_BIRTH_DATE&&(r(c,s.content,s.color),t=!1)}}),i.addEventListener("input",()=>{n=!1;const a=this.checkBirthMonth(i.value);if(r(c,a.content,a.color),a===y.DEFAULT){n=!0;const a=this.checkBirthYear(o.value),s=this.checkBirthDate(o.value,i.value,l.value);a===y.INVALID_BIRTH_YEAR?(e=!1,r(c,a.content,a.color)):s===y.INVALID_BIRTH_DATE&&(t=!1,r(c,s.content,s.color))}}),l.addEventListener("input",()=>{t=!1;const e=this.checkBirthDate(o.value,i.value,l.value);r(c,e.content,e.color),e===y.DEFAULT&&(t=!0)}),this.clearBirthForm=()=>{o.value="",i.value="",l.value="",r(c,""),e=!1,n=!1,t=!1},this.getBirth=()=>!!(e&&n&&t)&&[o.value,i.value,l.value]},checkBirthYear(e){if(4!==e.length)return y.INVALID_BIRTH_YEAR;const n=(new Date).getFullYear();return n-e<15||n-e>99?y.UNABLE_REGISTER:y.DEFAULT},checkBirthMonth:e=>""===e?y.INVALID_BIRTH_MONTH:y.DEFAULT,checkBirthDate(e,n,t){if(4!==e.length)return y.INVALID_BIRTH_YEAR;if(t<0)return y.INVALID_BIRTH_DATE;switch(1*n){case 1:case 3:case 5:case 7:case 8:case 10:case 12:if(t>31)return y.INVALID_BIRTH_DATE;break;case 4:case 6:case 9:case 11:if(t>30)return y.INVALID_BIRTH_DATE;break;case 2:if(this.checkLeapYear(e)&&t>29)return y.INVALID_BIRTH_DATE;if(t>28)return y.INVALID_BIRTH_DATE;break;default:return y.INVALID_BIRTH_MONTH}return y.DEFAULT},checkLeapYear(e){if(e%4)return!(e%100)||!!(e%400)}},N={init(){const e=document.querySelector("select[name=gender]");this.clearGenderform=()=>{e.value=""},this.getGender=()=>""!==e.value&&e.value}},D={init(){let e=!1;const n=document.querySelector("input[name=email]"),t=document.querySelector("#emailError");n.addEventListener("input",()=>{e=!1;const o=this.checkEmail(n.value);r(t,o.content,o.color),o===y.DEFAULT&&(e=!0)}),this.clearEmailForm=()=>{n.value="",r(t,""),e=!1},this.getEmail=()=>!!e&&n.value},checkEmail:e=>/[^@]+@[^@]+(\.)[^@]+/.test(e)?y.DEFAULT:y.INVALID_EMAIL},b={init(){let e=!1;const n=document.querySelector("input[name=phone]"),t=document.querySelector("#phoneError");n.addEventListener("input",()=>{e=!1;const o=this.checkPhone(n.value);r(t,o.content,o.color),o===y.DEFAULT&&(e=!0)}),this.clearPhoneForm=()=>{n.value="",r(t,""),e=!1},this.getPhone=()=>!!e&&n.value},checkPhone(e){if(e.length<10||e.length>11)return y.INVALID_PHONE_NUMBER;if(1*e[0]!=0||1*e[1]!=1||1*e[2]!=0)return y.INVALID_PHONE_NUMBER;return/[0-9]+/.test(e)?y.DEFAULT:y.INVALID_PHONE_NUMBER}},k={init(){this.interestList=[];let e=!1;const n=document.querySelector(".tags-input"),t=document.querySelector("input[name=interestsform]");t.addEventListener("keydown",o=>{if(!e&&8==o.keyCode&&n.children.length>1){const e=document.getElementsByClassName(`${k.interestList.length}`)[0];n.removeChild(e),this.interestList.pop(),t.value=e.textContent,this.checkInterests()?r(document.querySelector("#interestsError"),registeEnum.DEFAULT.content):r(document.querySelector("#interestsError"),y.OVER_THREE_TAGS.content,y.OVER_THREE_TAGS.color)}}),t.addEventListener("input",o=>{if(8==o.keyCode)return;if(0===t.value.length)return void(e=!1);e=!0;const i=this.checkComma(t.value);if("removeComma"===i)t.value="";else if(i){const o=document.createElement("span");o.classList.add("tag"),o.classList.add(`${k.interestList.length+1}`),o.textContent=t.value.split(",")[0],this.interestList.push(o.textContent),o.appendChild(this.makeClose(o)),n.insertBefore(o,t),t.value="",e=!1,this.checkInterests()?r(document.querySelector("#interestsError"),y.DEFAULT.content):r(document.querySelector("#interestsError"),y.OVER_THREE_TAGS.content,y.OVER_THREE_TAGS.color)}})},checkComma(e){const n=e.split(",");return n.length>=2&&""!==n[0]?n[0]:""==n[0]?"removeComma":""},makeClose(e){const n=document.createElement("img");return n.style.width="1em",n.style.height="1em",n.setAttribute("src","./images/close.svg"),n.addEventListener("click",()=>{document.querySelector(".tags-input").removeChild(e)}),n},checkInterests(){return!(this.interestList.length<3)},getInterests(){return!!this.checkInterests()&&this.interestList},clearInterests(){const e=document.querySelector(".tags-input");for(;"tag"==e.firstElementChild.className;)e.removeChild(e.firstElementChild)}},C={init(){const e=document.querySelector(".terms-container"),n=document.querySelector(".modal");e.addEventListener("click",()=>{const e=document.querySelectorAll(".modal-content")[0];e.className="modal-content modal-large",e.innerHTML="",n.style.display="block",this.makeTerms(e),e.querySelector(".close").addEventListener("click",()=>{n.style.display="none"});const t=e.querySelector(".terms"),r=e.querySelector("#terms-btn");r.addEventListener("click",this.clickButton),t.addEventListener("scroll",()=>{const e=t.scrollTop;t.scrollHeight-t.offsetHeight<=e&&(r.disabled=!1,r.classList.remove("btn-disabled"))})})},makeTerms(e){const n=document.createElement("div"),t=document.createElement("img"),r=document.createElement("h4"),o=document.createElement("textarea"),i=document.createElement("div"),l=document.createElement("button");n.className="close",t.src="./images/close.svg",t.style.width="20px",t.style.height="20px",n.appendChild(t),r.textContent="개인정보 수집 및 이용에 대한 안내",o.className="terms",o.readOnly=!0,o.textContent="  정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.\n    \n    1. 수집하는 개인정보의 항목\n    최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.\n    - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사\n    \n    2. 개인정보의 수집 및 이용 목적\n    가. 컨텐츠 제공, 특정 맞춤 서비스 제공\n    나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재\n    \n    3. 개인정보의 보유 및 이용기간\n    이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.\n    \n    가. 회사 내부 방침에 의한 정보보유 사유\n    - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)\n    보존 항목 : 가입인증 휴대폰 번호\n    보존 이유 : 부정 가입 및 이용 방지\n    보존 기간 : 6개월\n    ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.\n    \n    나. 관련법령에 의한 정보보유 사유\n    상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. \n    - 계약 또는 청약철회 등에 관한 기록\n    보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n    보존 기간 : 5년\n    - 소비자의 불만 또는 분쟁처리에 관한 기록\n    보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n    보존 기간 : 3년\n    - 웹사이트 방문기록\n    보존 이유 : 통신비밀보호법\n    보존 기간 : 3개월",i.className="btn-container",l.id="terms-btn",l.className="btn btn-disabled btn-small",l.disabled="disabled",l.textContent="가입",i.appendChild(l),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(i)},clickButton(){const e=document.querySelector("input[name=terms]"),n=document.querySelector(".modal");e.checked=!0,n.style.display="none"}},R={init(){document.querySelector("#initialization-button").addEventListener("click",this.initializationListener)},initializationListener(){const e=document.querySelector(".modal"),n=document.querySelector(".modal-content"),t=document.createElement("p");t.textContent="정말로 삭제하시겠습니까?",n.innerHTML="",n.appendChild(t);const r=document.createElement("div");r.className="btn-container";const o=document.createElement("button"),i=document.createElement("button");return o.className="btn btn-small",o.textContent="삭제",o.addEventListener("click",R.deleteAll),i.className="btn btn-small",i.textContent="취소",i.addEventListener("click",()=>{n.className="modal-content modal-large",e.style.display="none"}),r.appendChild(o),r.appendChild(i),n.appendChild(r),n.className="modal-content modal-small",e.style.display="block",!1},deleteAll(){const e=document.querySelector(".modal");_.clearIdForm(),L.clearPasswordForm(),S.clearNameForm(),g.clearBirthForm(),N.clearGenderform(),D.clearEmailForm(),b.clearPhoneForm(),k.clearInterests(),document.querySelector("input[name=terms]").checked=!1,e.style.display="none"}},H={init(){document.querySelector("#register-button").addEventListener("click",this.checkRegisterHandler)},checkRegisterHandler(){const e=document.querySelector(".modal"),n=_.getId(),t=L.getPassword(),r=S.getName(),o=g.getBirth(),i=N.getGender(),l=D.getEmail(),c=b.getPhone(),a=k.getInterests(),s={"아이디":n,"패스워드":t,"이름":r,"생년월일":o,"셩별":i,"이메일":l,"휴대전화":c,"관심사":a,"약관":document.querySelector("input[name=terms]").checked};for(let n in s)if(!s[n]){const t=document.querySelector(".modal-content"),r=document.createElement("p"),o=document.createElement("div"),i=document.createElement("button");return r.textContent=`${n}를(을) 확인해 주세요`,o.className="btn-container",i.className="btn btn-small",i.textContent="확인",i.addEventListener("click",()=>{t.innerHTML="",e.style.display="none"}),t.innerHTML="",o.appendChild(i),t.appendChild(r),t.appendChild(o),t.className="modal-content modal-small",e.style.display="block",!1}return fetch("/registerpage/register",{method:"post",body:H.makeJSON(n,t,r,o,i,l,c,a),headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(e=>{e.result&&(history.pushState(null,null,"/"),router("/",!0))})}),!0},makeJSON:(e,n,t,r,i,l,c,a)=>JSON.stringify({id:e,password:o(e+n),name:t,birth:r,gender:i,email:l,phone:c,interests:a})};((e,n=document)=>n.querySelector(e))("#root").innerHTML=T.render(),T.init()}]);