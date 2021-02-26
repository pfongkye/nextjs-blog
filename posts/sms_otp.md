---
title: 'SMS OTP'
date: '2021-02-26'
---

# OTP

[One Time Password](https://web.dev/sms-otp-form/) (OTP) helps in confirming one's phone number. It can used in the following ways:
- Two-factor authentication
- Phone number verification
- Account recovery
- Payment confirmation

OTP is not as robust as [WebAuthn](https://www.w3.org/TR/webauthn-2/) method though.

Some best practices when implementing OTP using the `input` element:
- `type="text"` instead of `type="number"`
- `inputmode="numeric"`
- `autocomplete="one-time-code"`

JavaScript code can be used to wait for the SMS and complete the input using [Web OTP API](https://wicg.github.io/web-otp/).
