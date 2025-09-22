"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
// Removed X icon import - using HTML entity &#10005; to match original PayPlus Web
import "./upload.scss";

// Upload component variants
const uploadVariants = cva("upload-base", {
  variants: {
    variant: {
      default: "upload-default",
      fieldset: "upload-fieldset",
    },
    size: {
      sm: "upload-sm",
      default: "upload-default-size",
      lg: "upload-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Upload button variants
const uploadButtonVariants = cva("upload-button-base", {
  variants: {
    size: {
      sm: "upload-button-sm",
      default: "upload-button-default",
      lg: "upload-button-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface AttachmentData {
  name: string;
  data: string;
  fileType: string;
}

export interface UploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onError">,
    VariantProps<typeof uploadVariants> {
  onChoose?: (name: string, data: string, fileExtension: string) => void;
  onFileRemove?: () => void;
  onOpen?: (fileName: string, data: string, fileType: string) => void;
  attachment?: AttachmentData | null;
  allowAllFileTypes?: boolean;
  buttonText?: string;
  legend?: string;
  maxSizeInMB?: number;
  onError?: (error: string) => void;
  showAttachmentLabel?: boolean;
}

export interface UploadButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onError">,
    VariantProps<typeof uploadButtonVariants> {
  onAdd?: (name: string, data: string, fileExtension: string) => void;
  allowAllFileTypes?: boolean;
  buttonText?: string;
  maxSizeInMB?: number;
  onError?: (error: string) => void;
}

// Utility function to convert file to base64
const convertBase64 = (file: File, extension: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const result = fileReader.result;
      if (typeof result === "string") {
        const mimeTypeLookup: Record<string, string> = {
          pdf: "application/pdf",
          doc: "application/msword",
          docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          txt: "text/plain",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          xls: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        };

        const mimeType = mimeTypeLookup[extension.toLowerCase()];
        if (mimeType) {
          resolve(result.replace(`data:${mimeType};base64,`, ""));
        } else {
          resolve(result.replace(/^data:[^;]+;base64,/, ""));
        }
      } else {
        reject(new Error("Unexpected result type"));
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// Utility function to shorten file names
const shortenFileName = (fileName: string, maxLength: number = 30): string => {
  if (fileName.length <= maxLength) return fileName;

  const extensionIndex = fileName.lastIndexOf(".");
  if (extensionIndex === -1) {
    return fileName.substring(0, maxLength - 3) + "...";
  }

  const name = fileName.substring(0, extensionIndex);
  const extension = fileName.substring(extensionIndex);
  const availableLength = maxLength - extension.length - 3; // 3 for "..."

  if (availableLength <= 0) {
    return "..." + extension;
  }

  return name.substring(0, availableLength) + "..." + extension;
};

// Upload Button Component
export const UploadButton = React.forwardRef<
  HTMLInputElement,
  UploadButtonProps
>(
  (
    {
      className,
      size,
      onAdd = () => {},
      buttonText = "Choose File",
      allowAllFileTypes = true,
      maxSizeInMB = 3,
      onError = () => {},
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
      inputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) {
        const fileSize = file.size;
        const maxSize = maxSizeInMB * 1024 * 1024;

        if (fileSize > maxSize) {
          onError(`File size exceeds the limit of ${maxSizeInMB}MB.`);
          return;
        }

        try {
          const fileName = file.name;
          const extension = fileName.substring(fileName.lastIndexOf(".") + 1);
          const base64 = await convertBase64(file, extension);
          onAdd(fileName, base64, extension);
        } catch (error) {
          onError("Failed to process file.");
        }
      }
    };

    const acceptString = allowAllFileTypes
      ? "image/*, text/plain, application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      : "image/*";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <input
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept={acceptString}
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          className={cn(uploadButtonVariants({ size }), className)}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    );
  }
);
UploadButton.displayName = "UploadButton";

// Main Upload Component
export const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      className,
      variant,
      size,
      onChoose = () => {},
      onFileRemove = () => {},
      onOpen = () => {},
      attachment = null,
      allowAllFileTypes = true,
      buttonText = "Choose File",
      legend,
      placeholder,
      maxSizeInMB = 3,
      onError = () => {},
      showAttachmentLabel = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const handleAttachmentClick = () => {
      if (attachment && onOpen) {
        onOpen(attachment.name, attachment.data, attachment.fileType);
      }
    };

    if (variant === "fieldset") {
      return (
        <fieldset
          className={cn(uploadVariants({ variant, size }), className)}
          input-type="checkbox"
          data-disabled={disabled}
        >
          {legend && (
            <legend className="text-foreground font-medium">{legend}</legend>
          )}
          <div className="upload-container">
            {showAttachmentLabel && <span>Attachment: </span>}
            {!attachment && !disabled ? (
              <UploadButton
                ref={ref}
                onAdd={onChoose}
                buttonText={buttonText}
                allowAllFileTypes={allowAllFileTypes}
                maxSizeInMB={maxSizeInMB}
                onError={onError}
                size={size}
                disabled={disabled}
                {...props}
              />
            ) : (
              <div className="upload-removable-row">
                {attachment ? (
                  <a
                    onClick={handleAttachmentClick}
                    style={{ cursor: "pointer", fontSize: "0.85rem" }}
                  >
                    {shortenFileName(attachment.name)}
                  </a>
                ) : (
                  <a className="text-foreground">No Attachment</a>
                )}

                {!disabled && attachment && (
                  <button
                    type="button"
                    className="upload-remove-button"
                    onClick={onFileRemove}
                  >
                    &#10005;
                  </button>
                )}
              </div>
            )}
          </div>
        </fieldset>
      );
    }

    // Default variant - just the upload button
    return (
      <UploadButton
        ref={ref}
        className={cn(uploadVariants({ variant, size }), className)}
        onAdd={onChoose}
        buttonText={buttonText}
        allowAllFileTypes={allowAllFileTypes}
        maxSizeInMB={maxSizeInMB}
        onError={onError}
        size={size}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Upload.displayName = "Upload";

export { uploadVariants, uploadButtonVariants };
