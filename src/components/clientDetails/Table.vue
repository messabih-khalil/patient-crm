<template>
  <table class="rwd-table">
    <tbody>
      <tr>
        <th>Supplier Code</th>
        <th>Supplier Name</th>
        <th>Invoice Number</th>
        <th>Invoice Date</th>
        <th>Due Date</th>
        <th>Net Amount</th>
      </tr>
      <tr>
        <td data-th="Supplier Code">UPS5005</td>
        <td data-th="Supplier Name">UPS</td>
        <td data-th="Invoice Number">ASDF19218</td>
        <td data-th="Invoice Date">06/25/2016</td>
        <td data-th="Due Date">12/25/2016</td>
        <td data-th="Net Amount">$8,322.12</td>
      </tr>
      <tr>
        <td data-th="Supplier Code">UPS3449</td>
        <td data-th="Supplier Name">UPS South Inc.</td>
        <td data-th="Invoice Number">ASDF29301</td>
        <td data-th="Invoice Date">6/24/2016</td>
        <td data-th="Due Date">12/25/2016</td>
        <td data-th="Net Amount">$3,255.49</td>
      </tr>
      <tr>
        <td data-th="Supplier Code">BOX5599</td>
        <td data-th="Supplier Name">BOX Pro West</td>
        <td data-th="Invoice Number">ASDF43000</td>
        <td data-th="Invoice Date">6/27/2016</td>
        <td data-th="Due Date">12/25/2016</td>
        <td data-th="Net Amount">$45,255.49</td>
      </tr>
      <tr>
        <td data-th="Supplier Code">PAN9999</td>
        <td data-th="Supplier Name">Pan Providers and Co.</td>
        <td data-th="Invoice Number">ASDF33433</td>
        <td data-th="Invoice Date">6/29/2016</td>
        <td data-th="Due Date">12/25/2016</td>
        <td data-th="Net Amount">$12,335.69</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
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
  border-radius: 0.4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: 0.5em 1em;
}
</style>
