!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);class s{constructor(){this.event={}}insertEvent(t,...e){this.event[t]=e}deleteEvent(t){delete this.event[t]}notify(t,e){this.event[t].forEach(t=>{t(e)})}}class r{constructor({cards:t,width:e=0,height:i=0,title:s="none",emitter:r,interval:a=!1}){this.title=s,this.cards=t,this.status=1,this.width=e,this.height=i,this.emitter=r,this.interval=a,this.transiting=!1}render(){return`<div class="carousel-viewport carousel-${this.title.toLowerCase()}">\n        <div class="arrow">\n        <img src="/images/forwardarrow.svg" class="arrow-img left-arrow">\n        </div>\n        <div class="carousel-main">\n        <ol class="carousel-list">\n        ${this.makeLi()}\n         </ol>\n         </div>\n         <div class="arrow">\n          <img src="/images/backarrow.svg" class="arrow-img right-arrow">\n        </div>\n      </div>`}makeLi(){return this.cards.reduce((t,e,i)=>t+=`<li class="carousel-card  ${i+1}" data-type="${e.className}" data-value="${i+1}">\n                                ${e.render()}\n                            </li>`,"")}enrollEvent(){this.carouselViewPort=document.querySelector(`.carousel-${this.title.toLowerCase()}`),this.left=this.carouselViewPort.querySelector(".left-arrow"),this.right=this.carouselViewPort.querySelector(".right-arrow"),this.carouselMain=this.carouselViewPort.querySelector(".carousel-main"),this.carouselList=this.carouselViewPort.querySelector(".carousel-list"),this.carouselMain.style.width=0===this.width?"auto":this.width+"rem",this.carouselMain.style.height=0===this.height?"auto":this.height+"rem",this.carouselList.style.transform=`translateX(${this.width})`,this.carouselCards=this.carouselList.querySelectorAll(".carousel-card");const t=this.carouselCards[this.carouselCards.length-1],e=this.carouselCards[0];this.carouselList.appendChild(e.cloneNode(!0)),this.carouselList.insertBefore(t.cloneNode(!0),this.carouselList.firstChild),this.carouselList.style.transform=`translateX(${-this.width}rem)`,this.right.addEventListener("click",this.rightHandler.bind(this)),this.left.addEventListener("click",this.leftHandler.bind(this)),this.carouselList.addEventListener("transitionend",this.endTransitionHandler.bind(this)),this.emitter&&this.emitter.insertEvent("moveCards",this.moveCards.bind(this)),this.interval&&(this.interval=setInterval(this.rightHandler.bind(this),3e3),this.carouselViewPort.addEventListener("mouseover",()=>{clearInterval(this.interval),delete this.interval}),this.carouselViewPort.addEventListener("mouseout",()=>{this.interval=setInterval(this.rightHandler.bind(this),3e3)}))}leftHandler(){if(!this.transiting&&(this.transiting=!0,this.status--,this.setTransform(),this.emitter)){const t=this.status?this.status-1:this.cards.length-1;this.emitter.notify(`moveMainCard-${this.carouselCards[t].getAttribute("data-type")}`,{target:this.carouselCards[t]})}}rightHandler(){if(!this.transiting&&(this.transiting=!0,this.status++,this.setTransform(),this.emitter)){const t=this.status>this.cards.length?0:this.status-1;this.emitter.notify(`moveMainCard-${this.carouselCards[t].getAttribute("data-type")}`,{target:this.carouselCards[t]})}}setTransform(){this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`}endTransitionHandler(t){this.status<=0?(this.status=this.cards.length,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`):this.status>=this.cards.length&&(this.status=0,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`),this.transiting=!1}moveCards(t){this.status=t.getAttribute("data-value"),this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`}}class a{constructor({carousel:t,title:e,content:i,url:s}){this.carousel=t,this.title=e,this.content=i,this.url=s}render(){return`<div class="sub-container">\n                            ${this.carousel.render()}\n                            <div class="sub-right">\n                                <div class="sub-title">\n                                    ${this.title}\n                                </div>\n                                <div class="sub-content">\n                                    ${this.content}\n                                </div>\n                                <div class="sub-url">\n                                <a href="${this.url}">Explore Prime Video ></a>\n                                </div>\n                            </div>\n                        </div>`}}class n{constructor({title:t,image:e,backgroundColor:i,count:s=0,nowCount:r=0,emitter:a}){this.title=t,this.image=e,this.backgroundColor=i,this.count=s,this.nowCount=r,this.emitter=a}render({idx:t}){return`\n        <div class="category-card ${this.title.toLowerCase()}-card ${t?"":"card-clicked"}" style="background-color:${this.backgroundColor}">\n            <div class="category-title">${this.title}</div>\n            <div class="category-content ${this.title.toLowerCase()}-content">${this.appendSmallCircle()}</div>\n        </div>`}appendSmallCircle(){let t="";for(let e=0;e<this.count;e++)t+=`<div class="circle ${this.title.toLowerCase()}-${e+1}" data-value="${this.nowCount+e+1}"></div>`;return t}enrollEvent(){this.categoryCard=document.querySelector(`.${this.title.toLowerCase()}-card`),this.categoryContent=this.categoryCard.querySelector(".category-content"),this.categoryCard.addEventListener("click",this.clickCardHandler.bind(this)),this.categoryContent.addEventListener("click",this.clickCircleHandler.bind(this)),this.defaultCircle(),this.emitter&&this.emitter.insertEvent(`moveMainCard-${this.title}`,this.clickCardHandler.bind(this),this.clickCircleHandler.bind(this))}clickCardHandler(t){if(this.categoryCard.classList.contains("card-clicked"))return;document.querySelectorAll(".category-card").forEach(t=>{t.classList.remove("card-clicked")}),this.categoryCard.classList.add("card-clicked"),this.defaultCircle(),this.emitter&&this.emitter.notify("moveCards",this.categoryCard.querySelector(".circle"))}clickCircleHandler(t){t.target.getAttribute("data-value")&&(this.categoryContent.childNodes.forEach(e=>{t.target.getAttribute("data-value")===e.getAttribute("data-value")?e.classList.add("circle-active"):e.classList.remove("circle-active")}),this.emitter&&this.emitter.notify("moveCards",t.target))}defaultCircle(){this.categoryContent.childNodes.forEach(t=>{t.classList.remove("circle-active")}),this.categoryContent.firstChild.classList.add("circle-active")}}class o{constructor({cards:t,bottomCarousel:e}){this.cards=t,this.bottomCarousel=e}render(){return`<div class="main-container">\n                            <div>\n                                <div class="benefit-cards">${this.insertCardCategory()}</div>\n                            </div>\n                            <div>\n                                ${this.bottomCarousel.render()}\n                            </div>\n                        </div>`}insertCardCategory(){return this.cards.reduce((t,e,i)=>t+=e.render({idx:i}),"")}}class l{constructor(t){this.url=t}render(){return`<img src="${this.url}">`}}class c{constructor({className:t,image:e,title:i,head:s,content:r,url:a,urlContent:n,width:o,color:l,height:c=15}){this.className=t,this.image=e,this.title=i,this.head=s,this.content=r,this.url=a,this.urlContent=n,this.width=o,this.height=c,this.color=l}render(){return`<div class="bottom-card ${this.className}" \n                            style="background-image:url(${this.image});\n                            width:${this.width}rem;\n                            height:${this.height}rem">\n                            <div class="bottom-main">\n                                <div class="bottom-title" style="background-color:${this.color}">\n                                    ${this.title}\n                                </div>\n                                <div class="bottom-head">\n                                    ${this.head}\n                                </div>\n                                <div class="bottom-content">\n                                    ${this.content}\n                                </div>\n                                <div class="bottom-url">\n                                    <a href="${this.url}">${this.urlContent}</a>\n                                </div>\n                            </div>\n                        </div>`}setBackground(){}}const h={render:()=>"<footer>copyrightⓒBoostcamp-membership/ss08</footer>"},d={render:()=>'<header style="background-color:black"><img src="../../images/logo.png"></header>'},u={render:()=>'<div class="banner"></div>'};({root:document.querySelector("#root"),init(){this.root.innerHTML="",this.carouselemitter=new s,Promise.all([fetch("/data/maincard.json"),fetch("/data/bottomcarousel.json")]).then(async t=>{await this.makeCardCategory(t[0]),await this.makeBottomCard(t[1]),this.makeMainContainer()}).then(()=>{Promise.all([fetch("/data/minicarousel.json"),fetch("/data/sub.json")]).then(async t=>{await this.makeMiniCarousel(t[0]),await this.makeSubContainer(t[1])}).then(()=>{this.render(),this.enrollEvent()})}).catch(t=>{console.log(t)})},async makeCardCategory(t){const e=await t.json();let i=0;this.cards=e.main.reduce((t,e)=>{const s=new n({title:e.title,backgroundColor:e.color,image:e.image,count:e.button,nowCount:i,emitter:this.carouselemitter});return i+=e.button,t.push(s),t},[])},async makeBottomCard(t){const e=await t.json();this.bottomcards=e.result.reduce((t,e,i)=>(t.push(new c({className:e.type,title:e.title,head:e.head,content:e.body,image:e.image,url:e.link,urlContent:e.tail,color:e.color,width:50})),t),[]),this.bottomCarousel=new r({cards:this.bottomcards,width:50,height:20,emitter:this.carouselemitter,interval:!1})},async makeMainContainer(){this.maincontainer=new o({cards:this.cards,bottomCarousel:this.bottomCarousel})},async makeMiniCarousel(t){const e=(await t.json()).mini.reduce((t,e)=>(t.push(new l(e.image)),t),[]);this.miniCarousel=new r({cards:e,width:15,height:0,title:"mini",interval:!0})},async makeSubContainer(t){const e=await t.json();this.subContainer=new a({carousel:this.miniCarousel,title:e.sub[0].title,content:e.sub[0].content,url:e.sub[0].url})},render(){this.root.insertAdjacentHTML("afterbegin",d.render()),this.root.insertAdjacentHTML("beforeend",u.render()),this.root.insertAdjacentHTML("beforeend",this.maincontainer.render()),this.root.insertAdjacentHTML("beforeend",this.subContainer.render()),this.root.insertAdjacentHTML("beforeend",h.render())},enrollEvent(){this.bottomCarousel.enrollEvent(),this.miniCarousel.enrollEvent(),this.cards.forEach(t=>{t.enrollEvent()})}}).init()}]);