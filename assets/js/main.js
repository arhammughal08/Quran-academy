/****************************************************** author signup btn  ********************************************/
const tabs = document.querySelectorAll(".signup__tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("signup__tab--active"));
    tab.classList.add("signup__tab--active");

    // Optional: You can store selected role if needed
    const role = tab.getAttribute("data-role");
    console.log("Selected role:", role);
  });
});
/****************************************************** Dashboard Topbar ********************************************/

document.addEventListener("DOMContentLoaded", function () {
  const profile = document.getElementById("profileDropdown");

  profile.addEventListener("click", function () {
    profile.classList.toggle("is-open");
  });

  // Optional: Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!profile.contains(e.target)) {
      profile.classList.remove("is-open");
    }
  });
});
/*** menu toggler ***/

const toggleBtn = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-toggle");
});
