document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".js-hamburger");
  const gmenu = document.querySelector(".p-gmenu");
  const list = document.querySelector(".list");
  const body = document.body;

  hamburger.addEventListener("click", function() {
    this.classList.toggle("is-open");
    gmenu.classList.toggle("is-open");
    body.classList.toggle("is-open");
    list.classList.toggle("is-open");
    	if(list.classList.contains("is-open")){
	   list.style.height = "auto";
	}else{
	   list.style.height = "0";
	}
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const fir = document.querySelector(".first");
  
  const tes = document.querySelector(".test");
  const subb = document.querySelector(".sub--list");
  const subbb = document.querySelector(".sub---list");
  const subbbb = document.querySelector(".sub----list");
  const subbbbb = document.querySelector(".sub-----list");
  const subbbbbb = document.querySelector(".sub------list");


  fir.addEventListener("mouseleave", function() {
    tes.classList.remove("is-open");
    subb.classList.remove("is-open");
    subbb.classList.remove("is-open");
    subbbb.classList.remove("is-open");
    subbbbb.classList.remove("is-open");
    subbbbbb.classList.remove("is-open");
    
    subb.style.height = "0";
    subbb.style.height = "0";
    subbbb.style.height = "0";
    subbbbb.style.height = "0";
    subbbbbb.style.height = "0";
  });


  fir.addEventListener("mouseenter", function() {
    tes.classList.add("is-open");
    subb.classList.add("is-open");
    subbb.classList.add("is-open");
    subbbb.classList.add("is-open");
    subbbbb.classList.add("is-open");
    subbbbbb.classList.add("is-open");
    subb.style.height = subb.scrollHeight + 'px';
    subbb.style.height = subb.scrollHeight + 'px';
    subbbb.style.height = subb.scrollHeight + 'px';
    subbbbb.style.height = subb.scrollHeight + 'px';
    subbbbbb.style.height = subb.scrollHeight + 'px';
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const sec = document.querySelector(".second");
  const subj = document.querySelector(".subject");
  const subl = document.querySelector(".sublist");
  const suba = document.querySelector(".sublist-a");
  const subB = document.querySelector(".sublist-B");
  const subc = document.querySelector(".sublist-c");
  const subd = document.querySelector(".sublist-d");
  const sube = document.querySelector(".sublist-e");
  const subf = document.querySelector(".sublist-f");
  const subg = document.querySelector(".sublist-g");


  sec.addEventListener("mouseleave", function() {
    subj.classList.remove("is-open");
    suba.classList.remove("is-open");
    subB.classList.remove("is-open");
    subc.classList.remove("is-open");
    subd.classList.remove("is-open");
    sube.classList.remove("is-open");
    subf.classList.remove("is-open");
    subg.classList.remove("is-open");
    suba.style.height = "0";
    subB.style.height = "0";
    subc.style.height = "0";
    subd.style.height = "0";
    sube.style.height = "0";
    subf.style.height = "0";
    subg.style.height = "0";
  });


  sec.addEventListener("mouseenter", function() {
    subj.classList.add("is-open");
    suba.classList.add("is-open");
    subB.classList.add("is-open");
    subc.classList.add("is-open");
    subd.classList.add("is-open");
    sube.classList.add("is-open");
    subf.classList.add("is-open");
    subg.classList.add("is-open");
    suba.style.height = suba.scrollHeight + 'px';
    subB.style.height = subB.scrollHeight + 'px';
    subc.style.height = subc.scrollHeight + 'px';
    subd.style.height = subd.scrollHeight + 'px';
    sube.style.height = sube.scrollHeight + 'px';
    subf.style.height = subf.scrollHeight + 'px';
    subg.style.height = subg.scrollHeight + 'px';
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const trd = document.querySelector(".third");
  const menua = document.querySelector(".menu-a");
  const submenua = document.querySelector(".submenu-a");

  trd.addEventListener("mouseleave", function() {
    menua.classList.remove("is-open");
    submenua.classList.remove("is-open");
    submenua.style.height = "0";
  });


  trd.addEventListener("mouseenter", function() {
    menua.classList.add("is-open");
    submenua.classList.add("is-open");
    submenua.style.height = submenua.scrollHeight + 'px';

  });
});

document.addEventListener("DOMContentLoaded", function() {
  const fou = document.querySelector(".fourth");
  const menub = document.querySelector(".menu-b");
  const submenub = document.querySelector(".submenu-b");

  fou.addEventListener("mouseleave", function() {
    menub.classList.remove("is-open");
    submenub.classList.remove("is-open");
    submenub.style.height = "0";
  });


  fou.addEventListener("mouseenter", function() {
    menub.classList.add("is-open");
    submenub.classList.add("is-open");
    submenub.style.height = submenub.scrollHeight + 'px';

  });
});

document.addEventListener("DOMContentLoaded", function() {
  const fif = document.querySelector(".fifth");
  const menuc = document.querySelector(".menu-c");
  const submenuc = document.querySelector(".submenu-c");

  fif.addEventListener("mouseleave", function() {
    menuc.classList.remove("is-open");
    submenuc.classList.remove("is-open");
    submenuc.style.height = "0";
  });


  fif.addEventListener("mouseenter", function() {
    menuc.classList.add("is-open");
    submenuc.classList.add("is-open");
    submenuc.style.height = submenuc.scrollHeight + 'px';

  });
});


document.addEventListener("DOMContentLoaded", function() {
  const pl = document.querySelector(".plus");

  pl.addEventListener("click", function() {
    this.classList.toggle("show");

});


});
