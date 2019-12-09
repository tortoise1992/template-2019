import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { KoniContextMenu } from '../components/EditorContextMenu';
import { KoniToolbar } from '../components/EditorToolbar';
import { KoniItemPanel } from '../components/EditorItemPanel';
import { KoniDetailPanel } from '../components/EditorDetailPanel';
import KoniCustomNode from './shape/nodes/KoniCustomNode';
import '../Flow/index.less';

GGEditor.setTrackable(false);

const KoniPage = () => {
  return (
    
      <GGEditor className={'editor'}>
        <Row type="flex" className={'editorHd'}>
          <Col span={24}>
            <KoniToolbar />
          </Col>
        </Row>
        <Row type="flex" className={'editorBd'}>
          <Col span={4} className={'editorSidebar'}>
            <KoniItemPanel />
          </Col>
          <Col span={16} className={'editorContent'}>
            <Koni className={'koni'} />
          </Col>
          <Col span={4} className={'editorSidebar'}>
            <KoniDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <KoniCustomNode />
        <KoniContextMenu />
      </GGEditor>
  );
};

export default KoniPage;
