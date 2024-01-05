import { QuillFontSizeOption } from "./RteQuill";

export const DEFAULT_FONT_SIZE = "16px";

export const defaultFormats = ["bold", "italic", "underline", "link"];

export const QUILL_FORMATS: QuillFormat[] = [
  "header",
  "image",
  "bold",
  "italic",
  "underline",
  "strike",
  "indent",
  "link",
  "image",
  "color",
  "script",
  "font",
  "align",
  "direction",
  "size",
  "list",
  "blockquote",
  "code-block",
];

export const defaultSize: QuillFontSizeOption[] = [
  { label: "Heading 1 (34px)", value: "34px" },
  { label: "Heading 2 (24px)", value: "24px" },
  { label: "Heading 3 (20px)", value: "20px" },
  { label: "Body 1 (16px)", value: "16px" },
  { label: "Body 2 (14px)", value: "14px" },
  { label: "Body 3 (11px)", value: "11px" },
];

export type QuillFormat =
  | "header"
  | "image"
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "indent"
  | "link"
  | "image"
  | "color"
  | "script"
  | "font"
  | "align"
  | "direction"
  | "size"
  | "list"
  | "blockquote"
  | "code-block";
