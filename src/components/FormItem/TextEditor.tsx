import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface QuillEditorProps {
  onChange: (arg0: string) => void;
  value: string;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

const TextEditor: React.FC<{
  value: string;
  onSetContent: (values: string) => void;
  props: any;
}> = ({ value, onSetContent, ...props }) => {
  return (
    <QuillNoSSRWrapper
      theme="snow"
      value={value}
      onChange={(value) => onSetContent(value)}
      modules={modules}
      formats={formats}
      {...props}
    />
  );
};

export default TextEditor;
