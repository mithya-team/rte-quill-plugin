import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { RteQuill, RichTextEditorProps } from "../../lib/index"; // ensure this is the correct path to your component

export const Example: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      rteEditor: "helllo world",
    },
  });

  const onSubmit = (data: { rteEditor: string }) => {
    console.log("Form Data: ", data);
    setValue(data.rteEditor);
  };

  const dummyRteQuillProps: Omit<RichTextEditorProps, "value" | "onChange"> = {
    name: "rteEditor",
    label: "Rich Text Editor",
    helperText: "Write something impactful!",
    sizes: [
      { label: "Small", value: "12px" },
      { label: "Normal", value: "16px" },
      { label: "Large", value: "20px" },
    ],
    customImageUploadAdapter: async (file: File) => {
      // Simulate an image upload and return a URL
      console.log("Uploading image", file);
      return Promise.resolve("https://dummyimage.com/600x400/000/fff");
    },
    toolbarProps: {}, // Assuming there are additional props you might provide
    errorText: "",
  };

  return (
    <>
      <p>Click on submit to see suggestion</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="rteEditor"
          control={control}
          render={({ field }) => (
            <RteQuill {...dummyRteQuillProps} {...field} />
          )}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <p>Selected Suggestion: {value}</p>
      </div>
    </>
  );
};

export default Example;
