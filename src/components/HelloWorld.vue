<template>
  <table width="100%" border="1" cellspacing="0" cellpadding="0" class="cq_table" >
    <tr>
      <th><label><!--<input id="selectAll" type="checkbox" class="mgc mgc-primary" onselect="selectAll()">&nbsp;&nbsp;序号-->
        <el-checkbox v-model="all.flag" @change = "selectAll" >序号</el-checkbox>
      </label>

      </th>
      <th>操作</th>
      <th>审核</th>
      <th>项目日志</th>
      <th>考核方式</th>
      <th>项目描述</th>
      <th>项目名称</th>
      <th>项目编号</th>
      <th>项目学分</th>
      <th>项目学时</th>
      <th>举办时间</th>
    </tr>
    <tr v-for="(audit,index) in auditList">
      <td width="7%">
        <label>
          <!--
                                      <input id="selectOne" onselect="selectOne()" type="checkbox" class="mgc mgc-primary"/>&nbsp;&nbsp;<span v-text="index+1"></span>
          -->
          <el-checkbox v-model="audit.selected" :key="audit.selected" @change = "selectOne"><span v-text="index+1"></span></el-checkbox>
        </label>
      </td>
      <td width="8%">
        <div v-if="audit.auditStatus==40"><span >通过</span></div>
        <div v-else-if="audit.auditStatus==30"><span>未通过</span></div>
        <div v-else>
          <el-button type="text" size="small" @click="detail(audit.projectId)">查看</el-button>
          <el-button type="text" size="small" @click="edit(audit.projectId)">修改</el-button>
        </div>
      </td>
      <td width="15%">
        <div v-if="audit.auditStatus==40"><span>通过</span></div>
        <div v-else-if="audit.auditStatus==30"><span>未通过</span></div>
        <div v-else>
          <el-radio  :label="40" size="small" @select="doAudit(audit.projectId,40)">通过</el-radio>
          <el-radio  :label="30" size="small" @select="doAudit(audit.projectId,30)">未通过</el-radio>
        </div>
      </td>
      <td ><el-button type="text" size="small" @click="auditLogs(audit.projectId)">日志</el-button></td>
      <td v-text="audit.auditType"></td>
      <td v-text="audit.projectDesc"></td>
      <td v-text="audit.projectName"></td>
      <td v-text="audit.projectCode"></td>
      <td v-text="audit.hour"></td>
      <td v-text="audit.score"></td>
      <td v-text="audit.beginTime"></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      yearList:[],
      yearId:'',

      auditSetList:[],
      auditSetId:'',

      status:'',
      projectName:'',
      projectCode:'',

      auditList:[{selected:false},{selected:false},{selected:false},{selected:false}],
      auditLogList:[],
      grades:['第一级审核','第二级审核','第三级审核'],

      all:{
        flag:false,
        list:[]
      }
    }
  },
  methods:{
    getYears: function () {

    },
    getAuditSets:function(){

    },
    getAudits:function(){

    },
    getStatus:function(status){

    },
    auditLogs:function(projectId){

    },
    detail:function (projectId) {

    },
    edit:function (projectId) {

    },
    doAudit:function (projectId,auditStatus) {

    },
    selectAll:function (flag) {
      var vue = this;
      vue.all.flag = flag;
      vue.auditList.forEach(function (value) {
        value.selected = flag
      })
    },

    selectOne:function(){
      var vue = this;
      vue.all.flag = vue.auditList.every(function (value) {
          return value.selected === true;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
