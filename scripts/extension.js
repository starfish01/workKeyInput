document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('onLogin');
    var studentButton = document.getElementById('onSwitchStudent');
    var staffButton = document.getElementById('onSwitchStaff');
    var parentButton = document.getElementById('onSwitchParent');
    var guestButton = document.getElementById('onSwitchGuest');

    loginButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:'login'}, function(response) {
                console.log('success');
            });
        });
    });
    studentButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:'student'}, function(response) {
                console.log('success');
            });
        });
    });
    staffButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:'staff'}, function(response) {
                console.log('success');
            });
        });
    });
    parentButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:'parent'}, function(response) {
                console.log('success');
            });
        });
    });
    guestButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:'guest'}, function(response) {
                console.log('success');
            });
        });
    });


});

