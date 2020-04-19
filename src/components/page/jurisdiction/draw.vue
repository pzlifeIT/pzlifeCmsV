<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>采样细胞检查</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加</el-button>
    </div>

    <v-screen :screen="screenQuery" @query="onQuery" @screenItem="screenItem"></v-screen>

    <el-table :data="admin_bank" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="province_name" label="省"></el-table-column>
      <el-table-column prop="city_name" label="市"></el-table-column>
      <el-table-column prop="area_name" label="区"></el-table-column>
      <el-table-column prop="longitude" label="经度"></el-table-column>
      <el-table-column prop="latitude" label="纬度"></el-table-column>
      <el-table-column fixed="right" label="操作" width="350">
        <template slot-scope="scope">
        <el-button type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-pagination @pageChange="pageChange" :num='num' :total="total"></v-pagination>

    <v-card name='验证' width="120" :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules"
            @sumbit="sumbit" @hideCard="hideCard" @selectItem="selectItem"></v-card>

  </div>
</template>

<script>
  import vScreen from '../../component/screen'
  import vPagination from '../../component/pagination'
  import vCard from '../../component/card'

  export default {
    data() {
      return {
        num: 1,
        cardStatus: false,
        ruleForm: {},
        rules: [],
        ruleType: {
          'province_id': {
            type: 'select',
            label: '省',
            option: []
          },
          'city_id': {
            type: 'select',
            label: '市',
            option: []
          },
          'area_id': {
            type: 'select',
            label: '区',
            option: []
          },
          'name': {
            type: 'input',
            label: '抽血点名称',
          },
          'address': {
            type: 'input',
            label: '详细地址',
          },
          'longitude': {
            type: 'input',
            label: '经度'
          },
          'latitude': {
            type: 'input',
            label: '纬度'
          },
          'sup_admin_id':{
            type:'select',
            label:'供应商',
            option:[]
          }
        },
        screen: {
          page: 1,
          page_num: 10
        },
        screenQuery: [
          {
          ref: 'province_id',
          label: '省',
          type: 'select',
          option: []
        }, {
          ref: 'city_id',
          label: '市',
          type: 'select',
          option: []
        }, {
          ref: 'area_id',
          label: '区',
          type: 'select',
          option: []
        }, {
          ref: 'address',
          label: '详细地址',
          type: 'input'
        }, {
          ref: 'longitude',
          label: '经度',
          type: 'input'
        }, {
          ref: 'latitude',
          label: '纬度',
          type: 'input'
        }],
        admin_bank: [],
        admin_bankId: '',
        total: 0,
        password: '',
        province: [],
        proId: 0,
        sup:[]
      }
    },
    components: {
      vScreen,
      vPagination,
      vCard
    },
    mounted() {
      this.getAdminBank()
      this.getProvinceCity()
      this.supplieradminlist()
    },
    methods: {
      supplieradminlist(){
        let that =this;
        that.$request({
          data: {
            page:1,
            page_num:100
          },
          url: 'suppliers/supplieradminlist',
          success(res){
            that.disSup(res.data)
            that.total = res.total || 0;
          }
        })
      },
      disSup(data){
        for (let i = 0;i<data.length;i++){
          this.ruleType.sup_admin_id.option.push({
            label:data[i].sup_name,
            value:data[i].id
          })
        }
      },
      edit(data){
        console.log(data)
        this.ruleForm = {}
        this.ruleForm = data
        this.cardStatus = true
      },
      selectItem(proId, k) {
        if (k == 'province_id') {
          this.getProvince(proId)
        } else if (k == 'city_id') {
          this.getCity(proId)
        }
      },
      screenItem(id, k) {
        console.log(id, k)
        if (k == 0) {
          this.getProvince(id)

        } else if (k == 1) {
          this.getCity(id)
        }
      },
      getProvince(id) {
        let that = this
        that.$request({
          url: 'provinces/getCity',
          data: {provinceId: id},
          success(res) {
            that.ruleForm.city_id = ''
            that.disProv(res.data, 'city')
          }
        })
      },
      getCity(id) {
        let that = this
        that.$request({
          url: 'provinces/getArea',
          data: {cityId: id},
          success(res) {
            that.ruleForm.area_id = ''
            // that.district = res.data
            that.disProv(res.data, 'area')
          }
        })
      },
      //获取省
      getProvinceCity: function () {
        let that = this
        that.$request({
          url: 'provinces/getProvinceCity',
          success(res) {
            that.disProv(res.data, 'pro')
          }
        })
      },
      disProv(data, type) {
        // this.ruleType.province_id.option = []
        this.ruleType.city_id.option = []
        this.ruleType.area_id.option = []
        this.screenQuery[1].option = []
        this.screenQuery[2].option = []
        for (let i = 0; i < data.length; i++) {
          if (type == 'pro') {
            this.ruleType.province_id.option.push({
              value: data[i].id,
              label: data[i].area_name
            })
            this.screenQuery[0].option.push({
              value: data[i].id,
              label: data[i].area_name
            })
          } else if (type == 'city') {
            this.ruleType.city_id.option.push({
              value: data[i].id,
              label: data[i].area_name
            })
            this.screenQuery[1].option.push({
              value: data[i].id,
              label: data[i].area_name
            })
          } else if (type == 'area') {
            this.ruleType.area_id.option.push({
              value: data[i].id,
              label: data[i].area_name
            })
            this.screenQuery[2].option.push({
              value: data[i].id,
              label: data[i].area_name
            })
          }

        }
      },
      showCard() {
        this.ruleForm = {}
        this.cardStatus = true
        this.ruleForm.submitType = 1
      },
      hideCard() {
        this.cardStatus = false
      },
      statusChange(id, status) {
        let that = this;
        that.$request({
          data: {
            id: id,
            status: status
          },
          url: 'admin/editAdminBank',
          success(res) {
            that.getAdminBank()
          }
        })
      },
      sumbit(data) {
        console.log(data)
        if (data.ruleForm.submitType == 1) {
          this.createInfo(data)
        } else {
          this.getAdminBankInfo(data)
        }

      },
      getAdminBankInfo(data){
        let that = this
        that.$request({
          url:'admin/editBloodSampling',
          data:data.ruleForm,
          success(res){
            that.admin_bank = res.result
            that.total = res.total || 0;
            that.cardStatus = false
          }
        })
      },
      onQuery(screen) {
        this.extend(this.screen, screen);
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
      pageChange(obj) {
        this.screen.page = obj.page
        this.getAdminBank()
      },
      createInfo(data) {
        let that = this
        that.$request({
          url: 'admin/addBloodSampling',
          data: data.ruleForm,
          form: 1,
          success(res) {
            that.cardStatus = false
            that.getAdminBank()
          }
        })
      },
      getAdminBank() {
        let that = this
        that.screen.password = that.password
        that.$request({
          data: that.screen,
          url: 'admin/getBloodSampling',
          success(res) {
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
