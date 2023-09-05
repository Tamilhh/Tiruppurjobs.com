// Show the "Back to Top" button when user scrolls down
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// Function to scroll to the top of the page
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}

var originalDisplay = []; // Array to store original display state of job ads

// ... Your other code ...

function searchJobs() {
  var searchTerm = document.getElementById("jobsearch").value.toLowerCase();
  var jobListingsContainer = document.getElementById("joblistings");
  var jobAds = jobListingsContainer.getElementsByClassName("job-ad");

  // Store the original display state if not already done
  if (originalDisplay.length === 0) {
    for (var i = 0; i < jobAds.length; i++) {
      originalDisplay[i] = jobAds[i].style.display;
    }
  }

  var foundMatches = false; // Flag to track if any matches were found

  for (var i = 0; i < jobAds.length; i++) {
    var jobAd = jobAds[i];
    var vacancyPosition = jobAd.querySelector(".vacancy-position").textContent.toLowerCase();

    if (vacancyPosition.includes(searchTerm)) {
      jobAd.style.display = "block";
      foundMatches = true;
    } else {
      jobAd.style.display = "none";
    }
  }

  // Display a message if no matches were found
  if (!foundMatches) {
    jobListingsContainer.innerHTML = '<p class="no-matches-message">No job listings found for the search term: "' + searchTerm + '"</p>';
  }
}

function clearSearch() {
  var jobListingsContainer = document.getElementById("joblistings");
  var jobAds = jobListingsContainer.getElementsByClassName("job-ad");

  for (var i = 0; i < jobAds.length; i++) {
    jobAds[i].style.display = originalDisplay[i] || "block"; // Restore original display state
  }

  // Clear the search input field
  document.getElementById("jobsearch").value = "";

  // Remove the "No job listings found" message
  var noMatchesMessage = document.querySelector(".no-matches-message");
  if (noMatchesMessage) {
    noMatchesMessage.remove();
  }
  location.reload();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function makeCall(contactNumber) {
  // Ensure the provided contact number is valid
  if (!contactNumber) {
    alert("Contact number is not available.");
    return;
  }

  // Construct the URL to initiate a phone call
  var phoneUrl = "tel:" + contactNumber;

  // Open the URL, which will trigger the phone call
  window.location.href = phoneUrl;
}
