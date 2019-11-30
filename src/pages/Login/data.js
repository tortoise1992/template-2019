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
                "title":"商品目录",
                "url": "/shangpin",
                "icon": "setting",
                "children": [
                    {
                        "_id": "21",
                        "title": "商品分类",
                        "url": "/shangpin/fenlei",
                        "icon": "",
                        
                    }
                ]
            },
            {
                "_id": "3",
                "title":"凭证管理",
                "url": "/pingzheng",
                "icon": "setting",
                "children": [
                    {
                        "_id": "31",
                        "title": "新增凭证",
                        "url": "/pingzheng/xinzeng",
                        "icon": "",
                        
                    },
                    {
                        "_id": "32",
                        "title": "查看凭证",
                        "url": "/pingzheng/chakan",
                        "icon": "",
                        
                    },
                    {
                        "_id": "33",
                        "title": "凭证汇总表",
                        "url": "/pingzheng/huizong",
                        "icon": "",
                        
                    }
                ]
            },
        ]
    }
}