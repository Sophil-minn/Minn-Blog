import { Col, Row } from "antd"
import AffixAnchor from "../components/AffixAnchor"
import { AnchorItemProps } from "../types";

interface AffixAnchorProps {
  anchorItems?: AnchorItemProps[] | any
}

export const withAnchor = (Component: React.ComponentType<AffixAnchorProps>) => {
  return (props: AffixAnchorProps) => {
    const { anchorItems } = props;
    return (
      <Row wrap={false}>
        <Col flex="auto">
          <Component />
        </Col>
        <Col flex="280px">
          <AffixAnchor anchorItems={anchorItems} />
        </Col>
      </Row>
    )
  }
}
