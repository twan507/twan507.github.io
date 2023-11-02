// Hàm cập nhật kích thước iframe
// function updateIframeSize() {
//     var origin_height = 3660;
//     const origin_width = 1200;
//     const iframe = document.querySelector('.iframe-style');
//     const currentWidth = window.innerWidth;
  
//     if (currentWidth < origin_width) {
//       const newHeight = origin_height - 3.08 * (origin_width - currentWidth);
//       iframe.style.height = `${newHeight}px`;
//     } else {
//       iframe.style.height = `${origin_height}px`;
//     }
//   }
  
//   // Thêm event listener để cập nhật kích thước khi cửa sổ được resize
//   window.addEventListener('resize', updateIframeSize);
  
//   // Cập nhật kích thước ban đầu khi tải trang
//   document.addEventListener('DOMContentLoaded', updateIframeSize);


function updateIframeSize() {
  const originHeight = 3660;
  const originWidth = 1200;
  const iframe = document.querySelector('.iframe-style');
  const currentWidth = window.innerWidth;
  const scaleFactor = currentWidth < originWidth ? (currentWidth / originWidth) : 1;

  iframe.style.height = `${originHeight * scaleFactor}px`;
}

// Thêm event listener để cập nhật kích thước khi cửa sổ được resize
window.addEventListener('resize', updateIframeSize);

// Cập nhật kích thước ban đầu khi tải trang
document.addEventListener('DOMContentLoaded', updateIframeSize);

