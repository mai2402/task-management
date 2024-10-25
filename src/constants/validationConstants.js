export const VALIDATIONS_CONSTANTS = {
    required: (fieldName) => `${fieldName} is Required`,
    minError: (fieldName, min) => `${fieldName} must be at least ${min} characters`,
    invalidVal: (fieldName) => `Invalid ${fieldName} value`
}
