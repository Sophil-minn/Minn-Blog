import { Card, Collapse } from 'antd';
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
// import './codeTypes.d.ts';

export default function Code({ value = "// some comment", title = "", height = 200 }) {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    try {
      requestIdleCallback(() => {
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      }, { timeout: 1000 })
    } catch (error) {
    }

  }, [monaco]);

  useEffect(() => {
    if (wrapperRef.current) {
      // const rect = wrapperRef.current?.getBoundingClientRect();
      monaco.editor.create(wrapperRef.current, {
        value,
        language: 'typescript',
      });

    }
    return () => {
      try {
        if (wrapperRef.current) {
          wrapperRef.current = null;
        }
      } catch (error) {

      }
    }

  }, []);


  return (
    <Card bordered={false} bodyStyle={{ padding: '8px 0', overflow: 'auto' }}>
      <Collapse
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: title,
            children: <div ref={wrapperRef} style={{ height }} />,
          }
        ]}
      />
    </Card>
  )
}
