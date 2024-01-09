# rte-quill-plugin

`rte-quill-plugin` is a plugin for integrating Quill rich text editor with your form library. It provides an easy-to-use interface for creating rich text content within forms handled by popular form libraries like React Hook Form, Formik, or Redux Form.

## Features

- **Rich Text Editing**: Utilize the full power of Quill's rich text editing.
- **Form Library Integration**: Seamlessly integrates with your form library for easy data handling.
- **Customizable Toolbars**: Configure toolbars to include only the options you need.
- **Image and Color Support**: Support for custom image uploads and a color picker.
- **Responsive and Adaptive**: Works across different devices and screen sizes.

## Description

The `rte-quill-plugin` provides a simple way to include rich text editing in your forms. Whether you're building a blog, a CMS, or any application requiring formatted text input, this plugin is designed to be a drop-in solution that integrates Quill editor with your form library, ensuring that text data is easily captured and managed within your form's state.

## Installation

Install the package via npm or yarn:

```bash
npm install @mithya-team/rte-quill-plugin
```

or

```bash
yarn add @mithya-team/rte-quill-plugin
```

## Usage

To use the plugin, import it in your form component and use it as a controlled component:

```tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RTEQuill from "@mithya-team/rte-quill-plugin";

const MyForm = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RTEQuill value={content} onChange={setContent} name="content" />
      <input type="submit" />
    </form>
  );
};
```

## Props

Below are the properties you can pass to `RteQuill` component:

- `name` (string): Identifies the field in a form. It's important for handling form data and linking the label to the editor.
- `label` (string): Text displayed above the editor as a label.
- `helperText` (string): Additional guidance or information displayed below the editor.
- `sizes` (QuillFontSizeOption[]): Defines the font size options available in the editor. Each option should have a `label` (string) for display and a `value` (string) representing the font size.
- `customImageUploadAdapter` (function): A function that handles image uploading. It takes a `File` object as input and returns a `Promise` that resolves to the image URL.
- `toolbarProps` (object): Properties for customizing the editor's toolbar. Note that "customSizes" and "id" are omitted from this object.
- `errorText` (string): Text to display any error or validation message related to the editor.

Ensure to spread the `field` object from `react-hook-form`'s `Controller` render prop to `RteQuill` to fully integrate with form handling.

### Example usage in Controller:

```tsx
<Controller
  name="rteEditor"
  control={control}
  render={({ field }) => <RteQuill {...dummyRteQuillProps} {...field} />}
/>
```

Checkout the [playground code](https://github.com/mithya-team/rte-quill-plugin/blob/main/src/components/RteQuillExample.tsx) for implementation

## Issues and Pull Requests

Contributions are always welcome! If you encounter any issues or would like to contribute, please file an issue or submit a PR:

Issues: GitHub Issues
Pull Requests: GitHub Pull Requests
