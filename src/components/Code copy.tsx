// import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
// import './codeTypes.d.ts';

export default function Code({ value = "// some comment" }) {
  const [rect, setRect] = useState<{ rect?: DOMRect }>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef(null);
  // const monaco = useMonaco();

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  useEffect(() => {
    if (wrapperRef.current) {
      // const rect = wrapperRef.current?.getBoundingClientRect();
      monaco.editor.create(wrapperRef.current, {
        value,
        language: 'javascript',
      });
      // ResizeObserver 可以在元素大小变化后执行回调,所以在这里可以获取元素的最新 rect。
      // const observer = new ResizeObserver(() => {
      //   const rect = wrapperRef.current?.getBoundingClientRect();
      //   // 使用 rect
      //   setRect({ rect })

      // });
      // observer.observe(wrapperRef.current);
    }
    return () => {
      if (wrapperRef.current) {
        // wrapperRef.current = null;
        const node = wrapperRef.current;
        if (node) {
          node.innerHTML = '';
        }

      }

    }
  });

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    console.log(editor, 1111);
  }

  function handleEditorChange(value: string | undefined, event: any) {
    console.log('here is the current model value:', value);
  }

  function handleEditorWillMount(monaco: any) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }
  return (
    <div ref={wrapperRef} style={{ height: 400, width: '100%' }}>
      {/* <Editor height="90" defaultLanguage="javascript" defaultValue="// some comment" /> */}
      {/* <Editor
        height={rect.rect?.height}
        width={rect.rect?.width}
        defaultLanguage="javascript"
        defaultValue="// value comment"
        value={value}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      /> */}
      {/* <Editor height="90vh" defaultValue="// some comment" defaultLanguage="javascript" /> */}
    </div>
  )
}
