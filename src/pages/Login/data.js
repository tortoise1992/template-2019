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
            }
        ]
    }
}