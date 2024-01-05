import React from "react";
import { QuillFormat } from "./Constant";
import { QuillFontSizeOption } from "./RteQuill";
type ToolbarOption = "size" | "color" | "image" | "align" | "indents" | "lists";
export interface QuillToolbarProps {
    id: string;
    toolbarOptions?: ToolbarOption[];
    customSizes?: QuillFontSizeOption[];
    formats?: QuillFormat[];
    classes?: {
        root?: string;
    };
}
declare const QuillToolbar: React.FC<QuillToolbarProps>;
export default QuillToolbar;
