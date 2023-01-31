<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      aptList: [],
    };
  },
  computed: {
    ...mapGetters({ apts: "clientDetailStore/getClientDetails" }),
  },
  methods: {
    ...mapActions("clientDetailStore", ["deleteApt"]),

    // remove apy

    removeApt(id) {
      this.deleteApt(id);
    },
  },
};
</script>

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
      <tr v-for="(item, _) in apts" :key="item.id">
        <td>{{ item.created_at }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }} DA</td>
        <td>{{ item.paid }} DA</td>
        <td>{{ item.price - item.paid }} DA</td>
        <td class="actions">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
              />
            </svg>
          </button>
          <button @click.prevent="removeApt(item.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"
              />
            </svg>
          </button>
        </td>
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
  background-color: white;
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

.actions {
  display: flex;
  align-items: center;
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    margin-left: 0.5rem;

    &:first-child {
      background-color: greenyellow;
    }

    &:nth-child(2) {
      background-color: rgb(252, 134, 134);
    }
  }
}
</style>
