import * as Yup from "yup";

function taskYupValidation() {
   
      const validation=  Yup.object().shape({
            image: Yup.mixed().test(
              "fileType",
              "Only PNG or JPEG formats are allowed",
              (value) => !value || (value[0] && ["image/png", "image/jpeg"].includes(value[0].type))
            ),
            title: Yup.string()
              .required("Title is required")
              .min(3, "Title must be at least 3 characters"),
            description: Yup.string()
              .required("Description is required")
              .min(10, "Description must be at least 10 characters"),
            priority: Yup.string()
              .required("Priority is required")
              .oneOf(["low", "medium", "high"], "Invalid priority value"),
            state: Yup.string()
              .required("State is required")
              .oneOf(["todo", "doing", "done"], "Invalid state value"),
          });

          return validation
    
}

export default taskYupValidation
