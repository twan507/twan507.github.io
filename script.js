// Hàm cập nhật kích thước iframe
function updateIframeSize() {
  const iframe = document.querySelector('.iframe-style');
  // Lấy giá trị từ thuộc tính width và height của thẻ iframe
  const originWidth = parseInt(iframe.width, 10);
  const originHeight = parseInt(iframe.height, 10);

  const currentWidth = window.innerWidth;
  let newHeight = originHeight;

  if (currentWidth < originWidth) {
    // Tính toán sự thay đổi chiều cao dựa trên mỗi pixel giảm của chiều rộng
    const widthDecrease = originWidth - currentWidth;
    // newHeight -= widthDecrease * 1.8;
    newHeight -= widthDecrease * (originHeight/originWidth - 0.06);
  }

  // Đặt chiều cao mới cho iframe
  iframe.style.height = `${newHeight}px`;
}

window.addEventListener('resize', updateIframeSize); // Thêm event listener để cập nhật kích thước khi cửa sổ được resize
document.addEventListener('DOMContentLoaded', updateIframeSize); // Cập nhật kích thước ban đầu khi tải trang


// Hàm chuyển đổi page
document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Ngăn chặn sự kiện mặc định của thẻ <a>

      // Lấy giá trị sau dấu '#' và thêm '.html' vào sau để tạo thành tên file
      const page = link.getAttribute('href').substring(1) + '.html';

      // Chuyển hướng đến trang tương ứng
      window.location.href = page;
    });
  });
});

// Hàm sử dụng màn hình đen che phần loading
document.addEventListener('DOMContentLoaded', (event) => {
  // Hiển thị overlay ngay khi trang được tải
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';

  // Ẩn overlay sau 3 giây
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
});


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
  overlay.style.height = '60px'; // Set the height of the overlay
  overlay.style.backgroundColor = 'rgba(0, 0, 0)'; // Set the background color and opacity
  overlay.style.zIndex = '1000'; // Ensure it sits on top of other content

  // Append the overlay to the container
  container.style.position = 'relative'; // Ensure the container can hold absolute elements
  container.appendChild(overlay);
}

// Run the function to add the overlay
addOverlayToContainer();

