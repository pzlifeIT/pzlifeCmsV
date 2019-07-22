<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/offline' }" >线下活动</el-breadcrumb-item>
        <el-breadcrumb-item>线下活动商品列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加商品</el-button>
  </div>

    <el-table :data="goodList" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column  prop="goods_id" label="商品id" ></el-table-column>
      <el-table-column  prop="goods.goods_name" label="商品名称" ></el-table-column>
      <el-table-column  prop="statusText" label="	商品状态" ></el-table-column>
      <el-table-column  prop="create_time" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="操作"  >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="getGoodInfo(scope.row.id,scope.row.goods_id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <v-card name='商品' :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @hideCard="hideCard"></v-card>

  </div>
</template>

<script>
import vScreen from '../../component/screen'
import vCard from '../../component/card'
export default {
  data(){
    return {
      cardStatus:false,
      ruleForm:{},
      rules:['title'],
      ruleType:{
        'title':{
          type:'input',
          label:'奖品名称',
          placeholder:'请输入奖品名称'
        },
        'probability':{
          type:'number',
          label:'中奖概率',
          placeholder:'请输入中奖概率'
        },
        'probability':{
          type:'number',
          label:'中奖概率',
          placeholder:'请输入中奖概率'
        },
        'kind':{
          type:'select',
          label:'抽奖种类',
          placeholder:'请选择抽奖种类',
          option:[{
            value:'1',
            label:'优惠券'
          },{
            value:'2',
            label:'商品SKU'
          },{
            value:'1',
            label:'积分'
          }]
        },
        'debris':{
          type:'input',
          label:'碎片个数',
          placeholder:'请输入碎片个数'
        },
        'image':{
          type:'image',
          label:'图片',
          placeholder:'请上传图片'
        }
      },
      screen:{
        page:1,
        page_num:10,
        active_id:''
      },
      goodList:[]
    }
  },
  components:{
      vPagination,
      vCard
  },
  mounted(){
    this.screen.active_id = this.$route.query.id;
    this.getHdGoods()
  },
  methods: {
    getGoodInfo(id,gid){
        this.ruleForm = {
          id:id,
          goods_id:gid
        }
        this.cardStatus = true
    },
    getsupplierdata(id){
      let that =this;
      that.$request({
        data: {
          supplierId:id
        },
        url: 'suppliers/getsupplierdata',
        success(res){
          that.ruleForm = res.data
          that.cardStatus = true
        }
      })
    },
    showCard(){
      this.ruleForm = {}
      this.cardStatus = true
    },
    hideCard(){
      this.cardStatus = false
    },
    sumbit(data){
      data.ruleForm.active_id = this.screen.active_id;
      data.ruleForm.id ?this.saveHdGoods(data.ruleForm):this.addHdGoods(data.ruleForm)
    },
    addHdGoods(data){
      let that =this;
      that.$request({
        data: data,
        url: 'coupons/addHdGoods',
        form:1,
        success(res){
          that.ruleForm = {}
          that.getHdGoods()
          that.cardStatus = false
        }
      })
    },
    saveHdGoods(data){
      let that =this;
      that.$request({
        data: data,
        url: 'coupons/saveHdGoods',
        form:3,
        success(res){
          that.ruleForm = {}
          that.getHdGoods()
          that.cardStatus = false
        }
      })
    },
    getHdGoods(){
      let that =this;
      that.$request({
        data: that.screen,
        url: 'coupons/getHdGoods',
        success(res){
          that.goodList = res.result
        }
      })
    },
  }
}
</script>

<style scoped>
</style>
