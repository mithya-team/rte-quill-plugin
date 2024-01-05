import React from "react";
import { QuillToolbarProps } from "./QuillToolbar";
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
declare const RichTextEditor: React.FC<RichTextEditorProps>;
export default RichTextEditor;
