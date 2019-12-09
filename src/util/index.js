import ExportJsonExcel from 'js-export-excel'

export /**
 *导出table的数据到excel *
 * @param {*} column 列配置
 * @param {*} data 数据
 * @param {*} filename 导出的文件名称
 */
const ExportTableData=(columns,data,filename)=>{
    columns=columns.filter(item=>item.dataIndex && item.dataIndex !== 'key')
    let sheetHeader=columns.map(item=>item.title)
    let option = {};
    let dataTable = [];
    if (data) {
        for (let i in data) {
            if (data) {
                let obj = {}
                columns.forEach(item=>{
                    obj[item.title]=data[i][item.dataIndex] || ''
                })
                dataTable.push(obj);
            }
        }
    }
    option.fileName = filename
    option.datas = [
        {
            sheetData: dataTable,
            sheetName: 'sheet',
            sheetFilter: sheetHeader,
            sheetHeader: sheetHeader,
        }
    ];
    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel()
}