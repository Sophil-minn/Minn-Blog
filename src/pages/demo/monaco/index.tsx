import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Card } from 'antd';
import { relative } from 'path';
import { useRef } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import RenderCode from './RenderCode';


export default function Index() {
  const editorRef = useRef(null);


  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    console.log(editor, 1111);
  }


  function showValue() {
    console.log((editorRef.current as any)?.getValue());
  }


  function handleEditorChange(value: string | undefined, event: any) {
    console.log('here is the current model value:', value);
  }


  function handleEditorWillMount(monaco: any) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }


  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Outlet />
      <Card style={{ width: 1000, height: 800, overflow: 'hidden' }}>
        <Editor
          height={800}
          width={900}
          defaultLanguage="javascript"
          defaultValue="// some comment"
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
      </Card>

    </>
  )
}