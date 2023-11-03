function updateIframeSize() {
  const originWidth = 1200; // Chiều rộng ban đầu mà bạn muốn giữ tỷ lệ
  const originHeight = 3600; // Chiều cao ban đầu mà bạn muốn giữ tỷ lệ
  const iframe = document.querySelector('.iframe-style'); // Lấy iframe từ trang
  const currentWidth = window.innerWidth; // Lấy chiều rộng hiện tại của cửa sổ

  let newHeight;

  if (currentWidth < originWidth) {
    // Tính toán sự thay đổi chiều cao dựa trên mỗi pixel giảm của chiều rộng
    const widthDecrease = originWidth - currentWidth; // Lượng pixel giảm của chiều rộng
    newHeight = originHeight - (widthDecrease * 3); // Giảm 3 pixels chiều cao cho mỗi pixel giảm chiều rộng
  } else {
    // Nếu chiều rộng hiện tại lớn hơn hoặc bằng chiều rộng ban đầu, giữ nguyên chiều cao ban đầu
    newHeight = originHeight;
  }

  // Đặt chiều cao mới cho iframe
  iframe.style.height = `${newHeight}px`;
}

window.addEventListener('resize', updateIframeSize); // Thêm event listener để cập nhật kích thước khi cửa sổ được resize
document.addEventListener('DOMContentLoaded', updateIframeSize); // Cập nhật kích thước ban đầu khi tải trang
