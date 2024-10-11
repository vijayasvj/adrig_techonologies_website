export const formSubmitHandler = async (data: any) => {
  const formData = {
    "entry.1095599635": data.name,
    "entry.1329565917": data.phoneNumber,
    "entry.1958757335": data.company,
    "entry.1115218693": data.email,
    "entry.1622533492": data.description,
  }

  try {
    const response = await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-rM-SulZYT08We1wsknccRpdnEku-btF9HrbZybYhkqAJKw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      }
    )

    if (response.ok) {
      console.log("Form submitted successfully!")
    }
  } catch (error) {
    console.error("Error submitting form:", error)
  }
}
