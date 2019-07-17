<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>优惠券活动</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加优惠券活动</el-button>
  </div>

    <el-table :data="couponHdList" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column  prop="title" label="优惠券活动标题" ></el-table-column>
      <el-table-column  prop="content" label="优惠券活动内容" ></el-table-column>
      <el-table-column  prop="create_time" label="创建时间" ></el-table-column>
      <el-table-column  prop="status" label="状态" >
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" @change="modifycouponhdstatus(scope.row.id,scope.row.status)" :active-value="1" :inactive-value="2"></el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="350" >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="getcouponhdInfo(scope.row)">编辑</el-button>
          <el-button type="primary" size="small" @click="goAssociated(scope.row.id)">活动优惠券</el-button>
          <el-button type="danger" size="small" @click="deletecouponhd(scope.row.id)">删除</el-button>
          <el-button type="primary" size="small" @click="showQrCard(scope.row.id,scope.row.title)">二维码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-pagination @pageChange="pageChange" :total="total"></v-pagination>

    <v-card name='线下活动' width="120" :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @hideCard="hideCard"></v-card>

    <div class="cen-card" v-if="qrCodeCard">
      <el-card class="box-card" >
        <div slot="header" class="clearfix">
            <span>二维码</span>
          </div>
        <el-form label-width="80px" :model="qrRuleForm" ref="qrRuleForm"  :rules="qrRules">
          <el-form-item v-if="!!Qrcode">
            <img v-if="Qrcode"  class="qrcode" :src="Qrcode" alt="二维码">
          </el-form-item>
          <el-form-item label="分享者ID" v-else  >
            <el-input v-model="qrRuleForm.uid" placeholder="请输入分享者ID"></el-input>
          </el-form-item>
          <el-form-item class="flex-cen">
            <el-button v-if="!!Qrcode" type="primary" @click="qrCodeDownload('qrRuleForm')">下载</el-button>
            <el-button v-else type="primary" @click="qrSumbit('qrRuleForm')">确定</el-button>
            <el-button  @click="hideQrCard()">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
  </div>
</template>

<script>
import vPagination from '../../component/pagination'
import vCard from '../../component/card'
import {downloadIamge} from '../../../assets/js/common'
export default {
  data(){
    return {
      qrCodeCard:false,
      cardStatus:false,
      qrRules:{
        'uid':[{
          required:true,
          message:'请输入分享者ID',
          trigger:'blur'
        }]
      },
      qrRuleForm:{},
      ruleForm:{},
      rules:['title'],
      ruleType:{
        'title':{
          type:'input',
          label:'优惠券活动标题',
          placeholder:'请输入优惠券活动标题'
        },
        'content':{
          type:'input',
          label:'优惠券活动内容',
          placeholder:'请输入优惠券活动内容'
        }
      },
      screen:{
        page:1,
        page_num:10
      },
      Qrcode:'',
      couponHdList:[],
      total:0
    }
  },
  components:{
      vPagination,
      vCard
  },
  mounted(){
    this.getcouponhdlist()
  },
  methods: {
    goAssociated(id){
      this.$router.push({ path: '/couponsHd/couponsHd_associated', query:{
        id:id
      } })
    },
    deletecouponhd(id){
      let that =this;
      that.$request({
        data: { id:id },
        form:2,
        url: 'coupons/deletecouponhd',
        success(res){
          that.getcouponhdlist()
        }
      })
    },
    getcouponhdInfo(data){
      this.ruleForm = data
      this.cardStatus = true
    },
    modifycouponhdstatus(id,status){
      let that =this;
      that.$request({
        data: {
          id:id,
          status:status
        },
        form:3,
        url: 'coupons/modifycouponhdstatus',
        error(){
          that.getcouponhdlist()
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
    showQrCard(id,tit){
      this.qrRuleForm = { id:id }
      this.Qrcode = ''
      this.offlineTitle = tit
      this.qrCodeCard = true
    },
    hideQrCard(){
      this.qrCodeCard = false
    },
    qrSumbit(name){
      let that= this;
      that.$refs[name].validate((valid) => {
        if (valid) {
            that.$request({
              data: that.qrRuleForm,
              url: 'OfflineActivities/resetOfflineActivitiesQrcode',
              type:'get',
              success(res){
                that.Qrcode = res.Qrcode
              }
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    qrCodeDownload() {
        downloadIamge(this.Qrcode, this.offlineTitle)
    },
    sumbit(data){
      data.ruleForm.id ?this.modifycouponhd(data.ruleForm):this.addcouponhd(data.ruleForm)
    },
    addcouponhd(data){
      let that =this;
      that.$request({
        data: data,
        url: 'coupons/addcouponhd',
        form:1,
        success(res){
          that.ruleForm = {}
          that.getcouponhdlist()
          that.cardStatus = false
        }
      })
    },
    modifycouponhd(data){
      let that =this;
      that.$request({
        data: data,
        url: 'coupons/modifycouponhd',
        form:3,
        success(res){
          that.ruleForm = {}
          that.getcouponhdlist()
          that.cardStatus = false
        }
      })
    },
    pageChange(obj){
        this.screen.page = obj.page
        this.getcouponhdlist()
    },
    getcouponhdlist(){
      let that =this;
      that.$request({
        data: that.screen,
        url: 'coupons/getcouponhdlist',
        success(res){
          that.couponHdList = res.data
          that.total = res.total || 0;
        }
      })
    }
  }
}
</script>

<style scoped>
.qrcode{
  width: 250px;
}
</style>
