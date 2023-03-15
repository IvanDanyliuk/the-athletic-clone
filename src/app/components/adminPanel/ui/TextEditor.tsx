import React from 'react';
import { Control, Controller, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface ITextEditorProps {
  name: string,
  control: Control<any>,
  register: UseFormRegister<any>,
  registerOptions?: RegisterOptions,
  error?: FieldError,
  [x: string]: any,
}

const TextEditor: React.FC<ITextEditorProps> = ({ name, control, register, registerOptions, error, ...props }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <Controller 
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <ReactQuill 
          theme='snow'
          onChange={(name) => onChange(name)} 
          value={value}
          modules={modules} 
          formats={formats} 
        />
      )}
    />
  );
};

export default TextEditor;