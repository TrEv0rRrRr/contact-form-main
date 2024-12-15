const FORM = document.getElementById("form");
const validator = new JustValidate(FORM, {
  validateBeforeSubmitting: true,
  errorFieldCssClass: "invalid",
  errorLabelCssClass: "form-error",
  successFieldCssClass: "valid",
});

const formRadioGroup = document.querySelectorAll(".form__radio");

const successStateDiv = document.querySelector(".successState");

validator
  .addField(
    "#name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorsContainer: "#nameErrorContainer",
    }
  )
  .addField(
    "#lastname",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorsContainer: "#lastNameErrorContainer",
    }
  )
  .addField(
    "#email",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "email",
        errorMessage: "Please enter a valid email address",
      },
    ],
    {
      errorsContainer: "#emailErrorContainer",
    }
  )
  .addRequiredGroup("#form__radio-group", "Please select a query type", {
    errorsContainer: "#queryErrorContainer",
  })
  .addField(
    "#message",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorsContainer: "#messageErrorContainer",
    }
  )
  .addField(
    "#consent",
    [
      {
        rule: "required",
        errorMessage: "To submit this form, please consent to being contacted",
      },
    ],
    {
      errorsContainer: "#consentErrorContainer",
    }
  )
  .onSuccess((e) => {
    successStateDiv.classList.add("animate__fadeInDown");
    setTimeout(() => {
      successStateDiv.classList.remove("animate__fadeInDown");
      e.target.submit();
    }, 3000);
  });

formRadioGroup.forEach((radio) => {
  const radioButton = radio.querySelector(".inputRadio");
  radio.addEventListener("click", () => {
    radioButton.checked = true;
  });
});
