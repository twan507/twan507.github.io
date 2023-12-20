document.addEventListener('DOMContentLoaded', function () {
    // Nội dung HTML cho header
    var headerHTML = `
        <header>
            <div class="logo-container">
                <a href="index.html"><img src="photo/logo.png" alt="Header Logo" id="header-logo"></a>
            </div>

            <a href="tong_quan_thi_truong.html"><button id="page1-btn" class="nav-btn">Tổng quan thị trường</button></a>
            <a href="dong_tien_thi_truong.html"><button id="page2-btn" class="nav-btn">Dòng tiền thị trường</button></a>
            <a href="dong_tien_nhom_nganh.html"><button id="page3-btn" class="nav-btn">Dòng tiền nhóm ngành</button></a>
            <a href="bo_loc_co_phieu.html"><button id="page4-btn" class="nav-btn">Bộ lọc cổ phiếu</button></a>

            <div class="logout-container" onclick="logout();" style="cursor: pointer;">
            <a>
                <p>Đăng xuất</p>
                <img src="photo/logout.png" alt="Đăng xuất" class="logout-btn"/>
            </a>
            </div>

        </header>
    `;
    
    // Nội dung HTML cho footer
    var footerHTML = `
        <footer class="footer">
            <div class="footer-inner">
        
                <div class="footer-section-left">
                    <a href="index.html">
                        <img src="photo/slogo.png" alt="T2M Logo" class="footer-logo">
                    </a>
                    <div class="footer-links">
                        <a href="disclaimers.html">Tuyên bố trách nhiệm - T2M Invest</a>
                    </div>
                </div>
        
            <div class="footer-section-right" id="fs1">
                <p class="footer-title">Sản phẩm</p>
                <ul>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Phân tích dòng tiền</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Phân tích nhóm ngành</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Bộ lọc chuyên sâu</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Danh mục đầu tư T2M</a></li>
                </ul>
            </div>
        
            <div class="footer-section-right" id="fs2">
                <p class="footer-title">T2M Learning</p>
                <ul>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Hướng dẫn sử dụng</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Kiến thức đầu tư</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Phân tích kĩ thuật</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Đầu tư chuyên nghiệp</a></li>
                </ul>
            </div>
        
            <div class="footer-section-right" id="fs3">
                <p class="footer-title">Hỗ trợ</p>
                <ul>
                <li><a href="https://www.facebook.com/t2m.invest">Facebook</a></li>
                <li><a href="https://t.me/+U3k02NxS8ygwMGE1">Telegram</a></li>
                <li><a href="https://zalo.me/0338662238">Zalo</a></li>
                </ul>
            </div>
            
            </div>
            <div class="footer-bottom">
            <p>© 2023 T2M Invest | Liên hệ: (+84) 338 662 238</p>
            </div>
        </footer>
    `;
  
    // Chèn header và footer vào trang
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
  });
  