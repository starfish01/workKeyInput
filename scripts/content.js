chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const data = request.data;

    if (data === 'login') {
        document.getElementById('username').value = 'test-user';
        document.getElementById('password').value = 'test-pass';
        document.getElementsByClassName('btn-sign-in')[0].click();
    } else {
        const htmlElement = document.getElementsByTagName('html')[0];
        removeClasses(htmlElement);
        addNewClass(data, htmlElement);
    }

    function addNewClass(userType, htmlElement) {
        htmlElement.classList.add('role-type-' + userType);
    }

    function removeClasses(htmlElement) {
        htmlElement.classList.remove('role-type-staff');
        htmlElement.classList.remove('role-type-parent');
        htmlElement.classList.remove('role-type-student');
        htmlElement.classList.remove('role-type-guest');
    }

    sendResponse({data: data, success: true});
});