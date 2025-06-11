import { Editor } from "@tinymce/tinymce-react";
import "./style.scss";
import useHandleUploadImage from "@/hooks/useHandleUploadImage";
import useHandleUploadFile from "@/hooks/useHandleUploadFile";
import { IUploadFile, IUploadImg } from "@/models/types";
import { memo } from "react";

const TinyEditor = (props: TinyEditorProps) => {
  const handleUploadImage = useHandleUploadImage(true);
  const handleUploadFile = useHandleUploadFile(true);

  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      licenseKey="gpl"
      init={{
        branding: false,
        elementpath: false,
        language: "vi",
        width: "100%",
        language_url: "/tinymce/langs/vi.js",
        menubar: true,
        resize: false,
        statusbar: false,
        toolbar_mode: "sliding",
        plugins: [
          "advlist",
          "anchor",
          "autolink",
          "autoresize",
          "charmap",
          "directionality",
          "emoticons",
          "fullscreen",
          "help",
          "image",
          "importcss",
          "insertdatetime",
          "link",
          "lists",
          "media",
          "nonbreaking",
          "pagebreak",
          "charmap",
          "preview",
          "searchreplace",
          "table",
        ],
        toolbar: `
        undo redo | accordion accordionremove | blocks fontsize | 
        bold italic underline strikethrough | 
        align numlist bullist outdent indent | 
        link image media | table | 
          fullscreen preview searchreplace help |
        lineheight forecolor backcolor removeformat | 
        charmap emoticons | insertdatetime nonbreaking pagebreak anchor |  
        ltr rtl save print
      `,

        file_picker_callback: (
          callback: (url: string) => void,
          value: string,
          meta: FilePickerMeta
        ) => {
          const input = document.createElement("input");

          let acceptType: string = "*/*";
          if (meta.filetype === "image") acceptType = "image/*";
          else if (meta.filetype === "media") acceptType = "video/*,audio/*";
          else if (meta.filetype === "file") acceptType = "*";

          input.setAttribute("type", "file");
          input.setAttribute("accept", acceptType);
          input.click();

          input.onchange = function () {
            const file = input.files?.[0];
            if (!file) return;

            let uploadPromise: Promise<IUploadImg[] | IUploadFile[]>;

            if (meta.filetype === "image") {
              uploadPromise = handleUploadImage(0, [file]);
            } else {
              uploadPromise = handleUploadFile(0, [file]);
            }
            uploadPromise
              .then((data) => {
                callback(data[0].url);
              })
              .catch((error) => {
                console.error("Error uploading:", error);
              });
          };
        },
      }}
      {...props}
    />
  );

  interface FilePickerMeta {
    filetype: "image" | "media" | "file";
  }
};

export type TinyEditorProps = {
  onEditorChange?: (value: any) => void;
  value?: any;
  height?: number;
};

export default memo(TinyEditor);
