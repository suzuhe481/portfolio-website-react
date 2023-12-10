import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_69nliui";
const TEMPLATE_ID = "template_b8y56fu";
const PUBLIC_KEY = "8AZzawldJv7J7ctG3";

export async function SendEmail(form) {
  console.log("Sending email");

  const response = emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error;
      }
    );

  return response;
}
