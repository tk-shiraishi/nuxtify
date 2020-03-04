<template>
  <md-table
    v-model="searchedProjects"
    md-fixed-header
    md-sort="code"
    md-sort-order="asc"
    class="md-scrollbar"
    width="100%"
  >
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-headline">
          Projects
        </h1>
      </div>
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input
          v-model="searchKeyword"
          placeholder="search by ..."
          @input="searchOnTable"
        />
      </md-field>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{item}">
      <md-table-cell md-label="Code" md-sort-by="code">
        {{ item.code }}
      </md-table-cell>
      <md-table-cell md-label="Customer" md-sort-by="customer">
        {{ item.customer }}
      </md-table-cell>
      <md-table-cell md-label="Title" md-sort-by="title">
        {{ item.title }}
      </md-table-cell>
      <md-table-cell md-label="Stage" md-sort-by="stage">
        {{ item.stage }}
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        { code: '12345', customer: '得意先A社', title: 'UI for ROCS', stage: '02:ヒアリング' },
        { code: '12345', customer: '得意先B社', title: 'ホームページ改修', stage: '01:引き合い' },
        { code: '12345', customer: '得意先C社', title: '生産管理システム開発', stage: '01:引き合い' },
        { code: '12345', customer: '得意先D社', title: '製品管理システム開発', stage: '03:見積提示中' }
      ],
      searchedProjects: [],
      searchKeyword: ''
    }
  },
  created () {
    this.searchedProjects = this.projects
  },
  methods: {
    searchOnTable () {
      this.searchedProjects = this.projects.filter(project => project.title.includes(this.searchKeyword))
    }
  }
}
</script>
