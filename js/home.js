// Hàm loading screen
document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('overlay');

  function showOverlay() {
    overlay.style.display = 'block';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 3000);
  }
  
  showOverlay(); // Gọi hàm ngay khi trang tải xong
});



// Hàm cập nhật kích thước iframe
function updateIframeSize() {
  const iframe = document.querySelector('.iframe-style');
  // Lấy giá trị từ thuộc tính width và height của thẻ iframe
  const originWidth = parseInt(iframe.width, 10);
  const originHeight = parseInt(iframe.height, 10);

  const currentWidth = window.innerWidth;
  let newHeight = originHeight;

  if (currentWidth < originWidth) {
    const widthDecrease = originWidth - currentWidth;
    newHeight -= widthDecrease * (originHeight/originWidth - 0.03);
  }

  // Đặt chiều cao mới cho iframe
  iframe.style.height = `${newHeight}px`;
}

window.addEventListener('resize', updateIframeSize); // Thêm event listener để cập nhật kích thước khi cửa sổ được resize
document.addEventListener('DOMContentLoaded', updateIframeSize); // Cập nhật kích thước ban đầu khi tải trang



// Hàm thêm hình chữ nhật màu đen vào cuối container
function addOverlayToContainer() {
  // Find the container element
  var container = document.querySelector('.container');

  // Create a new div element for the overlay
  var overlay = document.createElement('div');

  // Style the overlay
  overlay.style.position = 'absolute'; // Position it absolutely within the container
  overlay.style.bottom = '0'; // Align it to the bottom of the container
  overlay.style.left = '0'; // Align it to the left of the container
  overlay.style.width = '100%'; // Make it as wide as the container
  overlay.style.height = '70px'; // Set the height of the overlay
  overlay.style.backgroundColor = 'rgba(0, 0, 0)'; // Set the background color and opacity
  overlay.style.zIndex = '1000'; // Ensure it sits on top of other content

  // Append the overlay to the container
  container.style.position = 'relative'; // Ensure the container can hold absolute elements
  container.appendChild(overlay);
}

// Run the function to add the overlay
addOverlayToContainer();


// Hàm đổi hướng đăng nhập
var loggedIn = localStorage.getItem('loggedIn');
var loginTime = localStorage.getItem('loginTime');

if (loggedIn) {
    var currentTime = new Date().getTime();
    var timeDiff = currentTime - loginTime;

    if (timeDiff > 24 * 60 * 60 * 1000) { // 24 giờ tính bằng milliseconds
        logout(); // Gọi hàm đăng xuất nếu đã quá 24 giờ
    } 
    // else {
    //     window.location.href = 'tong_quan_thi_truong.html';
    // }
} else {
    window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loginTime'); // Xóa cả timestamp
    window.location.href = 'login.html';
}
