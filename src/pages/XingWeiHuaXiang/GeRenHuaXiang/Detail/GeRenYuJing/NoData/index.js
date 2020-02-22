import React from 'react';
import noDataImg from './NoData.png';
import styles from './index.module.less'
/**
 * data  无值时显示加载动画，设置为'nodata'时显示暂无数据
 * height  设置组件高度, 默认height为300px
 */

 export default function NoData(props){
     return(
            <div className={styles.noDataCon} style={{height: props.height ? props.height : '300px'}}>
                <img src={noDataImg} alt="nodata"/>
            </div>
     )
 }

