export default {
    'POST /authorize/login': (req, res) => {
        const { username, password } = req.body
        if (username === 'admin' && password === '123456') {
            res.send({
                success: true,
                msg: '请求成功',
                obj: {
                    username,
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
                            _id: '6',
                            title: '文章管理',
                            url: '/article',
                            icon: 'project',
                            children: [
                                {
                                    _id: '30',
                                    title: '文章列表',
                                    url: '/article/list',
                                    icon: '',
                                    children: []
                                },
                                {
                                    _id: '30',
                                    title: '标签管理',
                                    url: '/article/tags',
                                    icon: '',
                                    children: []
                                },
                            ]
                        },
                        {
                            _id: '2',
                            title: '百度地图',
                            url: '/bdmap',
                            icon: 'link',
                            children: []
                        },
                        {
                            _id: '3',
                            title: '自定义图表',
                            url: '/custom',
                            icon: 'project',
                            children: [
                                {
                                    _id: '30',
                                    title: '折线图',
                                    url: '/custom/line',
                                    icon: '',
                                    children: []
                                },
                            ]
                        },
                        {
                            _id: '4',
                            title: '流程图',
                            url: '/ggeditor',
                            icon: 'project',
                            children: [
                                {
                                    _id: '51',
                                    title: '流程图',
                                    url: '/ggeditor/Flow',
                                    icon: '',
                                    children: []
                                },
                                {
                                    _id: '52',
                                    title: 'Koni',
                                    url: '/ggeditor/Koni',
                                    icon: '',
                                    children: []
                                },
                                {
                                    _id: '53',
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
                                    _id: '20',
                                    title: '用户管理',
                                    url: '/system/user',
                                    icon: '',
                                    children: []
                                },
                                {
                                    _id: '21',
                                    title: '权限管理',
                                    url: '/system/permission',
                                    icon: '',
                                    children: []
                                }
                            ]
                        }
                    ]
                }

            })
        }else{
            res.send({
                success:false,
                msg:'用户名或者密码错误'
            })
        }
    }
}