<template>
  <div class="tcontent">
    <div class="title">检测样本接收单详情</div>
    <div class="number">样本接收单编号：</div>
    <table class="tablel" border="1">
      <tr>
        <td class="name" >姓名：</td>
        <td>个人码：</td>
        <td>性别：</td>
        <td>年龄：</td>
      </tr>
      <tr>
        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时-->
        <td colspan="2">采样时间：</td>
        <td colspan="2">采样机构编号：</td>
      </tr>
      <tr>
        <td class="td-title">检<br>测<br>项<br>目<br>内<br>容</td>
        <td colspan="3" class="td-content">
          <div class="td-left">（国纳）项目检测条码</div>
          <div class="td-right">（粘贴千麦）项目条码</div>
        </td>
      </tr>
      <tr>
        <td class="td-title">检<br>测<br>项<br>目<br>内<br>容</td>
        <td colspan="3" class="td-content">
          <div class="td-left">（国纳）项目检测条码</div>
          <div class="td-right">（粘贴千麦）项目条码</div>
        </td>
      </tr>
      <tr>
        <td class="td-title">检<br>测<br>项<br>目<br>内<br>容</td>
        <td colspan="3" class="td-content">
          <div class="td-left">（国纳）项目检测条码</div>
          <div class="td-right">（粘贴千麦）项目条码</div>
        </td>
      </tr>
      <tr>
        <td class="td-title">检<br>测<br>项<br>目<br>内<br>容</td>
        <td colspan="3" class="td-content">
          <div class="td-left">（国纳）项目检测条码</div>
          <div class="td-right">（粘贴千麦）项目条码</div>
        </td>
      </tr>
      <tr>
        <td class="td-title">检<br>测<br>项<br>目<br>内<br>容</td>
        <td colspan="3" class="td-content">
          <div class="td-left">（国纳）项目检测条码</div>
          <div class="td-right">（粘贴千麦）项目条码</div>
        </td>
      </tr>
    </table>
    <div class="people">接收员签收：</div>
    <div class="people mr">签收时间：</div>
  </div>
</template>

<script>
  export default {
    name: "table"
  }
</script>

<style scoped>
  .name{
    width: 200px!important;
  }
  .title {
    width: 100%;
    text-align: center;
    margin-top: 40px;
    font-size: 34px;
    font-weight: bold;
  }

  .number {
    width: 80%;
    margin: 20px auto 0;
    font-size: 20px;
  }

  .tablel {
    width: 80%;
    margin: 0 auto;
    font-size: 20px;
  }
  td{
    padding:10px;
    box-sizing: border-box;
  }
  .td-title{
    width: 6%;
    text-align: center;
  }
  .td-content{
    height: 250px;
    position: relative;
  }
  .td-left{
    /*float: left;*/
    width: 50%;
    /*line-height: 450px;*/
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 0;
  }
  .td-right{
    /*float: right;*/
    width: 50%;
    /*line-height: 450px;*/
    text-align: center;
    position: absolute;
    bottom: 20px;
    right: 0;
  }
  .people{
    text-align: right;
    margin-top: 20px;
    font-size: 24px;
    padding-right: 400px;
    box-sizing: border-box;
  }
  .mr{
    margin-top: 10px;
  }
</style>
