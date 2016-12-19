function validate() {
    let submBtn = $('#submit');

    let patternUserName = new RegExp('\\b[a-zA-Z0-9]{3,20}\\b', 'g');
    let patternPassword = new RegExp('\\b\\w{5,15}\\b', 'g');
    let patternConfirm = new RegExp('\\b\\w{5,15}\\b', 'g');
    let patternEmail = new RegExp('\\.*@\\.*\.+\\.*', 'g');

    $('#company:checkbox').on('click', function () {
        if ($('#company:checkbox').is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });

    submBtn.on('click', function (ev) {
        ev.preventDefault();

        let username = $('#username');
        let password = $('#password');
        let confirmPassword = $('#confirm-password');
        let email = $('#email');
        let userVld, passVld, confPassVld, emailVld, compVld;

        patternUserName.test(username.val()) ?
            userVld = true
            : username.css('border', '2px solid red');

        patternEmail.test(email.val()) ?
            emailVld = true
            : email.css('border', '2px solid red');

        console.log(patternPassword.test(password.val()));
        patternPassword.test(password.val()) ?
            passVld = true
            : password.css('border', '2px solid red');

        let pass1 = password.val().toString();
        let pass2 = confirmPassword.val().toString();

        if (patternConfirm.test(confirmPassword.val())) {
            if (pass1 == pass2) {
                confPassVld = true;
            } else {
                confirmPassword.css('border', '2px solid red');
            }
        }
        if ($('#company:checkbox').is(':checked')) {
            let companyNumber = $('#companyNumber');
            if (Number(companyNumber.val()) >= 1000 && Number(companyNumber.val()) <= 9999) {
                compVld = true;
            } else {
                compVld = false;
                companyNumber.css('border', '2px solid red');
            }
        }
        if (!$('#company:checkbox').is(':checked')) {
            compVld = true;
        }

        if (userVld && passVld && confPassVld && emailVld) {
            $('#valid').css('display', 'block');
        }
    });
}
