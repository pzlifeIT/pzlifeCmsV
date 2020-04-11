<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>采样细胞检查</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加</el-button>
  </div>

    <v-screen :screen="screenQuery" @query="onQuery" ></v-screen>

    <el-table :data="admin_bank" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column  prop="card_number" label="卡号" ></el-table-column>
      <el-table-column  prop="type" label="产品类型" ></el-table-column>
      <el-table-column  prop="passwd" label="密码" ></el-table-column>
      <el-table-column  prop="create_time" label="创建时间" ></el-table-column>
      <el-table-column fixed="right" label="操作"  width="350">
        <!--<template slot-scope="scope">-->
          <!--<el-button type="primary" size="small" @click="getAdminBankInfo(scope.row.id)">编辑</el-button>-->
        <!--</template>-->
      </el-table-column>
    </el-table>
    <v-pagination @pageChange="pageChange" :num='num' :total="total"></v-pagination>

    <v-card name='验证' width="120" :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @hideCard="hideCard"></v-card>

  </div>
</template>

<script>
import vScreen from '../../component/screen'
import vPagination from '../../component/pagination'
import vCard from '../../component/card'
export default {
  data(){
    return {
      num:1,
      cardStatus:true,
      ruleForm:{},
      rules:['password'],
      ruleType:{
        'password':{
          type:'input',
          label:'密码',
          placeholder:'请输入密码',
          ispasswd:true
        }
      },
      screen:{
        page:1,
        page_num:10
      },
      screenQuery:[{
        ref:'datekey',
        label:'生成时间',
        placeholder:'例如：20200202',
        type:'input',
        content:'',
      },{
        ref:'type',
        label:'产品类型',
        type:'select',
        option:[
          {
            value: 1,
            label: '产品1'
          }, {
            value: 2,
            label: '产品2'
          }, {
            value: 3,
            label: '产品3'
          },
          {
            value: 4,
            label: '产品4'
          },
          {
            value: 5,
            label: '产品5'
          },{
            value: 6,
            label: '产品6'
          }
          ,{
            value: 7,
            label: '产品7'
          }
          ,{
            value: 8,
            label: '产品8'
          },{
            value: 9,
            label:'产品9'
          }
        ]
      }],
      admin_bank:[],
      admin_bankId:'',
      total:0,
      password:''
    }
  },
  components:{
      vScreen,
      vPagination,
      vCard
  },
  mounted(){

  },
  methods: {
    showCard(){
      this.ruleForm = {}
      this.ruleType = {}
      this.cardStatus = true
      this.ruleType = {
        'password':{
          type:'input',
          label:'密码',
          ispasswd:true
        },
        'num':{
          type:'number',
          label:'生成数量'
        },
        'type':{
          type:'select',
          label:'产品类型',
          option: [
            {
              value: 1,
              label: '产品1'
            }, {
              value: 2,
              label: '产品2'
            }, {
              value: 3,
              label: '产品3'
            },
            {
              value: 4,
              label: '产品4'
            },
            {
              value: 5,
              label: '产品5'
            },{
              value: 6,
              label: '产品6'
            }
            ,{
              value: 7,
              label: '产品7'
            }
            ,{
              value: 8,
              label: '产品8'
            },{
              value: 9,
              label:'产品9'
            }
          ]
        },
        'start_num':{
          type:'input',
          label:'卡号起始数字'
        }
      }
      this.ruleForm.submitType = 1
      this.rules = ['password','num','type','start_num']
    },
    hideCard(){
      this.cardStatus = false
    },
    statusChange(id,status){
      let that =this;
      that.$request({
        data: {
          id:id,
          status:status
        },
        url: 'admin/editAdminBank',
        success(res){
          that.getAdminBank()
        }
      })
    },
    sumbit(data){
      console.log(data)
      this.password = data.ruleForm.password
      if (data.ruleForm.submitType == 1){
        this.createInfo(data)
      } else {
        this.getAdminBank()
      }

    },
    onQuery(screen){
      this.extend(this.screen,screen);
      this.screen.page = 1;
      this.num++;
      this.getAdminBank();
    },
    extend(target, options) {
        for (name in options) {
            target[name] = options[name];
        }
        return target;
    },
    pageChange(obj){
        this.screen.page = obj.page
        this.getAdminBank()
    },
    createInfo(data){
      let that = this
      that.$request({
        url:'admin/samplingCreateTool',
        data:data.ruleForm,
        form:1,
        success(res){
          that.cardStatus = false
          that.getAdminBank()
        }
      })
    },
    getAdminBank(){
      let that =this;
      if (!that.password) {
        that.$message.error('请先输入密码')
        return
      }
      that.screen.password = that.password
      that.$request({
        data: that.screen,
        url: 'admin/getSamplingNumber',
        success(res){
          that.admin_bank = res.result
          that.total = res.total || 0;
          that.cardStatus = false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
