import React from 'react'
import Title from 'antd/es/typography/Title';
import { Card, List } from 'antd';

export default function Question({ data, index }: { data: reactTheory.QuestionItemProps, index: number }) {
  console.log('data: ', data);
  const { question, detail = {} } = data;
  const { description, theory, summary, tips } = detail;
  return (
    <div className='question-and-answer-section'>
      <Title level={4} className='title-4'>{index + 1}、{question}</Title>
      <p>{description}</p>
      {theory?.map((v, j) => (
        <Card key={v.title} className='question-and-answer-section__card' bordered={false}>
          <Title level={5} className='title-4'>{index + 1}.{j + 1}) 、 {v.title}</Title>
          <p>{v.concept}</p>
          {v.methods?.map((k: { title: string; content: string }) => (<div key={k.title}>
            <div>{k.title}</div>
            <div>{k.content}</div>
          </div>))}
        </Card>
      ))}

      {summary && (<Card bordered={false}>
        <Title level={4} className='title-4'>总结:</Title>
        <List dataSource={summary} renderItem={(item) => <List.Item>{item}</List.Item>} />
      </Card>
      )}
      <div>{tips && `PS:${tips}`}</div>
    </div>
  )
}
