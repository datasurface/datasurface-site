function renderNav(rootPath) {
    // Ensure rootPath ends with a slash if it's not empty, unless it's just "." or ".." 
    // Actually, cleaner to just expect "." or ".." or "../.." and append "/" for files.
    
    const prefix = rootPath === '.' ? '' : rootPath + '/';
    const cssPrefix = rootPath === '.' ? 'css' : '../css'; // Assuming css is always one level up from nested or same level as root
    // Wait, style.css is in css/ relative to root.
    // If rootPath is ".", css is "css/style.css".
    // If rootPath is "..", css is "../css/style.css".
    
    const navHtml = `
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
                <div class="dropdown-trigger">Platform ▾</div>
                <div class="dropdown-menu">
                    <a href="${prefix}workflow.html">Git-Backed Workflow</a>
                    <a href="${prefix}multi-platform.html">Multi-Platform Agility</a>
                    <a href="${prefix}consumer-aligned.html">Consumer Aligned</a>
                    <a href="${prefix}cqrs.html">CQRS Architecture</a>
                    <a href="${prefix}scd2.html">Automated History (SCD2)</a>
                    <a href="${prefix}schema-evolution.html">Schema Evolution</a>
                    <a href="${prefix}governance.html">Governance & Policy</a>
                    <a href="${prefix}audit.html">Audit & Control</a>
                </div>
            </li>
            <li><a href="${prefix}solutions.html">Solutions & Services</a></li>
            <li><a href="${prefix}use-cases/index.html">Use Cases</a></li>
            <li><a href="${prefix}examples/index.html">Model Examples</a></li>
            <li><a href="${prefix}blog/index.html">Blog</a></li>
            <li><a href="${prefix}about.html">About</a></li>
            <li><a href="${prefix}contact.html" class="nav-cta">Contact Us</a></li>
        </ul>
    </nav>
    `;

    document.querySelector('header').innerHTML = navHtml;
}

