function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequirea717;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequirea717=s),s.register("27Lyk",function(t,a){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>s,e=>s=e);var n,s,r={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)r[t[a]]=e[t[a]]},s=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("27Lyk").register(JSON.parse('{"cFDjH":"index.4ac43811.js","5RZmk":"boat-disabled.f4c226c7.png","dYRmN":"boat-enabled.9b544d4d.png","3DzAp":"cake-disabled.14f80040.png","emaNh":"cake-enabled.86164128.png","4XNVR":"crown-disabled.77f7f025.png","aaU56":"crown-enabled.f153d892.png","b8gHF":"death-disabled.cb583670.png","gxsR4":"death-enabled.1c5d5b30.png","K4Tp6":"lightning-disabled.407f3bf7.png","guNlR":"lightning-enabled.0a53e558.png","b45ox":"scuba-disabled.b18f2f7b.png","eoXox":"scuba-enabled.58167847.png","h8fVc":"stack-disabled.c8bdb2b5.png","BotX6":"stack-enabled.e82bc807.png","bXNpH":"talent-calc-bg-1920.f50a72c8.png","dIR5i":"talent-calc-bg.8a373e2a.png","3Occl":"utensil-disabled.cdb8dbef.png","eogYe":"utensil-enabled.d4384a49.png"}'));var r={},i={};i=// TODO Alt text, description
class{constructor(e,t){this.name=e,this.prerequisite=t,this.isPurchased=!1,this.sprite=this.name+"-disabled",t?this.prereqMet=!1:this.prereqMet=!0}get isPurchased(){return this._isPurchased}set isPurchased(e){this._isPurchased=e}get prereqMet(){return this._prereqMet}set prereqMet(e){this._prereqMet=e}purchase(){this.sprite=this.name+"-enabled",this.isPurchased=!0}remove(){this.sprite=this.name+"-disabled",this.isPurchased=!1}highlight(){this.isPurchased||(this.sprite=this.name+"-enabled")}deHighlight(){this.isPurchased||(this.sprite=this.name+"-disabled")}},r=class{constructor(e){this.talents=[];// Create a new Talent object for each talent in the talents array.
// For simplicity, we are trusting that we are receiving the talents in
// the order they need to appear.
for(let t=0;t<e.length;t++)this.talents.push(new i(e[t].name,e[t].prerequisite))}// Check if the prerequisite for the talent is met.
// If it is, purchase the talent. If not, throw an error.
purchaseTalent(e){if(e<this.talents.length){let t=this.talents[e];if(t.prereqMet){if(t.isPurchased)throw Error("Talent already purchased.");t.purchase(),e<this.talents.length-1&&(this.talents[e+1].prereqMet=!0)}else throw Error("Prerequisite not met.")}else throw Error("Argument out of range.")}removeTalent(e){if(e<this.talents.length){let t=this.talents[e];if(t.isPurchased)this.talents[e].remove(),e<this.talents.length-1&&(this.talents[e+1].prereqMet=!1);else throw Error("Talent has not been purchased and therefore cannot be removed.")}else throw Error("Argument out of range.")}};var l={};l=class{constructor(e,t){this.maxPoints=e,this.availablePoints=t}get maxPoints(){return this._maxPoints}set maxPoints(e){this._maxPoints=e}get availablePoints(){return this._availablePoints}set availablePoints(e){this._availablePoints=e}subtractPoint(){this.availablePoints-=1,this.#e()}addPoint(){this.availablePoints+=1,this.#e()}#e(){document.getElementById("spent-points").innerHTML=this.maxPoints-this.availablePoints,document.getElementById("max-points").innerHTML=this.maxPoints}};var o={},d={};d=new URL(s("27Lyk").resolve("5RZmk"),import.meta.url).toString();var c={};c=new URL(s("27Lyk").resolve("dYRmN"),import.meta.url).toString();var u={};u=new URL(s("27Lyk").resolve("3DzAp"),import.meta.url).toString();var h={};h=new URL(s("27Lyk").resolve("emaNh"),import.meta.url).toString();var b={};b=new URL(s("27Lyk").resolve("4XNVR"),import.meta.url).toString();var m={};m=new URL(s("27Lyk").resolve("aaU56"),import.meta.url).toString();var g={};g=new URL(s("27Lyk").resolve("b8gHF"),import.meta.url).toString();var p={};p=new URL(s("27Lyk").resolve("gxsR4"),import.meta.url).toString();var f={};f=new URL(s("27Lyk").resolve("K4Tp6"),import.meta.url).toString();var v={};v=new URL(s("27Lyk").resolve("guNlR"),import.meta.url).toString();var w={};w=new URL(s("27Lyk").resolve("b45ox"),import.meta.url).toString();var P={};P=new URL(s("27Lyk").resolve("eoXox"),import.meta.url).toString();var T={};T=new URL(s("27Lyk").resolve("h8fVc"),import.meta.url).toString();var S={};S=new URL(s("27Lyk").resolve("BotX6"),import.meta.url).toString();var k={};k=new URL(s("27Lyk").resolve("bXNpH"),import.meta.url).toString();var L={};L=new URL(s("27Lyk").resolve("dIR5i"),import.meta.url).toString();var x={};x=new URL(s("27Lyk").resolve("3Occl"),import.meta.url).toString();o={"boat-disabled":d,"boat-enabled":c,"cake-disabled":u,"cake-enabled":h,"crown-disabled":b,"crown-enabled":m,"death-disabled":g,"death-enabled":p,"lightning-disabled":f,"lightning-enabled":v,"scuba-disabled":w,"scuba-enabled":P,"stack-disabled":T,"stack-enabled":S,"talent-calc-bg-1920":k,"talent-calc-bg":L,"utensil-disabled":x,"utensil-enabled":new URL(s("27Lyk").resolve("eogYe"),import.meta.url).toString()};var y={};y=function(){"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem("userTrackState",JSON.stringify({availablePoints:6,userTalentPath1:{name:"Talent Path 1",talents:[{name:"stack",isPurchased:!1},{name:"utensil",isPurchased:!1},{name:"cake",isPurchased:!1},{name:"crown",isPurchased:!1}]},userTalentPath2:{name:"Talent Path 2",talents:[{name:"boat",isPurchased:!1},{name:"scuba",isPurchased:!1},{name:"lightning",isPurchased:!1},{name:"death",isPurchased:!1}]}}))};const H=[]// Talent Track class objects storage
,R=new l(0,0),_={maxPoints:6,talentPath1:{name:"Talent Path 1",talents:[{name:"stack",prerequisite:null,altText:"A stack sprite representing Talent Track 1, Talent 1."},{name:"utensil",prerequisite:"stack",altText:"A fork and knife sprite representing Talent Track 1, Talent 2."},{name:"cake",prerequisite:"utensil",altText:"A cake sprite representing Talent Track 1, Talent 3."},{name:"crown",prerequisite:"cake",altText:"A crown sprite representing Talent Track 1, Talent 4."}]},talentPath2:{name:"Talent Path 2",talents:[{name:"boat",prerequisite:null,altText:"A boat sprite representing Talent Track 2, Talent 1."},{name:"scuba",prerequisite:"boat",altText:"A scuba gear sprite representing Talent Track 2, Talent 2."},{name:"lightning",prerequisite:"scuba",altText:"A lightning bolt sprite representing Talent Track 2, Talent 3."},{name:"death",prerequisite:"lightning",altText:"A skull sprite representing Talent Track 2, Talent 4."}]}};// Purchase a talent from a talent track.
// If there are points available to spend, allow the user to purchase a talent.
// Afterwards, subtract points from the point counter, update local storage,
// and update the sprite image that was purchased.
function E(e,t){try{if(H[e].talents[t].isPurchased)throw Error("Talent already purchased.");if(R.availablePoints>0)H[e].purchaseTalent(t),R.subtractPoint(),O(e,t),q(),N(e,t),I(e,t,!0);else throw Error("Not enough available points.")}catch(e){console.log(e)}}// Remove a talent from a talent track.
// Won't allow the user to gain more than the maxPoints value.
// If the user is removing a talent that has dependent talents, remove
// the dependents as well.
function A(e,t){this.event.preventDefault()// Prevent the right click context menu from displaying.
;try{H[e].removeTalent(t),R.availablePoints<R.maxPoints&&(R.addPoint(),q()),O(e,t),N(e,t),I(e,t,!1),t<H[e].talents.length-1&&H[e].talents[t+1].isPurchased&&A(e,t+1)}catch(e){console.log(e)}}// Update a talent in the user's data in localStorage.
function O(e,t){let a=JSON.parse(window.localStorage.getItem("userTrackState"));a["userTalentPath"+(e+1)].talents[t].isPurchased=H[e].talents[t].isPurchased,window.localStorage.setItem("userTrackState",JSON.stringify(a))}// Update the user's available points in localStorage.
function q(){let e=JSON.parse(window.localStorage.getItem("userTrackState"));e.availablePoints=R.availablePoints,window.localStorage.setItem("userTrackState",JSON.stringify(e))}// Update the sprite image to 'enabled' when the user hovers or focuses on a talent
// that hasn't been purchased yet.
function F(e,t){H[e].talents[t].highlight(),N(e,t)}// Update the sprite image to 'disabled' when the user hovers or focuses on a talent
// that hasn't been purchased yet.
function U(e,t){H[e].talents[t].deHighlight(),N(e,t)}// Update the sprite image to whatever is currently set on the talent object.
function N(e,t){document.querySelector("#"+H[e].talents[t].name+"-button img").src=o[H[e].talents[t].sprite]}function I(e,t,a){let n=document.querySelector("#"+H[e].talents[t].name+"-button"),s=document.querySelector("#"+H[e].talents[t].name+"-connector");a?(n.classList.remove("btn-disabled"),n.classList.add("btn-enabled"),s&&(s.classList.remove("connector-disabled"),s.classList.add("connector-enabled"))):(n.classList.add("btn-disabled"),n.classList.remove("btn-enabled"),s&&(s.classList.add("connector-disabled"),s.classList.remove("connector-enabled")))}window.onload=()=>{let e;Object.values(_).forEach(e=>{if(Object.prototype.hasOwnProperty.call(e,"name")){// Initialize the talent track class object
let t=new r(e.talents);H.push(t);let a="talent-track-"+e.name.substring(e.name.length-1),n='<div class="talent-track row mt-5 mb-5" id="'+a+'"></div>';document.getElementById("talents").insertAdjacentHTML("beforeend",n);// Create the talent track title
let s='<div class="col-12-xs col-2-lg text-center"><h2 class="talent-track-title mt-4 mb-4 text-light-grey">'+e.name+"</h2></div>";document.getElementById(a).insertAdjacentHTML("beforeend",s);// Create the talent track div
// const talentsDiv = '<div class="row" id="' + trackId + '-div"></div>'
// document.getElementById(trackId).insertAdjacentHTML('beforeend', talentsDiv)
// Create the talent buttons and insert them into the talent track div
// const talentsElement = document.getElementById(trackId + '-div')
for(let n=0;n<t.talents.length;n++){if(0!==n){let e='<div class="col-1-xs col-2-sm connector connector-disabled mt-1 mb-1" id="'+t.talents[n].name+'-connector"></div>';document.getElementById(a).insertAdjacentHTML("beforeend",e)}let s='<button class="col-1-xs col-1-sm sprite-btn btn-disabled p-1" type="button" id="'+t.talents[n].name+'-button">';s+='<img class="sprite-img" src="'+o[t.talents[n].sprite]+'" alt="'+e.talents[n].altText+'"></button>',document.getElementById(a).insertAdjacentHTML("beforeend",s);// talentsElement.insertAdjacentHTML('beforeend', talentButton)
let r=document.getElementById(t.talents[n].name+"-button");r.addEventListener("click",function(){E(H.indexOf(t),n)}),r.addEventListener("contextmenu",function(){A(H.indexOf(t),n)}),r.addEventListener("mouseover",function(){F(H.indexOf(t),n)}),r.addEventListener("mouseout",function(){U(H.indexOf(t),n)}),r.addEventListener("focus",function(){F(H.indexOf(t),n)}),r.addEventListener("blur",function(){U(H.indexOf(t),n)})}}}),// Create the point tracker.
R.availablePoints=_.maxPoints,R.maxPoints=_.maxPoints,e='<div class="point-tracker card bg-black pt-3 pb-3 ml-2 mr-2 mt-5 mb-5">'+('<h3 class="card-title text-dark-blue mt-1">Points Spent</h3>'+('<div class="card-body text-light-grey"><span id="spent-points">'+(R.maxPoints-R.availablePoints)+'</span> / <span id="max-points">')+R.maxPoints)+"</span></div></div>",document.getElementById("points").insertAdjacentHTML("beforeend",e),window.localStorage.getItem("userTrackState")||y(),// Update the talent tracks based on the values stored in localStorage.
// In a full stack application, this data would be retrieved via API.
function(){// Get the current user data
let e=JSON.parse(window.localStorage.getItem("userTrackState"));// Purchase talents according to the user data
Object.values(e).forEach(e=>{if(Object.prototype.hasOwnProperty.call(e,"name")){let t=parseInt(e.name.substring(e.name.length-1))-1;for(let a=0;a<e.talents.length;a++)e.talents[a].isPurchased&&E(t,a)}}),// Set the user's available points
R.availablePoints=e.availablePoints}()},window.purchaseTalent=E,window.removeTalent=A,window.highlightTalent=F,window.deHighlightTalent=U;//# sourceMappingURL=index.4ac43811.js.map

//# sourceMappingURL=index.4ac43811.js.map
