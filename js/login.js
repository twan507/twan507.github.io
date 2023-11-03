document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');

    form.onsubmit = function(event) {
        event.preventDefault();
        var userId = document.getElementById('userId').value;
        var password = document.getElementById('password').value;

        // Biến users được nạp từ file users.js bên ngoài
        // Đảm bảo file này đã được nạp trước khi script này chạy
        if (users[userId] && users[userId] === password) {
            localStorage.setItem('loggedIn', true);
            window.location.href = 'moneystream.html';
        } else {
            document.getElementById('message').innerText = 'ID hoặc mật khẩu không đúng. Vui lòng thử lại.';
        }
    };
    
    var loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        window.location.href = 'moneystream.html';
    }
});
