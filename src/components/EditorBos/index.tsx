import Editor, { OnChange } from "@monaco-editor/react";

interface EditorBoxProps {
  value?: string;
  onChange?: OnChange;
}

export default function EditorBox({ value, onChange }: EditorBoxProps) {
  return (
    <>
      <Editor
        // height="100%"
        defaultLanguage="css"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </>
  );
}
