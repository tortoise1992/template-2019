import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { MindContextMenu } from '../components/EditorContextMenu';
import { MindToolbar } from '../components/EditorToolbar';
import { MindDetailPanel } from '../components/EditorDetailPanel';
import data from '../mock/worldCup2018.json';
import  '../Flow/index.less';

GGEditor.setTrackable(false);

const MindPage = () => {
  return (
   
      <GGEditor className={'editor'}>
        <Row type="flex" className={'editorHd'}>
          <Col span={24}>
            <MindToolbar />
          </Col>
        </Row>
        <Row type="flex" className={'editorBd'}>
          <Col span={20} className={'editorContent'}>
            <Mind data={data} className={'mind'} />
          </Col>
          <Col span={4} className={'editorSidebar'}>
            <MindDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <MindContextMenu />
      </GGEditor>
  );
};

export default MindPage;
