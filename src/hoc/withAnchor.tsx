import { Col, Row } from "antd"
import AffixAnchor from "../components/AffixAnchor"
import { AnchorItemProps } from "../types";

interface AffixAnchorProps {
  anchorItems?: AnchorItemProps[]
}

export const withAnchor = (Component: React.ComponentType<AffixAnchorProps>) => {
  return (props: AffixAnchorProps) => {
    const { anchorItems, ...rest } = props;
    return (
      <Row wrap={false}>
        <Col flex="auto">
          <Component {...rest} />
        </Col>
        <Col flex="280px">
          <AffixAnchor anchorItems={props.anchorItems} />
        </Col>
      </Row>
    )
  }
}
