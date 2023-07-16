import Title from 'antd/es/typography/Title';
import { Divider, List, Tag, Typography } from 'antd';

const { Text } = Typography;

export default function Introduction({ data, index }: { data: reactTheory.QuestionItemProps, index: number }) {
  const { question, id, detail = {} } = data;
  const { description, theory, summary, tips } = detail;
  return (
    <div className='question-and-answer-section'>
      <Divider />
      <Title level={4} className='title-4' id={id}>{index + 1}、{question}</Title>
      <Text>{description}</Text>
      <Divider />
      {theory?.map((v, j) => (
        <div key={v.title} className='question-and-answer-section__card'>
          <Title level={5} className='title-4'>{index + 1}.{j + 1}) 、 {v.title}</Title>
          <Text>{v.concept}</Text>
          {
            v.methods && <List dataSource={v.methods} renderItem={(item) => (
              <List.Item key={item.title}>
                <div>
                  <p>{item.title}</p>
                  <p><Text type="secondary">{item.content}</Text></p>
                  {item.tips && <Tag color="gold" style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{item.tips}</Tag>}
                </div>
              </List.Item>)} />
          }
          <Text type="secondary">{v.elements}</Text>
          {v.answer && <List dataSource={v.answer} renderItem={(item) => <List.Item>{item}</List.Item>} />}
          {v.tips && <Tag color="gold" style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{v.tips}</Tag>}
        </div>
      ))}
      {
        summary && (
          <>
            <Divider dashed />
            <Title level={4} className='title-4'>总结:</Title>
            <List dataSource={summary} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </>
        )
      }
      {tips && <Text type="warning">`PS:${tips}`</Text>}
    </div>
  )
}
