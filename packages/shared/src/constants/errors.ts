// DO NOT USE SHARED RUNTIME VALUES IN THE BFF. The module import will crash at runtime despite IntelliSense working as expected. See README.md for more info.
// Any changes to this enum should be kept in sync with the enum in packages/bff/src/constants.ts
export enum ErrorMessage {
  ValidationError = 'VALIDATION_ERROR',
  InvalidUserData = 'INVALID_USER_DATA'
}
