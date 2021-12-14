const secondary_btn_sign_in = document.getElementById("secondary-btn-sign-in");
const secondary_btn_sign_up = document.getElementById("secondary-btn-sign-up");
const sign_in_form = document.getElementById("sign-in-form");
const sign_up_form = document.getElementById("sign-up-form");
const  sign_in_aside_area = document.getElementById("sign-in-aside-area");
const  sign_up_aside_area = document.getElementById("sign-up-aside-area");

secondary_btn_sign_in.addEventListener('click', function (){
    sign_in_form.classList.add("active-form-area");
    sign_up_form.classList.add("active-form-area");
    sign_in_aside_area.classList.add("active-aside-area");
    sign_up_aside_area.classList.add("active-aside-area");
})

secondary_btn_sign_up.addEventListener('click', function (){
    sign_in_form.classList.remove("active-form-area");
    sign_up_form.classList.remove("active-form-area");
    sign_in_aside_area.classList.remove("active-aside-area");
    sign_up_aside_area.classList.remove("active-aside-area");
})