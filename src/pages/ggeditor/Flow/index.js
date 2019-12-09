import React from 'react';
import { Row, Col,Card } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { FlowContextMenu } from '../components/EditorContextMenu';
import { FlowToolbar } from '../components/EditorToolbar';
import { FlowItemPanel } from '../components/EditorItemPanel';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
import './index.less';

GGEditor.setTrackable(false);

const FlowPage = () => {
  return (
      <Card>
          <GGEditor className={'editor'}>
        <Row type="flex" className={'editorHd'}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row type="flex" className={'editorBd'}>
          <Col span={4} className={'editorSidebar'}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={'editorContent'}>
            <Flow className={'flow'} />
          </Col>
          <Col span={4} className={'editorSidebar'}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
      </Card>
      
  );
};

export default FlowPage;
