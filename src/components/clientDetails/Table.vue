<template>
  <table class="rwd-table">
    <tbody>
      <tr>
        <th>Date</th>
        <th>Act</th>
        <th>Cout</th>
        <th>Versement</th>
        <th>Rest</th>
        <th></th>
      </tr>
      <tr>
        <td>01-12-2023</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
        <td>ASDF19218</td>
        <td>06/25/2016</td>
        <td>12/25/2016</td>
        <td>$8,322.12</td>
      </tr>
      <tr>
        <td>01-12-2023</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
        <td>ASDF19218</td>
        <td>06/25/2016</td>
        <td>12/25/2016</td>
        <td>$8,322.12</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

.rwd-table {
  width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  color: $colorOne;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: $colorFive;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: 0.5em;
}

.rwd-table td:last-child {
  margin-bottom: 0.5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: 0.5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
</style>
