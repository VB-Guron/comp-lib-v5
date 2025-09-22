"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { useDidMountEffect } from "@/hooks";
import { images } from "@/values";
import Image from "next/image";

export type NotificationStatus = "error" | "success" | "default";

export type NotificationBoxProps = {
  status: NotificationStatus;
  header: string;
  details: string;
  show?: boolean;
};

const NotificationBox = ({
  show,
  header,
  details,
  status,
}: NotificationBoxProps) => {
  const [className, setClass] = useState(styles.container);

  useEffect(() => {
    if (!show) return;

    setClass(styles.shown);
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const to = setTimeout(() => {
      setClass(styles.hidden);
    }, 3000);

    return () => {
      clearTimeout(to);
    };
  }, [show]);

  const iconKey = `notif_${status}` as keyof typeof images;

  return (
    <div className={className}>
      <Image
        src={images[iconKey]}
        width={50}
        height={50}
        alt="icon"
        loading="eager"
        priority
      />
      <div>
        <span data-status={status}>{header}</span>
        <span>{details}</span>
      </div>
    </div>
  );
};

export const NotificationContext = React.createContext<
  (props: NotificationBoxProps) => void
>(() => {});

const useNotificationBox = (): [
  () => JSX.Element,
  (props: NotificationBoxProps) => void,
] => {
  const [props, setProps] = useState<NotificationBoxProps>({
    status: "default",
    header: "",
    details: "",
    show: false,
  });
  const showNotification = useCallback(
    ({ show = true, ...rest }: NotificationBoxProps) => {
      setProps({ ...rest, show });
    },
    []
  );

  const Box = () => {
    return <NotificationBox {...props} />;
  };

  return [Box, showNotification];
};

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [NotifBox, showNotification] = useNotificationBox();

  return (
    <NotificationContext.Provider value={showNotification}>
      <NotifBox />
      {children}
    </NotificationContext.Provider>
  );
};

export const defaultErrorNotifPayload: NotificationBoxProps = {
  status: "error",
  header: "Error",
  details: "Unable to process your request at the time.",
};
