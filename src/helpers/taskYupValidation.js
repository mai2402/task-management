import * as Yup from "yup";
import { VALIDATIONS_CONSTANTS } from '../constants/validationConstants';
import { STATUS_OPTIONS,PRIORITY_OPTIONS } from "../constants/filtersValuesConstants";
function taskYupValidation() {
   
      const validation=  Yup.object().shape({
            image: Yup.mixed().test(
              "fileType",
              "Only PNG or JPEG formats are allowed",
              (value) => !value || (value[0] && ["image/png", "image/jpeg"].includes(value[0].type))
            ),
            title: Yup.string()
              .required(VALIDATIONS_CONSTANTS.required('Title'))
              .min(3,VALIDATIONS_CONSTANTS.minError('Title',3)),
            description: Yup.string()
              .required(VALIDATIONS_CONSTANTS.required('Description'))
              .min(10,VALIDATIONS_CONSTANTS.minError('Description',10)),
            priority: Yup.string()
              .required(VALIDATIONS_CONSTANTS.required('Priority'))
              .oneOf(PRIORITY_OPTIONS,VALIDATIONS_CONSTANTS.invalidVal('Priority')),
            state: Yup.string()
              .required(VALIDATIONS_CONSTANTS.required('State'))
              .oneOf(STATUS_OPTIONS,VALIDATIONS_CONSTANTS.invalidVal('State')),
          });

          return validation
    
}

export default taskYupValidation
