import OTPInput, { ResendOTP } from "otp-input-react";

import React from 'react'

const Otpcode = () => {
    return (
        <div>
          <h2>Enter OPT sent to</h2>
          <p>{ phonenumber}</p>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputStyle={{border:"1px solid blue", borderRadius:"5px"}}
            secure
            className="flex justify-between gap-2 p-6 bg-slate-400"
          />
          <ResendOTP
            onResendClick={() => console.log("Resend clicked")}
          />
        </div>
    )
}

export default Otpcode
