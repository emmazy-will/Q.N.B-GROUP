document.addEventListener('DOMContentLoaded', function() {
    // ==================== Mobile Menu Toggle ====================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
    }
  
    // ==================== Smooth Scrolling ====================
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for anchor links
        if (href.startsWith('#')) {
          e.preventDefault();
          
          // Close mobile menu if open
          if (window.innerWidth <= 768 && navMenu) {
            navMenu.classList.remove('active');
          }
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // ==================== Contact Form Handling ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const submitSpinner = document.getElementById('submitSpinner');
        const successMessage = document.getElementById('successMessage');
        
        // Validate required fields
        if (!firstName.value || !lastName.value || !email.value) {
          alert('Please fill in all required fields');
          return;
        }
        
        // Show loading state
        if (submitBtn && submitText && submitSpinner) {
          submitText.textContent = 'Sending...';
          submitSpinner.classList.remove('d-none');
          submitBtn.disabled = true;
        }
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
          // Reset form
          contactForm.reset();
          
          // Hide spinner and show success message
          if (submitText && submitSpinner && successMessage) {
            submitText.textContent = 'Send Message';
            submitSpinner.classList.add('d-none');
            submitBtn.disabled = false;
            successMessage.classList.remove('d-none');
          }
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            if (successMessage) successMessage.classList.add('d-none');
          }, 5000);
        }, 1500);
      });
    }
  
    // ==================== Tracking Functionality ====================
    const trackBtn = document.getElementById('trackBtn');
    if (trackBtn) {
      trackBtn.addEventListener('click', function() {
        const trackingNumber = document.getElementById('trackingNumber');
        const trackingResult = document.getElementById('trackingResult');
        const trackingStatus = document.getElementById('trackingStatus');
        
        if (!trackingNumber || !trackingNumber.value.trim()) {
          alert('Please enter a tracking number');
          return;
        }
        
        // Show loading state
        trackBtn.disabled = true;
        trackBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Tracking...';
        
        // Simulate API call
        setTimeout(() => {
          // Reset button
          trackBtn.disabled = false;
          trackBtn.textContent = 'TRACK';
          
          // Show result if elements exist
          if (trackingResult) trackingResult.style.display = 'block';
          
          // Generate sample tracking data
          if (trackingStatus) {
            trackingStatus.innerHTML = `
              <li class="list-group-item">
                <div class="d-flex">
                  <div class="me-3 text-primary">
                    <i class="bi bi-file-earmark-text fs-4"></i>
                  </div>
                  <div>
                    <h6 class="mb-1">Shipment created</h6>
                    <small class="text-muted">Aba, Nigeria - ${new Date().toLocaleString()}</small>
                  </div>
                  <span class="ms-auto badge bg-primary">Latest</span>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex">
                  <div class="me-3 text-primary">
                    <i class="bi bi-truck fs-4"></i>
                  </div>
                  <div>
                    <h6 class="mb-1">In transit</h6>
                    <small class="text-muted">Port Harcourt, Nigeria - ${new Date(Date.now() - 86400000).toLocaleString()}</small>
                  </div>
                </div>
              </li>
            `;
          }
        }, 1500);
      });
    }
  
    // ==================== Scroll Spy for Navigation ====================
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const id = section.getAttribute('id');
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  
    // ==================== Bootstrap Tooltips ====================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });