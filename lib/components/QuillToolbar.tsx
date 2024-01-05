import React from "react";
import {
  DEFAULT_FONT_SIZE,
  QuillFormat,
  defaultFormats,
  defaultSize,
} from "./Constant";
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

const QuillToolbar: React.FC<QuillToolbarProps> = (props) => {
  const {
    toolbarOptions = ["align", "color", "image", "size", "indents", "lists"],
    customSizes,
    formats,
    classes,
  } = props;

  return (
    <>
      <div id={props.id} className={`rf-toolbar ${classes?.root || ""}`}>
        {toolbarOptions.includes("size") && customSizes
          ? getCustomSizeOptions(customSizes)
          : Size}
        <span className="ql-formats">
          {formats
            ? formats.map((format) => {
                return (
                  <button key={format} className={`ql-${format}`}></button>
                );
              })
            : Formatting}

          {toolbarOptions.includes("color") && Color}
        </span>

        {toolbarOptions.includes("image") && Image}
        {toolbarOptions.includes("align") && Align}
        {toolbarOptions.includes("indents") && Indents}
        {toolbarOptions.includes("lists") && Lists}
      </div>
    </>
  );
};

const Image = <button className="ql-image"></button>;

const Color = (
  <select className="ql-color" title="Char color">
    <option value="color-picker">Color Picker</option>
    <option value="red" />
    <option value="green" />
    <option value="blue" />
    <option value="orange" />
    <option value="violet" />
    <option value="#d0d1d2" />
  </select>
);

const getCustomSizeOptions = (customSizes: QuillFontSizeOption[]) => {
  if (!customSizes.length) {
    return null;
  }
  return (
    <select className="ql-size">
      {customSizes.map((size, index) => (
        <option
          style={{ fontSize: size.value }}
          key={size.value}
          selected={index === 0}
          value={size.value}
        >
          {size.label} ({size.value})
        </option>
      ))}
    </select>
  );
};

const Size = (
  <select className="ql-size" defaultValue={`${DEFAULT_FONT_SIZE}`}>
    {defaultSize.map((size) => (
      <option key={size.value} value={size.value}>
        {size.label}
      </option>
    ))}
  </select>
);
const Lists = (
  <span className="ql-formats">
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
  </span>
);
const Indents = (
  <span className="ql-formats">
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
  </span>
);

const Formatting = (
  <>
    {defaultFormats.map((format) => (
      <button key={format} className={`ql-${format}`}></button>
    ))}
  </>
);

const Align = (
  <span className="ql-formats">
    <button className="ql-direction" value="rtl"></button>
    <select className="ql-align"></select>
  </span>
);

export default QuillToolbar;
