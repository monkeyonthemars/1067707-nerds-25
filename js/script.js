  var link = document.querySelector(".button-contacts");   
  var popup = document.querySelector(".write-us");   
  var close = popup.querySelector(".modal-close");   
  var form = popup.querySelector("form");   
  var nickname = popup.querySelector(".name");
  var email = popup.querySelector(".email"); 
  var text = popup.querySelector(".text"); 
  
  var isStorageSupport = true;   
  var storage_nickname = ""; 
  var storage_email = ""; 

  try {     
    storage_nickname = localStorage.getItem("nickname");   
    storage_email = localStorage.getItem("email");
  } catch (err) {     
    isStorageSupport = false;   
  } 
  
  link.addEventListener("click", function (evt) {     
    evt.preventDefault();     
    popup.classList.add("modal-show"); 

    if (storage_nickname) {       
      nickname.value = storage_nickname;       
      email.focus();    
    } else {       
      nickname.focus();    
    }  
    
    if (storage_email) {       
      email.value = storage_email;       
      text.focus();     
    } else {       
      email.focus();     
    }
  }); 

  close.addEventListener("click", function (evt) { 
    evt.preventDefault();     
    popup.classList.remove("modal-show");     
    popup.classList.remove("modal-error");   
  }); 

  form.addEventListener("submit", function (evt) {     
    if (!nickname.value) {
      nickname.classList.add("emptyfield"); 
    } else {
      nickname.classList.remove("emptyfield");  
    }

    if (!email.value) {
      email.classList.add("emptyfield"); 
    } else {
      email.classList.remove("emptyfield");  
    }

    if (!text.value) {
      text.classList.add("emptyfield"); 
    } else {
      text.classList.remove("emptyfield");  
    }
    
    if (!nickname.value || !email.value || (!text.value)) {       
      evt.preventDefault();       
      popup.classList.remove("modal-error");       
      popup.offsetWidth = popup.offsetWidth;       
      popup.classList.add("modal-error");   
    } else {       
      if (isStorageSupport) {         
        localStorage.setItem("nickname", nickname.value);  
        localStorage.setItem("email", email.value);      
      }     
    }   
  }); 

  window.addEventListener("keydown", function (evt) {     
    if (evt.keyCode === 27) {       
      if (popup.classList.contains("modal-show")) {         
        evt.preventDefault();         
        popup.classList.remove("modal-show");         
        popup.classList.remove("modal-error");       
      }     
    }   
  });

  ymaps.ready(function(){
    var map = new ymaps.Map(document.querySelector(".map"), {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: []
    });
  
    map.behaviors.disable('scrollZoom');
  
    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: 'default#image',
      iconImageHref: "img/map-marker.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-50, -200]
    });
  
    map.geoObjects
      .add(myPlacemark);
  });