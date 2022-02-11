let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

    form.addEventListener('submit', (error) => {
        error.preventDefault();

        validation(username, 0, 'Username cannot be blank');
        validation(email, 1, 'Email cannot be blank');
        validation(password, 2, 'Password cannot be blank');
    });

    let validation = (id, serial, message) => {
        
        if(id.value.trim() === '') {
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = '1';
            successIcon[serial].style.opacity = '0';
        }else {
            errorMsg[serial].innerHTML = '';
            successIcon[serial].style.opacity = '1';
            failureIcon[serial].style.opacity = '0';
        }
    };

