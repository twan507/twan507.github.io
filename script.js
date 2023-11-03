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



