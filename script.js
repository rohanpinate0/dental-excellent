/* =========================================
   SMILECARE DENTAL CLINIC
   CREATIVE NORMAL VERSION
   ========================================= */


/* =========================
   MOBILE MENU
   ========================= */

function toggleMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (!menu) return;

  menu.classList.toggle("active");
}


/* Close menu after clicking link */

document
  .querySelectorAll(".mobile-menu a")
  .forEach(function(link) {

    link.addEventListener("click", function() {

      const menu =
        document.getElementById("mobileMenu");

      if (menu) {
        menu.classList.remove("active");
      }

    });

  });


/* =========================
   PAGE LOAD
   ========================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    /* Current year */

    const year =
      document.getElementById("year");

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }


    /* Minimum appointment date */

    const dateInput =
      document.getElementById("date");

    if (dateInput) {

      const today =
        new Date();

      const year =
        today.getFullYear();

      const month =
        String(
          today.getMonth() + 1
        ).padStart(2, "0");

      const day =
        String(
          today.getDate()
        ).padStart(2, "0");

      dateInput.min =
        `${year}-${month}-${day}`;
    }

  }
);


/* =========================
   PHONE INPUT
   ========================= */

const phone =
  document.getElementById("phone");

if (phone) {

  phone.addEventListener(
    "input",
    function() {

      this.value =
        this.value.replace(/\D/g, "");

      if (this.value.length > 10) {

        this.value =
          this.value.slice(0, 10);

      }

    }
  );

}


/* =========================
   APPOINTMENT
   ========================= */

function bookAppointment(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("name")
      .value
      .trim();

  const phone =
    document
      .getElementById("phone")
      .value
      .trim();

  const treatment =
    document
      .getElementById("treatment")
      .value;

  const date =
    document
      .getElementById("date")
      .value;


  /* Validation */

  if (
    !name ||
    !phone ||
    !treatment ||
    !date
  ) {

    alert(
      "Please fill all appointment details."
    );

    return;
  }


  /* Indian mobile validation */

  if (!/^[6-9]\d{9}$/.test(phone)) {

    alert(
      "Please enter a valid 10-digit mobile number."
    );

    return;
  }


  /* WhatsApp number */

  const clinicWhatsApp =
    "919999999999";


  /* WhatsApp message */

  const message =
`Hello SmileCare Dental Clinic,

I would like to request an appointment.

Name: ${name}
Phone: ${phone}
Treatment: ${treatment}
Preferred Date: ${date}

Please confirm my appointment.`;


  const whatsappURL =
    "https://wa.me/" +
    clinicWhatsApp +
    "?text=" +
    encodeURIComponent(message);


  /* Open WhatsApp */

  window.open(
    whatsappURL,
    "_blank"
  );

}


/* =========================
   SMOOTH SCROLL
   ========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function(link) {

    link.addEventListener(
      "click",
      function(event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );

        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================
   HEADER SCROLL EFFECT
   ========================= */

window.addEventListener(
  "scroll",
  function() {

    const header =
      document.querySelector(".header");

    if (!header) return;


    if (window.scrollY > 20) {

      header.style.boxShadow =
        "0 10px 35px rgba(16,44,50,0.08)";

    } else {

      header.style.boxShadow =
        "none";

    }

  }
);


/* =========================
   CLOSE MENU OUTSIDE
   ========================= */

document.addEventListener(
  "click",
  function(event) {

    const menu =
      document.getElementById(
        "mobileMenu"
      );

    const button =
      document.querySelector(
        ".menu-btn"
      );

    if (!menu || !button) {
      return;
    }


    if (
      menu.classList.contains("active") &&
      !menu.contains(event.target) &&
      !button.contains(event.target)
    ) {

      menu.classList.remove("active");

    }

  }
);


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      const menu =
        document.getElementById(
          "mobileMenu"
        );

      if (menu) {
        menu.classList.remove("active");
      }

    }

  }
);


/* =========================
   CONSOLE
   ========================= */

console.log(
  "SmileCare Dental Clinic — Website by ROHAN WEB STUDIO®"
);