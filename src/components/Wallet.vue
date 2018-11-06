<template>
    <div id='Wallet'>
        <div class='container'>
            <h1>{{hdr}}</h1>
            <h3>Welcome Back, {{userFName + ' ' + userLName}}</h3>
            <h4>Wallet History: Past {{numDays}} days</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Transaction</th>
                        <th>|</th>
                        <th>Party</th>
                        <th>|</th>
                        <th>Amount</th>
                        <th>|</th>
                        <th>Total</th>
                        <th>|</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>{{ transNum }}</td>
                        <td></td>
                        <td>{{ partyName }}</td>
                        <td></td>
                        <td>{{currency + transAmount}}</td>
                        <td></td>
                        <td>{{ currency + wTotal }}</td>
                        <td></td>
                        <td>{{ date }}</td>
                    </tr>
                    <tr>
                        <td>{{transNum}}</td>
                        <td></td>
                        <td>
                        {{partyName2}}
                        </td>
                        <td></td>
                        <td>{{currency + transAmount2}}</td>
                        <td></td>
                        <td>{{currency + wTotal2}}</td>
                        <td></td>
                        <td>{{date2}}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
</template>

<script>
// import TheDash from './TheDash'
export default {
  name: "Wallet",
  component: ("TheDash",
  {
    props: ["greeting"]
  }),
  data() {
    return {
      hdr: "WALLET",
      wip: "Work In Progress",
      userFName: "Randy",
      userLName: "Marsh",
      numDays: 30,
      partyName: "Billiam",
      partyName2: "Jeremy junior",
      transNum: "100xx",
      currency: "$",
      transAmount: "45.00",
      transAmount2: "40.00",
      wTotal: "65.00",
      wTotal2: "110.00",
      date: "28-July-2018",
      date2: "15-July-2018"
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");
#Wallet {
  font-family: "Raleway", sans-serif;

  /* position:fixed; */
  width: inherit;
  padding: 10px;
}
</style>
