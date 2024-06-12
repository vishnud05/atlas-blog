import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RTE = ({
  onChange,
  defaultValue,
}: {
  onChange: any;
  defaultValue?: any;
}) => {
  return (
    <Editor
      initialValue={defaultValue && ""}
      init={{
        height: 500,
        menubar: true,
        branding: false,

        plugins: [
          "image",
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "anchor",
        ],
        toolbar:
          "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      onEditorChange={onChange}
      apiKey="ip7w2wseo1odpnh0ma82d4ncp5xjyx1jqcnmsp98iwxmmc7h"
    />
  );
};

export default RTE;
