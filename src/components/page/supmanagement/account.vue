<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>供应商功能管理</el-breadcrumb-item>
        <el-breadcrumb-item>供应商账号</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加供应商账号</el-button>
  </div>

    <el-table :data="supplierList" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column  prop="sup_name" label="账号名称" ></el-table-column>
      <el-table-column  prop="mobile" label="号码" ></el-table-column>
      <el-table-column  label="操作" >
        <template slot-scope="{row}">
          <el-button type="primary" @click="add(row.id)">添加子账户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-pagination @pageChange="pageChange" :total="total"></v-pagination>

    <v-card name='线下活动' width="120" :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @hideCard="hideCard"></v-card>
    <el-dialog
      title="添加子账户"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="子账户名称">
          <el-input v-model="child_name" placehold="请输入账户名称"></el-input>
        </el-form-item>
        <el-form-item label="子账户账号">
          <el-input v-model="child_num" placehold="请输入账号"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addChild">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import vPagination from '../../component/pagination'
import vCard from '../../component/card'
import {downloadIamge} from '../../../assets/js/common'
export default {
  data(){
    return {
      cardStatus:false,
      ruleForm:{},
      rules:['sup_name','mobile'],
      ruleType:{
        'sup_name':{
          type:'input',
          label:'供应商账号名称',
          placeholder:'请输入供应商账号名称'
        },
        'mobile':{
          type:'input',
          label:'账号',
          placeholder:'请输入账号'
        },
      },
      screen:{
        page:1,
        page_num:10
      },
      supplierList:[],
      total:0,
      dialogVisible:false,
      account_id:0,
      child_num:'',
      child_name:''
    }
  },
  components:{
      vPagination,
      vCard
  },
  mounted(){
    this.supplieradminlist()
  },
  methods: {
    add(id){
      this.account_id = id
      this.dialogVisible = true
    },
    addChild(){
      let that = this
      that.$request({
        url:'suppliers/addsupplieradmin',
        data:{
          sup_id:that.account_id,
          sup_name:that.child_name,
          mobile:that.child_num
        },
        form: 1,
        success(res){
          that.dialogVisible = false
          that.supplieradminlist()
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
      let that =this;
      that.$request({
        data: data.ruleForm, 
        url: 'suppliers/addsupplieradmin',
        form:1,
        success(res){
          that.ruleForm = {}
          that.supplieradminlist()
          that.cardStatus = false
        }
      })
    },
    pageChange(obj){
        this.screen.page = obj.page
        this.supplieradminlist()
    },
    supplieradminlist(){
      let that =this;
      that.$request({
        data: that.screen,
        url: 'suppliers/supplieradminlist',
        success(res){
          that.supplierList = res.data
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
