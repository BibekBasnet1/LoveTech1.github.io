// for validation storing the form
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const message = document.querySelector("#subject");
const messageBtn = document.querySelector("#btn");
const successful_Message = document.querySelector(".successful-mess");

// for selecting the images
const burgerImg = document.querySelector(".hamburgerr");
console.log(burgerImg);


// Load details from local storage, or start with an empty array
let details = JSON.parse(localStorage.getItem("details")) || [];

// events to trigger
messageBtn.addEventListener('click', () => {
    let formValueName = formName.value.trim();
    let formValueEmail = formEmail.value.trim();
    let formMessage = message.value.trim();

    // Validate form fields
    if (formValueName === "" || formValueEmail === "" || formMessage === "") {
        successful_Message.innerHTML = `You cannot keep it empty! <br>`;
        return;
    }

    if (!isValidEmail(formValueEmail)) {
        successful_Message.textContent = `Please enter valid email address`;
        return;
    }

    details.push({
        name: formValueName,
        email: formValueEmail,
        message: formMessage
    });

    // Store updated details in local storage
    localStorage.setItem("details", JSON.stringify(details));

    setTimeout(() => {
        successful_Message.textContent = "Thank you for submitting";

    }, 1000);
    formName.value = "";
    formEmail.value = "";
    message.value = "";

    // Clear success message after 2 seconds
    setTimeout(() => {
        successful_Message.textContent = "";
    }, 2000);
})

function isValidEmail(email) {
    // Simple email validation using regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

// event listener on the burger menu
// for the sidebar section
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
    sidebar.style.zIndex = 1;
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});


