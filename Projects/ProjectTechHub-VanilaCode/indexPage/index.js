// Dark mode toggle
      const toggleBtn = document.getElementById("modeToggle");
      toggleBtn.onclick = () => {
        document.body.classList.toggle("dark");
        toggleBtn.textContent = document.body.classList.contains("dark")
          ? "☀️ Light Mode"
          : "🌙 Dark Mode";
      };

      // Scroll animations
      const elements = document.querySelectorAll(
        ".animate-fade, .animate-slide, .animate-zoom"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));