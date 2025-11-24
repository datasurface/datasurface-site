function renderFooter(rootPath) {
    // Handle path prefix for nested pages
    const prefix = (!rootPath || rootPath === '.') ? '' : rootPath + '/';
    
    const footerHtml = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-info">
                <div class="footer-brand">
                    <strong>DataSurface Inc</strong>
                </div>
                <div class="footer-contact">
                    <p>7901 4th St N, STE 300<br>St. Petersburg, FL 33702, USA</p>
                    <p>Ph: <a href="tel:+13522543008">(352) 254-3008</a></p>
                    <p><a href="mailto:info@datasurface.com">info@datasurface.com</a></p>
                </div>
            </div>
            <div class="footer-links">
                <a href="${prefix}contact.html">Contact</a>
                <a href="${prefix}about.html">About</a>
                <a href="${prefix}blog/index.html">Blog</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DataSurface. All rights reserved.</p>
        </div>
    </div>
    `;

    document.querySelector('footer').innerHTML = footerHtml;
}

