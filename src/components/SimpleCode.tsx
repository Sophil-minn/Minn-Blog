import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Card, Collapse, Divider, Typography } from 'antd';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
// import './codeTypes.d.ts';
const { Title, Paragraph, Text } = Typography;

export default function SimpleCode({ value = "// some comment", title = "title", height = 50, id = '' }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // do conditional chaining
    try {
      requestIdleCallback(() => {
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      }, { timeout: 1000 })
      // or make sure that it exists by other ways
      if (monaco) {
        // console.log('here is the monaco instance:', monaco);
      }
    } catch (error) {

    }

  }, [monaco]);

  useEffect(() => {

    // const rect = wrapperRef.current?.getBoundingClientRect();
    // try {
    //   requestIdleCallback(() => {

    //   }, { timeout: 1000 })

    // } catch (error) { }
    if (wrapperRef.current) {
      monaco.editor.create(wrapperRef.current, {
        value,
        language: 'typescript',
      });
    }
    return () => {
      try {
        if (wrapperRef.current) {
          // wrapperRef.current = null;

          const node = wrapperRef.current;
          if (node) {
            node.innerHTML = '';
          }
        }
      } catch (error) {

      }

    }

  }, []);


  return (
    <>
      <Title level={5} id={id}>{title}</Title>
      <Card bordered={false} bodyStyle={{ padding: '8px 0', overflow: 'auto' }}>
        <div ref={wrapperRef} style={{ height }} />
      </Card>
      <Divider />
    </>
  )
}
