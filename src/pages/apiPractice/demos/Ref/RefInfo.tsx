import { Card, Divider, Typography } from 'antd';
import { lazy } from 'react'
import { code1, code2, code3, code4 } from './code';
import ClickCounter from './Example/ClickCounter';
import Stopwatch from './Example/Stopwatch';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function RefInfo() {
  return (
    <>
      <Title level={3} id="useRef">useRef</Title>
      <Paragraph>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</Paragraph>
      <SimpleCode value="const ref = useRef(initialValue)" height={30} />
      <Title level={3}>Reference </Title>
      <Paragraph>Call useRef at the top level of your component to declare a ref.</Paragraph>
      <SimpleCode value={code1} height={120} />
      <Title level={3} id="useReducerInfoId">用法</Title>
      <Title level={4} id="Referencing-a-value-with-a-ref">Referencing a value with a ref </Title>
      <Paragraph>Call useRef at the top level of your component to declare one or more refs.</Paragraph>
      <SimpleCode value={code2} height={120} />
      <Paragraph>
        useRef returns a ref object with a single current property initially set to the initial value you provided.
      </Paragraph>
      <Paragraph>
        On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.
      </Paragraph>
      <Paragraph>
        Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property:
        <SimpleCode value={code3} height={150} />
        Later, you can read that interval ID from the ref so that you can call clear that interval:
        <SimpleCode value={code4} height={120} />
      </Paragraph>
      <Paragraph>
        By using a ref, you ensure that:
        <ul>
          <li>You can store information between re-renders (unlike regular variables, which reset on every render).</li>
          <li>Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).</li>
          <li>The information is local to each copy of your component (unlike the variables outside, which are shared).</li>
        </ul>
        Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead.
      </Paragraph>
      <Card title="Examples of referencing a value with useRef">
        <Title level={5}>ClickCounter</Title>
        <ClickCounter />
        <Divider />
        <Title level={5}>Stopwatch</Title>
        <Stopwatch />
      </Card>
    </>
  )
}


