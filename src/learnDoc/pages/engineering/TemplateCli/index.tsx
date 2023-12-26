import { Collapse, Divider, Typography } from "antd";
import { lazy } from "react";
import { code1, code2 } from "./code";
import { code13 } from "../WebDevStandard/code";

const SimpleCode = lazy(() => import("../../../components/SimpleCode"));
const { Title, Paragraph } = Typography;

export default function TemplateCli() {
  return (
    <div className="info-container">
      <Title level={3}>生成模板脚手架</Title>
      <Paragraph>
        项目开发中经常有些重复性的工作，如果一直手动去做，费时费力效率低，所以很有必要通过脚手架进行提效
      </Paragraph>
      <Title level={4}>从业务中沉淀出自己的模版</Title>
      <Paragraph>
        以本项目为例，编写本项目适用的工具，解决一些重复性的工作：
      </Paragraph>
      <Title level={3}>第一步</Title> 
      <Paragraph>
        沉淀模板, 例如本项目中的重复性比较多的：
        <Collapse
          size="small"
          items={[
            {
              key: "1",
              label: "文章通用模版",
              children: <SimpleCode value={code2} height={300} />,
            },
          ]}
        />
        <Divider />
        <Collapse
          size="small"
          items={[
            {
              key: "1",
              label: "带有锚点定位的组件模版",
              children: <SimpleCode value={code13} height={300} />,
            },
          ]}
        />
      </Paragraph>
      <Title level={3}>第二步</Title>
      <Paragraph>
        <Collapse
          size="small"
          items={[
            {
              key: "1",
              label: "node脚本代码示例",
              children: <SimpleCode value={code1} height={900} />,
            },
          ]}
        />
      </Paragraph>
    </div>
  );
}
