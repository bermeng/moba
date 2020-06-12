<template>
  <div class="about">
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="300"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height: 3rem;" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/items/edit/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ItemList',

  data() {
    return {
      items: []
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get('rest/items')
      this.items = res.data
    },

    async remove(row) {
      this.$confirm(`是否删除分类 "${row.name}"`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/items/${row._id}`, row)

        res.data.success &&
          this.$message({
            message: '删除成功',
            type: 'success'
          })

        this.fetch()
      })
    }
  },

  created() {
    this.fetch()
  }
}
</script>

<style></style>
