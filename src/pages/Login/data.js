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
            {
                "_id": "2",
                "title":"系统",
                "url": "/xitong",
                "icon": "setting",
                "children": [
                    {
                        "_id": "21",
                        "title": "系统信息",
                        "url": "/xitong/xinxi",
                        "icon": ""
                    },
                    {
                        "_id": "22",
                        "title": "系统检测",
                        "url": "/xitong/xitongjiance",
                        "icon": ""
                    },
                    {
                        "_id": "23",
                        "title": "组织机构",
                        "url": "/xitong/zuzhijigou",
                        "icon": ""
                    }
                ]
            },
        ]
    }
}