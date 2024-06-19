// DO NOT USE SHARED RUNTIME VALUES IN THE BFF. The module import will crash at runtime despite IntelliSense working as expected. See README.md for more info.
// Any changes to this enum should be kept in sync with the enum in packages/bff/src/constants.ts
export enum ErrorMessage {
  CheckoutSessionNotAvailable = 'CHECKOUT_SESSION_NOT_AVAILABLE',
  CartIdMissing = 'CART_ID_MISSING',
  CartModified = 'CART_MODIFIED',
  ValidationError = 'VALIDATION_ERROR',
  InvalidUserData = 'INVALID_USER_DATA',
  MissingUserData = 'MISSING_USER_DATA',
  InvalidIdVerificationMethod = 'INVALID_ID_VERIFICATION_METHOD',
  MissingUserContext = 'MISSING_USER_CONTEXT',
  CreditCheckBlocked = 'CREDIT_CHECK_BLOCKED',
  CreditCheckOTPRequired = 'CREDIT_CHECK_OTP_REQUIRED',
  AMSAddressNotFound = 'AMS_ADDRESS_CONTENT_NOT_FOUND',
  LangProvMissing = 'LANGUAGE_OR_PROVINCE_MISSING_IN_COOKIE',
  InvalidOAuthToken = 'INVALID_OAUTH_TOKEN',
  SessionNotAvailable = 'SESSION_NOT_AVAILABLE',
  PaymentRetryError = 'PAYMENT_RETRY_ERROR',
  PaymentErrorNonRetryable = 'PAYMENT_ERROR'
}
