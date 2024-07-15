document.getElementById('one-way').addEventListener('click', function() {
    setActiveTab('one-way');
});

document.getElementById('round-trip').addEventListener('click', function() {
    setActiveTab('round-trip');
});

document.getElementById('outstation').addEventListener('click', function() {
    setActiveTab('outstation');
});

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
}
document.getElementById('one-way').addEventListener('click', function() {
    setActiveTab('one-way');
});

document.getElementById('round-trip').addEventListener('click', function() {
    setActiveTab('round-trip');
});

document.getElementById('outstation').addEventListener('click', function() {
    setActiveTab('outstation');
});

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
}

// Login/Signup functionality (basic)
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Login with Username: ${username}, Password: ${password}`);
});

document.getElementById('signup-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Signup with Username: ${username}, Password: ${password}`);
});
