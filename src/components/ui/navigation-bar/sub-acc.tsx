import React from "react";
import { SubAccProps } from "./types";

export const SubAcc = (props: SubAccProps) => {
  const {
    isAdmin = false,
    onSignOut = () => alert('Sign out clicked - replace with your auth logout function'),
    onChangePassword = () => alert('Change password clicked - replace with your change password function'),
    onResetPassword = () => alert('Reset password clicked - replace with your reset password function')
  } = props;

  return (
    <ul className="sub-acc">
      <li className="account-label">
        <button onClick={onChangePassword}>Change Password</button>
      </li>
      {isAdmin && (
        <li className="account-label">
          <button onClick={onResetPassword}>Reset Password</button>
        </li>
      )}
      <li className="account-label">
        <button onClick={onSignOut}>Sign Out</button>
      </li>
    </ul>
  );
};