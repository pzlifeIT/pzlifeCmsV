import {Message} from 'element-ui';

let errCollect = {
  ModelMessage: {
    editMessageTask: {
      3001: '标题为空',
      3002: '请选择消息模板或触发器',
      3003: '请选择任务类型',
      3004: '该短信模板未启用或者不存在',
      3005: '该触发器未启用或者不存在',
      3006: '该消息任务不存在',
      3007: '启用中无法修改',
      3008: '存在已启用的同类模板任务',
    },
    editMessageTemplate: {
      3001: '标题为空',
      3002: '请选择发送类型',
      3003: '内容模板不能为空',
      3004: '结束时间不能小于开始时间',
      3005: '启用中无法修改'
    },
    editTrigger: {
      3001: '状态码为空',
      3002: '参数错误3002',
      3003: '启用中无法修改',
      3004: '结束时间要大于开始时间15分钟'
    },
    auditMessageTask: {
      3001: '状态参数错误',
      3002: '参数错误',
      3003: '已经是该状态',
      3004: '短信模板未启或者不存在',
      3005: '触发其未启用或者不存在',
      3008: '存在已启用的同类模板任务'
    },
    auditMessageTemplate: {
      3001: '状态参数错误',
      3002: '参数错误3002',
      3003: '已经是该状态',
      3004: '存在已启用的消息任务，无法停用'
    },
    auditTrigger: {
      3001: '状态码为空',
      3002: '格式错误',
      3003: '该状态正在使用中',
      3004: '存在已启用的消息任务，无法停用'
    },
    getMessageTemplateText: {},
    saveMessageTask: {
      3001: '标题为空',
      3002: '请选择消息模板或触发器',
      3003: '请选择任务类型',
      3004: '该短信模板未启用或者不存在',
      3005: '该触发器未启用或者不存在',
      3006: '存在已启用的同类模板任务'
    },
    saveMessageTemplate: {
      3001: '标题不能为空',
      3002: '请选择发送类型',
      3003: '内容模板不能为空',
      3004: '结束时间不能小于开始时间',
      3005: '启用中无法修改'
    },
    addTrigger: {
      3001: '标题不能为空',
      3002: '时间格式错误',
      3003: '结束时间要大于开始时间15分钟'
    },
    getMessageTask: {
      3001: '状态必须为数字',
      3002: '错误的审核类型'
    },
    getMessageTemplate: {
      3001: '状态必须为数字',
      3002: '错误的审核类型'
    },
    getTrigger: {
      3001: '状态必须为数字',
      3002: '错误的审核类型'
    }
  },
  OfflineActivities: {
    verifyWinners: {},
    getWinning: {
      3001: '未查询到获奖记录',
      3002: '该商品已领取'
    },
    updateOfflineActivities: {
      3001: '标题为空',
      3002: '时间格式错误',
      3003: '结束时间不能小于开始时间',
      3004: '图片没有上传过'
    },
    updateOfflineActivitiesGoods: {
      3001: '该活动已过期',
      3002: '商品已下架或者不存在',
      3003: '参数错误'
    },
    getWinnerList: {
      3001: '中奖纪录错误'
    },
    addOfflineActivities: {
      3001: '标题为空',
      3002: '时间格式错误',
      3003: '结束时间不能小于开始时间',
      3004: '未接收到图片上传信息'
    },
    addOfflineActivitiesGoods: {
      3001: '该活动已过期',
      3002: '商品已下架或者不存在'
    },
    getQrcode: {
      3001: 'con_id长度只能是28位',
      3002: '缺少参数page',
      3003: 'scene不能为空',
      3004: '获取access_token失败',
      3005: '未获取到access_token',
      3006: '生成二维码识别',
      3007: 'scene最大长度32',
      3008: 'page不能为空',
      3009: '微信错误',
      30011: '上传失败',
      30012: '该会员不存在',
    },
    getOfflineActivities: {
      3001: '手机号格式错误',
      3002: '页码和查询条数只能是数字'
    },
    getOfflineActivitiesGoods: {
      3001: '手机号格式错误',
      3002: '页码和查询条数只能是数字'
    },
    resetOfflineActivitiesQrcode: {
      3001: 'con_id长度只能是28位',
      3002: '缺少参数page',
      3003: 'scene不能为空',
      3004: '获取access_token失败',
      3005: '未获取到access_token',
      3006: '生成二维码识别',
      3007: 'scene最大长度32',
      3008: 'page不能为空',
      3009: '微信错误',
      30011: '上传失败',
      30012: '该会员不存在',
    },
  },
  Order: {
    updateDeliverOrderGoods: {
      3001: '快递和快递单号不能为空',
      3002: '请输入正确的快递公司编码',
      3003: '订单商品不存在',
      3004: '非待发货订单无法发货或已发货订单无法变更',
      3005: '请先发货',
      3007: '不同用户订单不能使用同一物流公司物流单号发货'
    },
    getMemberOrders: {},
    getOrders: {
      3002: '页码和查询条数只能是数字',
      3003: '无效的状态查询'
    },
    getOrderInfo: {
      3002: '订单ID只能是数字',
      3003: '请选择任务类型'
    },
    deliverOrderGoods: {
      3001: '快递和快递单号不能为空',
      3002: '请输入正确的快递公司编码',
      3003: '订单商品不存在',
      3004: '非待发货订单无法发货或已发货订单无法变更',
      3005: '请先发货',
      3007: '不同用户订单不能使用同一物流公司物流单号发货'
    },
    getExpressList: {},
    searchKeywordOrders: {
      3001: '请选择订单关键词'
    }
  },
  Recommend: {
    updateRecommend: {
      3001: 'model_id和id只能是数字',
      3002: '无效的模块',
      3003: '信息不完整',
      3004: '请上传图片',
      3005: '未设置显示星期',
      3006: '请设置展示商品',
      3007: '未获取到数据',
      3008: '非法参数',
      3010: '图片没有上传过',
      3011: '修改失败'
    },
    delRecommend: {
      3002: '请先删除下级推荐'
    },
    resetRecommend: {},
    addRecommend: {
      3001: 'model_id和id只能是数字',
      3002: '无效的模块',
      3003: '信息不完整',
      3004: '请上传图片',
      3005: '未设置显示星期',
      3006: '请设置展示商品',
      3007: '未获取到数据',
      3008: '非法参数',
      3009: '超出添加数量',
      3010: '图片没有上传过',
      3011: '修改失败',
      3012: '不存在的关联上级内容',
      3013: '添加内容模板ID与父级模板ID不一致',
    },
    getRecommendId: {
      3001: 'model_id和tier只能是数字'
    },
    getRecommend: {},
    getRecommendInfo: {
      3001: 'id只能是数字'
    }
  },
  Rights: {
    getDiamondvipNetPush: {
      3001: '获取出错'
    },
    creatBossShareDiamondvip: {
      3001: '手机号格式错误',
      3002: '数字传值有误3002',
      3003: '该用户不是boss或不存在',
      3005: '超出金额设置范围'
    },
    auditDiamondvipBounty: {
      3001: '数字传值有误3001',
      3002: '该记录不存在',
      3003: '传入状态错误',
      3004: '错误的申请状态',
      3005: '已审核的无法再次进行相同的审核结果',
      3006: '审核失败',
      3007: '没有操作权限',
      3008: '当前审核时间不正确',
    },
    passBossShareDiamondvip: {
      3001: '数字传值有误3001'
    },
    auditManagerShopApply: {
      3001: '数字传值有误3001',
      3002: '数字传值有误3002',
      3003: '数字传值有误3003',
      3004: '错误的申请状态',
      3005: '已审核的无法再次进行相同的审核结果',
      3006: '审核失败',
      3007: '没有操作权限'
    },
    getBossShareDiamondvip: {
      3001: '数字传值有误3001'
    },
    auditShopApply: {
      3001: '数字传值有误3001',
      3002: '数字传值有误3002',
      3003: '数字传值有误3003',
      3004: '错误的申请状态',
      3005: '已审核的无法再次进行相同的审核结果',
      3006: '审核失败',
      3007: '没有操作权限'
    },
    getShopApplyList: {
      3001: '手机号校验失败',
      3002: '数字传值有误3002',
      3003: '身份证号校验失败',
      3004: '数字传值有误3004'
    }
  },
  suppliers: {
    supplieradminlist: {
      3001: '数字传值有误3001'
    },
    updatesupplier: {
      3001: '手机号码格式错误',
      3002: '请把信息填写完整',
      3003: '数字传值有误3003',
      3004: '更新失败',
      3005: '图片没有上传过',
      3006: '供应商不存在',
      3007: '供应商名称不能重复'
    },
    updateSupplierFreight: {
      3001: '数字传值有误3001',
      3002: '计价方式参数有误',
      3003: '标题和详情不能为空'
    },
    editsupplierfreightdetail: {
      3001: '数字传值有误3001',
      3002: '价格有误',
      3003: '运费详情不存在'
    },
    addSupplierFreightdetail: {
      3001: '数字传值有误3001',
      3002: '价格有误',
      3003: '运费模版不存在'
    },
    addsupplier: {
      3001: '手机号码格式错误',
      3002: '提交数据不完整',
      3003: '未选择图片',
      3004: '添加失败',
      3005: '图片没有上传过',
      3006: '供应商名字不能重复'
    },
    addsupplierfreight: {
      3001: '数字传值有误3001',
      3002: '数字传值有误3002',
      3003: '标题和详情不能为空'
    },
    updatesupplierfreightarea: {
      3001: 'id错误有误3001',
      3002: 'id错误有误3002',
      3003: '保存失败',
      3004: '错误有误3004'
    },
    addsupplieradmin: {
      3001: '账号不能为空',
      3002: '手机号格式有误',
      3003: '账号名称已存在',
      3004: '未注册用户不能添加',
      3005: '添加失败'
    },
    getsuppliers: {
      3001: '参数错误3001'
    },
    getsupplierfreights: {
      3002: '参数错误3002'
    },
    getSupplierFreight: {
      3002: '参数错误3002'
    },
    getSupplierFreightdetailList: {
      3002: '参数错误3002'
    },
    getSupplierFreightdetail: {
      3002: '参数错误3002'
    },
    getsupplierdata: {
      3002: '参数错误3002'
    },
    getsuppliersall: {}
  },
  user: {
    userdemotion: {
      3001: '手机格式有误',
      3002: '只能降级为钻石或普通会员 ',
      3003: '只有boss可以降级',
      3004: '有未完成订单',
      3006: '修改失败'
    },
    userdemotionlist: {},
    getUsers: {
      3001: '手机号格式错误',
      3002: '参数错误3002'
    }
  },
  admin: {
    editAdminBank: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '参数错误3003',
      3004: '没有更改的资料',
      3005: '银行英文缩写名和银行全称都不能重复'
    },
    adminRemittance: {
      3001: '密码错误',
      3002: '请选择转入类型',
      3003: '错误的转账类型',
      3004: '充值用户不存在',
      3005: '金额必须为数字 ',
      3006: '扣款金额不能大于用户余额(商券)',
      3007: '用户昵称不能为空',
      3008: '手机号格式错误',
    },
    auditAdminRemittance: {
      3001: '参数错误3001',
      3003: '不存在的记录',
      3004: '已审核的状态无法再次审核',
      3005: '参数错误3005',
      3006: '错误的审核类型'
    },
    checkUserCommissionTransfer: {
      3001: '参数错误3001',
      3002: '状态有误',
      3003: '参数错误3003',
      3004: '已审核的提现记录无法再次审核',
      3006: '已审核的银行卡或者用户停用的银行卡无法再次审核',
      3007: '审核失败'
    },
    checkUserBountyTransfer: {
      3001: '参数错误3001',
      3002: '状态有误',
      3003: '参数错误3003',
      3004: '已审核的提现记录无法再次审核',
      3006: '已审核的银行卡或者用户停用的银行卡无法再次审核',
      3007: '审核失败'
    },
    addAdminBank: {
      3001: '参数错误3001',
      3002: '状态有误',
      3003: '参数错误3003',
      3004: '银行英文缩写名和银行全称都不能为空',
      3005: '银行英文缩写名和银行全称都不能重复'
    },
    checkUserBank: {
      3001: '参数错误3001',
      3002: '错误的状态',
      3003: '参数错误3003',
      3004: '描述不能为空',
      3005: '错误的驳回选项',
      3006: '已审核的银行卡或者用户停用的银行卡无法再次审核'
    },
    editInvoice: {
      3001: '输入值必须为数字',
      3002: '比率不能超过100'
    },
    getAdminRemittance: {
      3001: '参数错误3001',
      3002: '错误的审核类型',
      3003: '起始时间格式错误',
      3004: '中止时间格式错误',
      3005: '收款金额必须为数字'
    },
    getInvoice: {},
    getLogTransfer: {
      3007: '参数错误3007',
      3006: '银行卡输入错误'
    },
    getAdminBank: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '开始时间格式错误',
      3004: '结束时间格式错误',
      3005: '转出金额必须为数字',
      3006: '银行卡输入错误',
      3007: '参数错误3007',
      3008: '参数错误3008',
      3009: '参数错误3009',
      3010: '参数错误3010',
      3011: '参数错误3011',
      3012: '参数错误3012'
    },
    getUserBank: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '银行卡号输入错误'
    },
    cmsmenu: {},
    cmsmenuone: {
      3001: '参数错误3001'
    },
    addpermissionsgrouppower: {
      3001: '参数错误3001',
      3003: '权限分组不存在',
      3004: '权限分组不能为空',
      3005: '数据有误',
      3006: '菜单不存在',
      3007: '更改失败'
    },
    editmenu: {
      3001: '参数错误3001',
      3002: '菜单不存在',
      3003: '修改失败'
    },
    midifypasswd: {
      3001: '密码错误',
      3002: '密码必须为6-16个任意字符',
      3003: '原密码不能为空',
      3004: '密码确认有误',
      3005: '修改密码失败'
    },
    editpermissionsapi: {
      3001: '参数错误3001',
      3004: '权限名称不能为空 ',
      3005: '接口不存在',
      3007: '修改失败'
    },
    editpermissionsgroup: {
      3001: '分组名称错误',
      3003: '修改的用户不存在',
      3004: '分组错误',
      3005: '修改失败'
    },
    deladminpermissions: {
      3001: '分组id错误',
      3003: '权限分组不存在',
      3004: '删除用户不存在',
      3005: '管理员id有误',
      3006: '删除的管理员不存在',
      3007: '删除失败'
    },
    login: {
      3001: '账号密码不能为空',
      3002: '用户不存在',
      3003: '密码错误',
      3004: '登录失败'
    },
    openboss: {
      3001: '手机格式有误',
      3002: '账号昵称不能为空',
      3003: '金额必须为数字',
      3004: '扣除金额不能是负数',
      3006: '用户不存在',
      3007: '该用户已经是boss',
      3008: '开通失败',
      3009: 'boss正在申请中'
    },
    getopenbosslist: {
      3001: '手机格式有误'
    },
    addadmin: {
      3001: '账号不能为空',
      3002: '密码必须为6-16个任意字符',
      3003: '只有root账户可以添加超级管理员',
      3004: '该账号已存在',
      3006: '添加失败'
    },
    addpermissionsapi: {
      3001: '参数错误3001',
      3002: '接口url不能为空',
      3003: '请选择接口权操作类型',
      3004: '权限名称不能为空',
      3005: '接口已存在',
      3006: '菜单不存在',
      3007: '添加失败'
    },
    addpermissionsgroup: {
      3001: '分组名称错误',
      3005: '添加失败'
    },
    addadminpermissions: {
      3001: '参数错误3001',
      3003: '权限分组不存在',
      3004: '添加用户不存在',
      3005: '参数错误3005',
      3006: '该成员已存在',
      3007: '添加失败'
    },
    getAdminUsers: {
      5001: '账号已停用'
    },
    getpermissionsapi: {},
    getpermissionsapione: {
      3001: '接口有误'
    },
    getpermissionslist: {
      3001: '参数错误3001'
    },
    getpermissionsgroupadmin: {
      3001: '参数错误3001'
    },
    getgroupinfo: {
      3001: '参数错误3001'
    },
    getadmingroup: {
      3001: '参数错误3001'
    },
    getadmininfo: {
      5001: '账号已停用'
    },
    bindManagerSearchKeyword: {
      3001: '参数错误3001',
      3002: '请输入关键词'
    },
    delManagerSearchKeyword: {
      3001: '参数错误3001',
      3002: '参数错误3002'
    }
  },
  category: {
    stopstartcate: {
      3001: '停用失败',
      3002: '参数错误',
      3003: '有子分类',
      3004: '该分类下有属性关系'
    },
    getcatelist: {
      3002: '参数错误3002',
      3003: '参数错误3003'
    },
    allCateList: {
      3001: '参数错误3001'
    },
    saveeditcate: {
      3001: '保存失败',
      3002: '参数错误3002',
      3003: '参数错误3003',
      3004: '分类不存在',
      3005: '该分类名称已经存在',
      3006: '图片没有上传过',
      3007: '没提交要修改的内容'
    },
    saveaddcate: {
      3001: '保存失败',
      3002: '分类名称不能为空',
      3003: '图片没有上传过',
      3004: '状态参数有误',
      3005: '该分类名称已经存在'
    },
    getthreecate: {},
    addcatepage: {},
    editcatepage: {
      3002: '参数错误3002'
    }
  },
  goods: {
    updowngoods: {
      3001: '商品不存在',
      3002: '参数必须是数字',
      3003: '没有可售库存',
      3004: '请填写零售价',
      3005: '请填写成本价',
      3006: '没有详情图',
      3007: '没有轮播图',
      3008: '上下架失败',
      3009: '请选择分类',
    },
    saveupdategoods: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品名称不能空 ',
      3004: '标题图不能空',
      3005: '参数错误3005',
      3006: '商品名称重复',
      3007: '提交的分类不是三级分类',
      3008: '供应商不存在',
      3009: '修改失败',
      3010: '图片没有上传过',
      3012: '分享图片没有上传过',
    },
    delgoodsspec: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '属性不存在',
      3004: '商品不存在',
      3005: '规格不能为空',
      3006: '该商品未绑定这个属性',
      3007: '提交失败',
      3008: '没有任何操作',
      3009: '提交的属性分类和商品分类不同',
      3013: '商品下架才能编辑'
    },
    delgoodsimage: {
      3001: '图片不能为空',
      3002: '图片不存在',
      3003: '上传失败'
    },
    getgoodslist: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '参数错误3003',
      3004: '参数错误3004',
      3005: '参数错误3005'
    },
    sortimagedetail: {
      3001: '图片不能为空',
      3002: '图片不存在',
      3003: '排序字段只能为数字',
      3004: '上传失败'
    },
    uploadgoodsimages: {
      3001: '图片类型有误',
      3002: '参数错误3002',
      3003: '图片不能空',
      3004: '商品不存在',
      3005: '图片没有上传过',
      3006: '上传失败'
    },
    saveaddgoods: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品名称不能空 ',
      3004: '标题图不能空',
      3005: '参数错误3005',
      3006: '商品名称重复',
      3007: '提交的分类不是三级分类',
      3008: '供应商不存在',
      3009: '修改失败',
      3010: '图片没有上传过'
    },
    addgoodsspec: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '属性不存在',
      3004: '商品不存在',
      3005: '规格不能为空',
      3006: '商品已有该规格属性',
      3007: '提交失败',
      3008: '没有任何操作',
      3009: '提交的属性分类和商品分类不同',
      3013: '商品下架才能编辑'
    },
    editgoodssku: {
      3001: '参数错误3001',
      3002: '库存必须为大于或等于0的数字',
      3003: '价格必须为大于或等于0的数字',
      3004: '积分必须为大于或等于0的数字 ',
      3005: ':图片没有上传过',
      3006: '零售价不能小于成本价',
      3007: 'sku不存在',
      3008: '编辑失败',
      3009: '选择的供应商有误',
      3010: '请填写零售价和成本价',
      3011: '选择重量模版必须填写重量',
      3012: '选择体积模版必须填写体积',
      3013: '商品下架才能编辑',
      3014: '未选择运费，不能保存'
    },
    getgoodssku: {
      3001: '参数错误3001'
    },
    getonegoods: {
      3001: '参数错误3001',
      3003: '参数错误3003'
    },
    saveAudioSku: {
      3001: '请选择音频',
      3002: '参数错误3002',
      3003: '音频不存在无法添加',
      3004: '价格必须为大于或等于0的数字',
      3005: '积分必须为大于或等于0的数字且长度不超过10位 ',
      3006: '结束时间有误',
      3007: '商品不是音频商品',
      3008: '更新失败',
      3009: '该sku不存在',
      3010: '该用户没有权限',
      3011: '已上架商品无法编辑',
      3012: 'sku名称长度超出30个字',
    },
    addaudiosku: {
      3001: '请选择音频',
      3002: '参数错误3002',
      3003: '音频不存在无法添加',
      3004: '价格必须为大于或等于0且不超过8位数的数字',
      3005: '积分必须为大于或等于0的数字且长度不超过10位 ',
      3006: '结束时间有误',
      3007: '商品不是音频商品',
      3008: '更新失败',
      3009: 'sku名称为空或长度超出30个字',
    },
    getGoodsAudioSku: {
      3002: '参数错误3002',
    },
    addSheet: {
      3001: '存在相同名称的表格',
      3002: '表格名称不能为空',
      3003: '表格模板不能为空',
      3005: '添加失败'
    }
  },
  audios: {
    editaudio: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '更新失败'
    },
    asyncaudios: {},
    audioslist: {}
  },
  label: {
    labeldel: {},
    goodslabellist: {},
    searchlabel: {},
    addlabeltogoods: {
      3001: '标签名不能未空',
      3002: '参数错误3002',
      3003: '商品不存在',
      3004: '标签已关联该商品',
      3005: '标签长度不能超过50',
      3006: '添加失败'
    }
  },
  provinces: {
    getProvinceCity: {},
    getArea: {
      3001: '参数错误3001',
      3002: '参数错误3002'
    },
    getCity: {
      3001: '参数错误3001',
      3002: '参数错误3002'
    },
    getprovincecitybyfreight: {
      3001: '参数错误3001',
      3002: '参数错误3002'
    }
  },
  spec: {
    saveEditSpecAttr: {
      3001: '保存失败',
      3002: '参数错误'
    },
    delspecattr: {
      3002: '参数错误',
      3003: '无法删除'
    },
    getspeclist: {},
    savespecattr: {
      3002: '参数错误3002',
    },
    addattrpage: {},
    getspecattr: {
      3001: '保存失败',
      3002: '参数错误3002'
    },
    getAttr: {
      3001: '保存失败',
      3002: '参数错误3002'
    },
    getEditData: {
      3001: '保存失败',
      3002: '参数错误3002'
    }
  },
  subject: {
    editsubject: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '排序只能是数字',
      3004: '专题不存在',
      3005: '专题名已存在',
      3007: '没提交要修改的内容',
      3008: '保存失败'
    },
    delgoodssubject: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品不存在'
    },
    delgoodssubjectassoc: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品和专题没有关联',
      3004: '取消失败'
    },
    subjectgoodsassoc: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品不存在',
      3004: '专题不存在',
      3005: '已经关联',
      3006: '保存失败'
    },
    getallsubject: {
      3001: '参数错误3001'
    },
    addsubject: {
      3001: '状态有误',
      3002: '参数错误3002',
      3003: '专题名不能为空',
      3004: '查不到上级专题',
      3005: '专题名已存在',
      3006: '图片没有上传过',
      3007: '保存失败'
    },
    getsubjectdetail: {
      3001: '参数错误3001'
    },
    getgoodssubject: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '商品不存在'
    }
  },
  upload: {
    uploadfile: {
      3001: '上传的不是图片',
      3002: '上传图片不能超过2M',
      3003: '上传失败',
      3004: '上传文件不能为空'
    },
    uploadmultifile: {
      3001: '上传的不是图片',
      3002: '上传图片不能超过2M',
      3003: '上传失败',
      3004: '上传文件不能为空'
    }
  },
  coupons: {
    bindcouponhd: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '优惠券不存在',
      3004: '优惠券活动不存在',
      3005: '活动已关联',
      3008: '修改失败'
    },
    unbindcouponhd: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '优惠券不存在',
      3004: '优惠券活动不存在',
      3005: '活动已关联',
      3008: '修改失败'
    },
    modifycoupon: {
      3001: '优惠券金额有误',
      3002: 'id传入错误',
      3003: '参数错误3003',
      3004: '标题不能为空',
      3005: '天数有误',
      3006: 'id参数有误',
      3007: '优惠券不存在',
      3008: '修改失败'
    },
    modifycouponhd: {
      3001: '标题不能未空',
      3002: '参数id有误',
      3003: '状态有误',
      3004: '优惠券活动不存在',
      3008: '添加失败'
    },
    modifycouponhdstatus: {
      3001: '参数错误3001',
      3004: '优惠券活动不存在',
      3005: '修改失败'
    },
    deletecoupon: {
      3001: '参数错误3001',
      3002: '优惠券已绑定活动',
      3005: '删除失败'
    },
    deletecouponhd: {
      3001: '参数错误3001',
      3002: '优惠券已绑定活动',
      3005: '删除失败'
    },
    addcoupon: {
      3001: '优惠券金额有误',
      3002: 'id传入错误',
      3003: '参数错误3003',
      3004: '标题不能为空',
      3005: '天数有误',
      3006: 'id参数有误',
      3007: '优惠券不存在',
      3008: '添加失败'
    },
    addcouponhd: {
      3001: '标题不能未空',
      3003: '添加失败'
    },
    getcouponlist: {},
    gethdcouponlist: {
      3001: '参数错误3001'
    },
    saveHd: {
      3001: 'title为空',
      3002: '存在进行中的抽奖活动',
      3003: '开始时间格式错误',
      3004: '结束时间格式错误'
    },
    updateHd: {
      3001: '参数错误3001',
      3002: '存在进行中的抽奖活动',
      3003: '开始时间格式错误',
      3003: '结束时间格式错误'
    },
    addHdGoods: {
      3001: '参数错误3001',
      3002: '图片不能未空',
      3003: '请选择抽奖种类',
      3004: '抽奖内容不能未空',
      3005: '碎片个数不能未空',
      3006: '奖品名称不能未空或超出30个字',
      3007: '中奖概率必须是小数且不能未负数',
      3008: '奖品个数为八个',
      3009: '总抽奖概率大于1',
      3010: '已经有通用碎片,无法再次添加',
      3012: '该商品SKU不存在',
      3013: '该优惠券不存在'
    },
    getHd: {
      3001: '参数错误3001',
      3002: '参数错误3002',
      3003: '参数错误3003'
    },
    getHdGoods: {
      3001: '参数错误3001'
    },
    saveHdGoods: {}
  },
  tabble: {}
}

function msgHint(code, url = '') {
  if (!url) throw new Error('url未传入');
  let port = url.split('/');
  let text = '';
  if (errCollect[port[0]] && errCollect[port[0]][port[1]] && errCollect[port[0]][port[1]][code]) {
    text = errCollect[port[0]][port[1]][code]
  } else {
    text = '意料之外的错误'
  }
  Message({message: text, type: 'error'});
}

export {
  msgHint
}
