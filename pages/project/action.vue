<template>
  <md-table
    v-model="searchedActions"
    md-fixed-header
    md-sort="date"
    md-sort-order="asc"
    class="md-scrollbar"
    width="100%"
  >
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <span class="md-headline">
          Actions
        </span>
      </div>
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input
          v-model="searchKeyword"
          placeholder="search by ..."
          @input="searchOnTable"
        />
      </md-field>
      <md-field>
        <label for="filter">Filter Column</label>
        <md-select id="filter" v-model="filters" multiple @input="filterColumn">
          <md-option v-for="header in headers" :key="header.label" :value="header.label">
            {{ header.label }}
          </md-option>
        </md-select>
      </md-field>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{item}">
      <md-table-cell
        v-for="header in filteredHeaders"
        :key="header.label"
        :md-label="header.label"
        :md-sort-by="header.sortBy"
      >
        {{ item[header.value] }}
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
export default {
  data () {
    return {
      actions: [
        { date: '2020-01-10', customer: '日本たばこ産業', project: 'UI for ROCS', actionType: '02:ヒアリング', detail: '訪問して内容をヒアリング' },
        { date: '2020-01-15', customer: '日本たばこ産業', project: 'UI for ROCS', actionType: '02:ヒアリング', detail: '訪問して内容をヒアリング' },
        { date: '2020-01-30', customer: '大塚製薬', project: 'GID', actionType: '02:ヒアリング', detail: '訪問して内容をヒアリング訪問して内容をヒアリング訪問して内容をヒアリング訪問して内容をヒアリング' },
        { date: '2020-02-05', customer: '日本たばこ産業', projecft: 'UI for ROCS', actionType: '03:見積提示', detail: '見積を提示' }
      ],
      headers: [
        { label: 'Date', sortBy: 'date', value: 'date' },
        { label: 'Customer', sortBy: 'customer', value: 'customer' },
        { label: 'Project', sortBy: 'project', value: 'project' },
        { label: 'Type', sortBy: 'type', value: 'actionType' },
        { label: 'Detail', sortBy: 'detail', value: 'detail' }
      ],
      searchedActions: [],
      filteredHeaders: [],
      filters: [],
      searchKeyword: ''
    }
  },
  created () {
    this.filteredHeaders = this.headers
    this.searchedActions = this.actions
    this.filters = this.filteredHeaders.map(header => header.label)
  },
  methods: {
    searchOnTable () {
      this.searchedActions = this.actions.filter(action => action.detail.includes(this.searchKeyword))
      console.log(this.searchedActions)
    },
    filterColumn () {
      this.filteredHeaders = this.headers.filter(header => this.filters.indexOf(header.label) > 0)
    }
  }
}
</script>
