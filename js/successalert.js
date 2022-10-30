function message(){
    var Name = document.getElementById('name')
    var mobile = document.getElementById('mobile')
    var email = document.getElementById('email')
    var msg = document.getElementById('msg')
    const success = document.getElementById('success')
    const danger = document.getElementById('danger')

    if(Name.value === '' || mobile.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            mobile.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

}