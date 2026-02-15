function renderNav(rootPath) {
    const prefix = rootPath === '.' ? '' : rootPath + '/';

    const navHtml = `
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <nav class="container">
        <div class="logo">
            <a href="${prefix}index.html" style="display: flex; align-items: center;">
                <img src="${prefix}images/logo.svg" alt="DataSurface Logo">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="${prefix}index.html">Home</a></li>
            <li><a href="${prefix}how-it-works.html">How It Works</a></li>
            <li><a href="${prefix}for-executives.html">For CTOs/CDOs</a></li>
            <li class="dropdown">
                <button class="dropdown-trigger" aria-expanded="false" aria-haspopup="true">Platform &#9662;</button>
                <div class="dropdown-menu" role="menu">
                    <a href="${prefix}workflow.html" role="menuitem">Git-Backed Workflow</a>
                    <a href="${prefix}multi-platform.html" role="menuitem">Multi-Platform Agility</a>
                    <a href="${prefix}consumer-aligned.html" role="menuitem">Consumer Aligned</a>
                    <a href="${prefix}cqrs.html" role="menuitem">CQRS Architecture</a>
                    <a href="${prefix}scd2.html" role="menuitem">Automated History (SCD2)</a>
                    <a href="${prefix}schema-evolution.html" role="menuitem">Schema Evolution</a>
                    <a href="${prefix}governance.html" role="menuitem">Governance & Policy</a>
                    <a href="${prefix}audit.html" role="menuitem">Audit & Control</a>
                    <a href="${prefix}compliance.html" role="menuitem">SOC 2 Compliance</a>
                    <a href="${prefix}cdc.html" role="menuitem">Change Data Capture</a>
                    <a href="${prefix}observability.html" role="menuitem">Observability</a>
                    <a href="${prefix}datatransformers.html" role="menuitem">DataTransformers & DBT</a>
                    <a href="${prefix}runtime-environments.html" role="menuitem">Runtime Environments</a>
                    <a href="${prefix}platform-operations.html" role="menuitem">Platform Operations</a>
                </div>
            </li>
            <li><a href="${prefix}solutions.html">Solutions & Services</a></li>
            <li><a href="${prefix}use-cases/index.html">Use Cases</a></li>
            <li><a href="${prefix}examples/index.html">Model Examples</a></li>
            <li><a href="${prefix}blog/index.html">Blog</a></li>
            <li><a href="${prefix}about.html">About</a></li>
            <li><a href="${prefix}contact.html" class="nav-cta">Contact Us</a></li>
        </ul>
        <button class="mobile-menu-toggle" aria-label="Open navigation menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
    </nav>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" aria-hidden="true">
        <div class="mobile-nav-panel">
            <div class="mobile-nav-header">
                <div class="logo">
                    <a href="${prefix}index.html" style="display: flex; align-items: center;">
                        <img src="${prefix}images/logo.svg" alt="DataSurface Logo">
                    </a>
                </div>
                <button class="mobile-nav-close" aria-label="Close navigation menu">
                    <span class="close-line"></span>
                    <span class="close-line"></span>
                </button>
            </div>
            <ul class="mobile-nav-links">
                <li><a href="${prefix}index.html">Home</a></li>
                <li><a href="${prefix}how-it-works.html">How It Works</a></li>
                <li><a href="${prefix}for-executives.html">For CTOs/CDOs</a></li>
                <li class="mobile-nav-section-label">Platform</li>
                <li class="mobile-nav-sub"><a href="${prefix}workflow.html">Git-Backed Workflow</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}multi-platform.html">Multi-Platform Agility</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}consumer-aligned.html">Consumer Aligned</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}cqrs.html">CQRS Architecture</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}scd2.html">Automated History (SCD2)</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}schema-evolution.html">Schema Evolution</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}governance.html">Governance & Policy</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}audit.html">Audit & Control</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}compliance.html">SOC 2 Compliance</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}cdc.html">Change Data Capture</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}observability.html">Observability</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}datatransformers.html">DataTransformers & DBT</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}runtime-environments.html">Runtime Environments</a></li>
                <li class="mobile-nav-sub"><a href="${prefix}platform-operations.html">Platform Operations</a></li>
                <li><a href="${prefix}solutions.html">Solutions & Services</a></li>
                <li><a href="${prefix}use-cases/index.html">Use Cases</a></li>
                <li><a href="${prefix}examples/index.html">Model Examples</a></li>
                <li><a href="${prefix}blog/index.html">Blog</a></li>
                <li><a href="${prefix}about.html">About</a></li>
                <li class="mobile-nav-cta"><a href="${prefix}contact.html">Contact Us</a></li>
            </ul>
        </div>
    </div>
    `;

    document.querySelector('header').innerHTML = navHtml;

    // Mobile menu event handlers
    var toggle = document.querySelector('.mobile-menu-toggle');
    var overlay = document.querySelector('.mobile-nav-overlay');
    var closeBtn = document.querySelector('.mobile-nav-close');

    if (toggle && overlay && closeBtn) {
        function openMobileMenu() {
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', openMobileMenu);
        closeBtn.addEventListener('click', closeMobileMenu);

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
}
