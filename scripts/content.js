chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var data = request.data;
    if(data === 'login'){
        console.log("Login");

        $('#username').val('test-user')
        $('#password').val('test-pass')
        $('.btn-sign-in').click()
    } else if(data === 'student'){
        console.log('student')
        $('html').removeClass('role-type-staff').removeClass('role-type-parent').addClass('role-type-student'); 

    } else if(data === 'staff'){
        console.log('staff')
        $('html').removeClass('role-type-student').removeClass('role-type-parent').addClass('role-type-staff');
    }else if(data === 'parent'){
        console.log('parent')
        $('html').removeClass('role-type-staff').removeClass('role-type-student').addClass('role-type-parent');
    }

    sendResponse({data: data, success: true});
});