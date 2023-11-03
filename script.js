document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('iframe-container');
  var overlay = document.getElementById('overlay');

  // Define your iframe HTML strings here
  var iframes = {
    page1: '<iframe title="moneystream_2" class="iframe-style" width="1200px" height="3640px" src="https://app.powerbi.com/view?r=eyJrIjoiNDczN2NiNDctZDE5Ni00YzNhLWJhNTMtMWYxOWU2NDYzNzE3IiwidCI6IjUxZmUxNTRlLThlNTYtNGM2NC05ZDM5LTU2NTc0ZDk3MmU1YyIsImMiOjEwfQ%3D%3D" frameborder="0" style="background-color: #000;"></iframe>',
    page2: '<iframe title="moneystream_2" class="iframe-style" width="1200px" height="2240px" src="https://app.powerbi.com/view?r=eyJrIjoiNWQ4ZjVhMGUtOTkzZS00OTA3LWJlMWEtMWYzMTE5NjA0MGY5IiwidCI6IjUxZmUxNTRlLThlNTYtNGM2NC05ZDM5LTU2NTc0ZDk3MmU1YyIsImMiOjEwfQ%3D%3D" frameborder="0" style="background-color: #000;"></iframe>',
    page3: '<iframe title="moneystream_2" class="iframe-style" width="1200px" height="3340px" src="https://app.powerbi.com/view?r=eyJrIjoiNmIyMGQxZWEtNmRhOC00OGJlLWFiNzEtN2QxMjg4ZTgyN2U0IiwidCI6IjUxZmUxNTRlLThlNTYtNGM2NC05ZDM5LTU2NTc0ZDk3MmU1YyIsImMiOjEwfQ%3D%3D" frameborder="0" style="background-color: #000;"></iframe>',
    page4: '<iframe title="moneystream_2" class="iframe-style" width="1200px" height="2490px" src="https://app.powerbi.com/view?r=eyJrIjoiZGUxNTAxZmQtZmM3Zi00MTU2LTljZjAtYzM5MTE1Nzg4NzQwIiwidCI6IjUxZmUxNTRlLThlNTYtNGM2NC05ZDM5LTU2NTc0ZDk3MmU1YyIsImMiOjEwfQ%3D%3D" frameborder="0" style="background-color: #000;"></iframe>'
  };

  function changeIframeContent(page) {
    container.innerHTML = iframes[page];
    showOverlay();
  }

  function showOverlay() {
    overlay.style.display = 'block';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 3000);
  }

  // Event listeners for buttons
  document.getElementById('page1-btn').addEventListener('click', function() { changeIframeContent('page1'); });
  document.getElementById('page2-btn').addEventListener('click', function() { changeIframeContent('page2'); });
  document.getElementById('page3-btn').addEventListener('click', function() { changeIframeContent('page3'); });
  document.getElementById('page4-btn').addEventListener('click', function() { changeIframeContent('page4'); });

  // Initialize with the content of page 1
  changeIframeContent('page1');
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

