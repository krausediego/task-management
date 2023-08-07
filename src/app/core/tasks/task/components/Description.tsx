import { twMerge } from "tailwind-merge";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Paragraph from "@tiptap/extension-paragraph";
import Dropcursor from "@tiptap/extension-dropcursor";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";

interface TaskDescriptionProps {
  className?: string;
}

export const TaskDescription = ({ className }: TaskDescriptionProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      Text,
      TaskList,
      // Dropcursor,
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          className: "",
        },
      }),
    ],
    content: `
      <h2>Descrição</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <h2>Listagem de tarefas</h2>
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true">Item 1</li>
        <li data-type="taskItem" data-checked="false">Item 2</li>
        <li data-type="taskItem" data-checked="false">Item 2</li>
        <li data-type="taskItem" data-checked="false">Item 2</li>
        <li data-type="taskItem" data-checked="false">Item 2</li>
      </ul>
    `,
  });

  if (!editor) {
    return null;
  }

  return (
    // <div className={twMerge(className)}>
    <EditorContent
      className="prose px-4 mt-8 prose-headings:mt-0 prose-headings:mb-4 prose-h2:font-semibold prose-h2:text-2xl prose-h2:text-secondaryColor-500"
      editor={editor}
    />
    // {/* </div> */}
  );
};
