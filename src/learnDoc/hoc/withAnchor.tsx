import { Col, Row, Skeleton, Spin } from "antd";
import { AnchorItemProps } from "../../types";
import { Suspense, lazy } from "react";

const AffixAnchor = lazy(() => import("../components/AffixAnchor"));

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
        <Col flex="280px" >
          <Suspense fallback={<Spin tip="loading anchors"><Skeleton active /></Spin>}>
            <AffixAnchor anchorItems={anchorItems} />
          </Suspense>
        </Col>
      </Row>
    )
  }
}
