import React, { useCallback, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { QuillToolbarProps } from "./QuillToolbar";
import "./RteQuill.css";
import { defaultSize } from "./Constant";

export interface QuillFontSizeOption {
  label: string;
  value: string;
}

export interface ReactQuillFieldProps {
  name: string;
  label: string;
  helperText: string;
  sizes?: QuillFontSizeOption[];
  customImageUploadAdapter?: (file: File) => Promise<string>;
  toolbarProps?: Omit<QuillToolbarProps, "customSizes" | "id">;
  errorText?: string;
}

export interface RichTextEditorProps extends ReactQuillFieldProps {
  value: string;
  onChange: (value: string) => void;
  classes?: {
    input?: string;
    error?: string;
    label?: string;
  };
}

const RichTextEditor: React.FC<RichTextEditorProps> = (props) => {
  const {
    value,
    onChange,
    name,
    label,
    helperText,
    customImageUploadAdapter,
    toolbarProps,
    errorText,
    classes,
    sizes,
  } = props;

  const quillRef = useRef<ReactQuill>(null);

  // Initialize Quill with custom sizes and toolbar
  useEffect(() => {
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = sizes
      ? sizes?.map((size) => size.value)
      : defaultSize.map((size) => size.value);
    Quill.register(Size, false);
  }, [sizes]);

  const toolbarId = `toolbar-${name}`;

  const handleImageInsert = useCallback(() => {
    if (customImageUploadAdapter) {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];

        if (file) {
          const imageUrl = await customImageUploadAdapter(file);
          const editor = quillRef.current?.getEditor();
          const range = editor?.getSelection();
          if (range) {
            editor?.insertEmbed(range.index, "image", imageUrl);
          }
        }
      };
    }
  }, [customImageUploadAdapter]);

  const showColorPicker = (value: string) => {
    const quill = quillRef.current?.getEditor();
    console.log({ quill, value });
    if (value === "color-picker") {
      let picker = document.getElementById("color-picker") as HTMLInputElement;
      if (!picker) {
        picker = document.createElement("input");
        picker.id = "color-picker";
        picker.type = "color";
        picker.style.display = "none";
        picker.value = "#FF0000";
        document.body.appendChild(picker);

        picker.addEventListener(
          "change",
          function () {
            quill?.format("color", picker.value);
          },
          false
        );
      }
      picker.click();
    } else {
      quill?.format("color", value);
    }
  };

  useEffect(() => {
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const toolbar = editor.getModule("toolbar");
      toolbar.addHandler("image", handleImageInsert);
    }
  }, [handleImageInsert]);

  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    const toolbar = quill?.getModule("toolbar");
    toolbar?.addHandler("color", showColorPicker);
    console.log("to", toolbar);
  }, []); // Ensure dependencies are correctly managed

  return (
    <>
      <label htmlFor={name} className={`rte-label ${classes?.input}`}>
        {label}
      </label>
      <QuillToolbar {...toolbarProps} customSizes={sizes} id={toolbarId} />
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={(_content, _delta, _source, editor) => {
          onChange(editor.getHTML()); // getHTML or content based on what you need
        }}
        modules={{
          toolbar: {
            container: `#${toolbarId}`,
          },
        }}
        className={`rte-input ${classes?.input}`}
      />
      <span className={`helper-text ${errorText ? "error" : ""}`}>
        {errorText || helperText}
      </span>
    </>
  );
};

export default RichTextEditor;
