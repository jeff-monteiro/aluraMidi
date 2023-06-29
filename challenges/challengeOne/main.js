const keyList = document.querySelectorAll('input[type=button]');
//const inputPhone = document.querySelector('.inputTel');

for(let index = 0; index < keyList.length; index++) {

    const key = keyList[index];
    key.onclick = function(){
        inputPhone.value = inputPhone.value + key.value;
    }

    key.onkeydown = function (event) {
      if(event.code === "Enter" || event.code === "Space"){
        key.classList.add("clicked");
      }
    }

    key.onkeyup = function () {
        key.classList.remove("clicked");
    }
}