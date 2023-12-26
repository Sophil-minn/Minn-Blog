import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function ComponentEnginering() {
  return (
    <>
      <Title level={2}>工程化</Title>
      <Title level={3}>工程四件套</Title>
      <Paragraph>
        <ul>
          <li>path</li>
          <li>glob</li>
          <li>fs-extra</li>
          <li>chalk</li>
        </ul>
      </Paragraph>
      <Title level={3}>编写前端组件模版</Title>
      <Title level={3}>编写node脚本</Title>
      <Paragraph>
        步骤分三步：
        <ul>
          <li>新建目录</li>
          <li>读取模版</li>
          <li>写文件</li>
        </ul>
      </Paragraph>
    </>
  )
}


