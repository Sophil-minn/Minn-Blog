import { Card, Collapse, Divider, Typography } from 'antd';
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';

const { Title } = Typography;

export default function OnlyCode({ value = "// some comment", title = "", height = 50, id = '' }: any) {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    // do conditional chaining
    try {
      requestIdleCallback(() => {
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      }, { timeout: 1000 })
      if (monaco) {
      }
    } catch (error) {

    }

  }, [monaco]);

  useEffect(() => {
    if (wrapperRef.current) {
      monaco.editor.create(wrapperRef.current, {
        value,
        language: 'typescript',
        theme: "vs-dark"
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
    <>
      <Title level={5} id={id}>{title}</Title>
      <Card bordered={false} bodyStyle={{ padding: '8px 0', overflow: 'auto' }}>
        <div ref={wrapperRef} style={{ height }} />
      </Card>
      <Divider />
    </>
  )
}
