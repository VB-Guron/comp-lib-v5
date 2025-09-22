"use client";

import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import { images } from "../../../config/images";

export type NotificationStatus = "error" | "success" | "default";

export type NotificationToastProps = {
  status: NotificationStatus;
  header: string;
  details: string;
  show?: boolean;
  icon?: React.ReactNode;
  customIconSrc?: string;
};

export const NotificationToast = ({
  show,
  header,
  details,
  status,
  icon,
  customIconSrc,
}: NotificationToastProps) => {
  const [className, setClass] = useState("notification-toast-container");

  useEffect(() => {
    if (!show) return;

    setClass("notification-toast-shown");
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const to = setTimeout(() => {
      setClass("notification-toast-hidden");
    }, 3000);

    return () => {
      clearTimeout(to);
    };
  }, [show]);

  const iconKey = `notif_${status}` as keyof typeof images;
  const iconSrc = customIconSrc || images[iconKey];

  return (
    <div className={className}>
      <div className="notification-toast-icon">
        {icon || (
          <img
            src={iconSrc}
            width={50}
            height={50}
            alt={`${status} notification icon`}
            loading="eager"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="notification-toast-content">
        <span className="notification-toast-header" data-status={status}>
          {header}
        </span>
        <span className="notification-toast-details">{details}</span>
      </div>
    </div>
  );
};

export const NotificationToastContext = React.createContext<
  (props: NotificationToastProps) => void
>(() => {});

export const useNotificationToast = (): [
  () => JSX.Element,
  (props: NotificationToastProps) => void,
] => {
  const [props, setProps] = useState<NotificationToastProps>({
    status: "default",
    header: "",
    details: "",
    show: false,
  });
  const showNotification = useCallback(
    ({ show = true, ...rest }: NotificationToastProps) => {
      setProps({ ...rest, show });
    },
    []
  );

  const ToastComponent = () => {
    return <NotificationToast {...props} />;
  };

  return [ToastComponent, showNotification];
};

export const NotificationToastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ToastComponent, showNotification] = useNotificationToast();

  return (
    <NotificationToastContext.Provider value={showNotification}>
      <ToastComponent />
      {children}
    </NotificationToastContext.Provider>
  );
};

export const defaultErrorNotificationPayload: NotificationToastProps = {
  status: "error",
  header: "Error",
  details: "Unable to process your request at the time.",
};

export default NotificationToast;
