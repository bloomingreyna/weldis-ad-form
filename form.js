document.getElementById("custom-form").addEventListener("submit", () => {
    event.preventDefault();

    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSex_E7C8znRtCO2TDX0cdklTDQHNVuOHQtkJCQvsJNuIMeb4g/formResponse";
    const formData = new FormData(document.getElementById("custom-form"));

    fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        alert("Form submitted!")
    }).catch((error) => {
        console.log("Submission failed: ", error);
    });
})