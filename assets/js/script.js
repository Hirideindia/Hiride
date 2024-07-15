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
