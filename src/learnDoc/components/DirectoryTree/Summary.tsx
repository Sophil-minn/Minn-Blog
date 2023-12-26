import { FC } from 'react';
import { Typography } from "antd";
import {
  PlusOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { activeIcons, initIcons } from "./config";

const { Title, Paragraph } = Typography;

const Summary: FC = () => {
  return (
    <>
      <Title level={5}>一、按钮提取封装</Title>
      <Paragraph>
        {initIcons}
        被点击后高亮为,{activeIcons}
        他们被点亮的逻辑一样， 提取封装在ButtonHoc中，
      </Paragraph>
      <Title level={5}>二、弹窗封装</Title>
      <Paragraph>
        点击{initIcons}后，出现的各自对应的弹窗除了 标题和 内容不同，其他逻辑都一样， 所以可以把弹窗UI相关的部分封装在ModalHoc里，
        根据不同的按钮类型显示不同内容的逻辑封装在hooks里，
      </Paragraph>
      <Title level={5}>三、form表单封装</Title>
      <Paragraph>
        点击<PlusOutlined />和<FilterOutlined />后，出现的弹窗弹窗里的form表单，
        再次进行抽象封装为FormByConfig，这样可以根据配置去拓展，不需要每次写大量重复的代码，FormByConfig也可以复制 到其他地方用只需要改改配置项即可
      </Paragraph></>
  );
};

export default Summary;