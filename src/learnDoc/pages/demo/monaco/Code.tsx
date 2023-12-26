import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';
// import './codeTypes.d.ts';

export default function Code({ value = "// some comment" }) {
  const [rect, setRect] = useState<{ rect?: DOMRect }>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef(null);

  // useEffect(() => {
  // useEffect() 会在组件渲染后执行,所以可以在这里获取元素的最新 rect。但是,如果元素在渲染后发生变化,useEffect() 无法捕获到,需要其他方式。
  //   if (wrapperRef.current) {
  //     const rect = wrapperRef.current.getBoundingClientRect();
  //     console.log('rect: ', rect);
  //     setRect({ rect });
  //   }
  // })

  useEffect(() => {
    if (wrapperRef.current) {
      // ResizeObserver 可以在元素大小变化后执行回调,所以在这里可以获取元素的最新 rect。
      const observer = new ResizeObserver(() => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        // 使用 rect
        setRect({ rect })
      });
      observer.observe(wrapperRef.current);
    }
  });

  // useEffect(() => {
  //   let raf;
  //   function onFrame() {
  //     // requestAnimationFrame 可以在每帧中执行,并获取元素的 rect,这可以提供很高的精度
  //     raf = requestAnimationFrame(onFrame);
  //     const rect = wrapperRef.current?.getBoundingClientRect();
  //     // 使用 rect
  //     // setRect({ rect });
  //   }
  //   if (wrapperRef.current) {
  //     onFrame();
  //   }
  //   return () => {
  //     raf = null
  //   }
  // });


  function handleEditorDidMount(editor: any, monaco: any) {

    editorRef.current = editor;
    console.log(editor, 1111);
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
    <div ref={wrapperRef}>
      <Editor
        height={rect.rect?.height}
        width={rect.rect?.width}
        defaultLanguage="javascript"
        defaultValue="// value comment"
        value={value}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </div>
  )
}
