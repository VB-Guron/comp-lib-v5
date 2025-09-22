"use client";

import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormItem, FormControl, FormMessage } from "../ui/form";
import { Upload, UploadProps, AttachmentData } from "../ui/upload/upload";

export interface UploadFormProps
  extends Omit<UploadProps, "name" | "onChoose" | "onFileRemove" | "attachment" | "value"> {
  name: string;
  legend?: string;
  buttonText?: string;
  allowAllFileTypes?: boolean;
  maxSizeInMB?: number;
  onOpen?: (fileName: string, data: string, fileType: string) => void;
  showAttachmentLabel?: boolean;
}

export function UploadForm({
  name,
  legend,
  buttonText = "Choose File",
  allowAllFileTypes = true,
  maxSizeInMB = 3,
  onOpen = () => {},
  showAttachmentLabel = true,
  variant = "fieldset",
  ...props
}: UploadFormProps) {
  const { control, setValue, watch, setError, clearErrors } = useFormContext();

  // Watch the current value
  const currentValue = watch(name);
  const attachment: AttachmentData | null = currentValue || null;

  const handleChoose = React.useCallback((fileName: string, data: string, fileExtension: string) => {
    try {
      clearErrors(name);
      const newAttachment: AttachmentData = {
        name: fileName,
        data: data,
        fileType: fileExtension,
      };
      setValue(name, newAttachment, { shouldValidate: true, shouldDirty: true });
    } catch (error) {
      console.error("Error setting form value:", error);
      setError(name, {
        type: "manual",
        message: "Failed to upload file",
      });
    }
  }, [name, setValue, clearErrors, setError]);

  const handleFileRemove = React.useCallback(() => {
    try {
      setValue(name, null, { shouldValidate: true, shouldDirty: true });
    } catch (error) {
      console.error("Error removing file:", error);
    }
  }, [name, setValue]);

  const handleError = React.useCallback((error: string) => {
    setError(name, {
      type: "manual",
      message: error,
    });
  }, [name, setError]);

  return (
    <FormItem>
      <FormControl>
        <Upload
          {...props}
          variant={variant}
          onChoose={handleChoose}
          onFileRemove={handleFileRemove}
          onOpen={onOpen}
          onError={handleError}
          attachment={attachment}
          legend={legend}
          buttonText={buttonText}
          allowAllFileTypes={allowAllFileTypes}
          maxSizeInMB={maxSizeInMB}
          showAttachmentLabel={showAttachmentLabel}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}