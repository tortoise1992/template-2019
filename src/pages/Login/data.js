export default {
    "success":true,
    "msg":"请求成功",
    "code":"000000",
    "obj":{
        "name":"admim",
        "menu":[
            {
                "_id": "1",
                "title": "我的桌面",
                "url": "/home",
                "icon": "dashboard",
                "children": []
            },
            // {
            //     "_id": "2",
            //     "title":"系统",
            //     "url": "/xitong",
            //     "icon": "setting",
            //     "children": [
            //         {
            //             "_id": "21",
            //             "title": "系统信息",
            //             "url": "/xitong/xinxi",
            //             "icon": ""
            //         },
            //         {
            //             "_id": "22",
            //             "title": "系统检测",
            //             "url": "/xitong/xitongjiance",
            //             "icon": ""
            //         },
            //         {
            //             "_id": "23",
            //             "title": "组织机构",
            //             "url": "/xitong/zuzhijigou",
            //             "icon": ""
            //         }
            //     ]
            // },
            
            {
                _id: 10,
                title: '行为画像',
                icon:"dashboard",
                children:[
                    {_id: 11,title:"群体画像",url:"/main/xingweihuaxiang/quntihuaxiang"},
                    {_id: 12,title:"个人画像",url:"/main/xingweihuaxiang/gerenhuaxiang"},
                ]
            },
            {
                _id: 40,
                title: '教职工信息',
                icon:"dashboard",
                children:[
                    {_id: 41,title:"个人信息",url:"/main/jiaozhigongxinxi/gerenxinxi"},
                    {_id: 42,title:"综合分析",url:"/main/jiaozhigongxinxi/zonghefenxi"},
                ]
            },
            {
                _id: 50,
                title: '财产资产',
                icon:"dashboard",
                url: "/main/caichanzichan",
            },
            {
                _id: 60,
                title: '后勤服务',
                icon:"dashboard",
                url: "/main/houqinfuwu",
            },
            {
                _id: 70,
                title: '系统设置',
                icon:"dashboard",
                children:[
                    {_id: 71,title:"账户管理",url:"/main/xitongshezhi/zhanghuguanli"},
                    {_id: 72,title:"角色权限管理",url:"/main/xitongshezhi/juesequanxianguanli"},
                ]
            }
        ]
    }
}