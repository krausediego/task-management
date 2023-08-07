import Document from "@tiptap/extension-document";
import { twMerge } from "tailwind-merge";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";

interface TaskTitleProps {
  className?: string;
}

const Title = Heading.extend({
  name: "title",
  parseHTML: () => [{ tag: "h1:first-child" }],
}).configure({ levels: [1] });

const DocumentWithTitle = Document.extend({
  content: "title",
});

export const TaskTitle = ({ className }: TaskTitleProps) => {
  const editor = useEditor({
    extensions: [
      DocumentWithTitle,
      Text,
      Title,
      Heading,
      Placeholder.configure({
        showOnlyCurrent: false,
        placeholder: () => {
          return "Digite um título";
        },
      }),
    ],
    onUpdate(props) {
      console.log(props.editor.getText());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className={twMerge("editorWrapper", className)}>
      <EditorContent
        className="prose prose-headings:mt-0 prose-headings:mb-0 prose-h1:font-semibold prose-h1:text-3xl"
        editor={editor}
      />
    </div>
  );
};
