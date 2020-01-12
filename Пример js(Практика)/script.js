function check(){
	let box=document.getElementById('one');
	

	if (box.checked) {
		alert("Галочка поставлена");
	}
	else{
		alert("Галочка уже поставлена");
	}
}

function test(){
	let dot=document.getElementsByName("r1");
	for (let i = 0; i <dot.length; i++) {
		if (dot[i].checked) {
			alert("Выбран"+i+"'элемент");
		}
	}
}

function range1(){
	let rng= document.getElementById("run");
	let p = document.getElementById("number");
	p.innerHTML=rng.value;
}

function fruit(){
	let sel= document.getElementById("mySelect").selectedIndex;
	let options= document.getElementById("mySelect").options;
	alert("Выбрана опция"+options[sel].text);
}

function generator(){
	let rtl=document.getElementById('rtl').value;
	let rtr=document.getElementById('rtr').value;
	let rbr=document.getElementById('rbr').value;
	let rbl=document.getElementById('rbl').value;
	let ttl=document.getElementById('ttl');
	let ttr=document.getElementById('ttr');
	let tbr=document.getElementById('tbr');
	let tbl=document.getElementById('tbl');

	let block = document.getElementById('block');

	ttl.value=rtl;
	ttr.value=rtr;
	tbr.value=rbr;
	tbl.value=rbl;

	block.style.borderRadius=rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px ';
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

/*Slider*/

let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex+=n);
}

function currentSlide(n){
	showSlides(slideIndex=n);
}
function showSlides(n){
	let i;
	let slides=document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (n>slides.length) {
		slideIndex=1;
	}
	if (n<1) {
		slideIndex=slides.length;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace("active","");
	}
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className+="active";
}

