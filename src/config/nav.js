export default {
    success: true,
    msg: '请求成功',
    obj: {
        token:'testtoken',
        menu:[
            {
                _id: '1',
                title: '首页',
                url: '/home',
                icon: 'home',
                children: []
            },
            
            {
                _id: '2',
                title: '百度地图',
                url: '/bdmap',
                icon: 'link',
                children: []
            },
            
            {
                _id: '4',
                title: '流程图',
                url: '/ggeditor',
                icon: 'project',
                children: [
                    {
                        _id: '41',
                        title: '流程图',
                        url: '/ggeditor/Flow',
                        icon: '',
                        children: []
                    },
                    {
                        _id: '42',
                        title: 'Koni',
                        url: '/ggeditor/Koni',
                        icon: '',
                        children: []
                    },
                    {
                        _id: '43',
                        title: '脑图',
                        url: '/ggeditor/Mind',
                        icon: '',
                        children: []
                    },
                ]
            },
            {
                _id: '5',
                title: '系统管理',
                url: '/system',
                icon: 'setting',
                children: [
                    {
                        _id: '51',
                        title: '用户管理',
                        url: '/system/user',
                        icon: '',
                        children: []
                    },
                    {
                        _id: '52',
                        title: '权限管理',
                        url: '/system/permission',
                        icon: '',
                        children: []
                    }
                ]
            }
           
            
        ]
    }

}