<template>
  <div class="regex-help">
    <div class="doc">
      <h2>Regex quick reference</h2>
      <div class="quick-ref">
        <table>
          <tbody>

          <tr>
            <td>[abc]</td>	<td>A single character of: a, b, or c</td>
          </tr>

          <tr>
            <td>[^abc]</td>	<td>Any single character except: a, b, or c</td>
          </tr>

          <tr>
            <td>[a-z]</td>	<td>Any single character in the range a-z</td>
          </tr>

          <tr>
            <td>[a-zA-Z]</td>	<td>Any single character in the range a-z or A-Z</td>
          </tr>

          <tr>
            <td>^</td>	<td>Start of line</td>
          </tr>

          <tr>
            <td>$</td>	<td>End of line</td>
          </tr>

          <tr>
            <td>\A</td>	<td>Start of string</td>
          </tr>

          <tr>
            <td>\z</td>	<td>End of string</td>
          </tr>

          <tr>
            <td>.	</td> <td>Any single character</td>
          </tr>

          <tr>
            <td>\s	</td><td>Any whitespace character</td>
          </tr>

          <tr>
            <td>\S	</td><td>Any non-whitespace character</td>
          </tr>

          <tr>
            <td>\d	</td><td>Any digit</td>
          </tr>

          </tbody>
        </table>

        <table>
          <tbody>

          <tr>
            <td>\D</td><td>Any non-digit</td>
          </tr>

          <tr>
            <td>\w</td><td>Any word character (letter, number, underscore)</td>
          </tr>

          <tr>
            <td>\W</td><td>Any non-word character</td>
          </tr>

          <tr>
            <td>\b</td><td>Any word boundary</td>
          </tr>

          <tr>
            <td>(...)</td><td>Capture everything enclosed</td>
          </tr>

          <tr>
            <td>(a|b)</td><td>a or b</td>
          </tr>

          <tr>
            <td>a?</td><td>Zero or one of a</td>
          </tr>

          <tr>
            <td>a*</td><td>Zero or more of a</td>
          </tr>

          <tr>
            <td>a+</td><td>One or more of a</td>
          </tr>

          <tr>
            <td>a{3}</td><td>Exactly 3 of a</td>
          </tr>

          <tr>
            <td>a{3,}</td><td>3 or more of a</td>
          </tr>

          <tr>
            <td>a{3,6}</td><td>Between 3 and 6 of a</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="regex-options">
        <p>Options:</p>
        <p>
          <code>i</code>
           case insensitive
           <code>u</code>
            treat pattern as a sequence of Unicode code points
           <br/>
           <code>s</code>
            allows . to match newlines
           <code>y</code>
            matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regex-help'
}
</script>

<style lang="scss" scoped>
  .regex-help {
    .doc {
      h2 {
        text-align: center;
        margin-bottom: 3vh;
      }
      .quick-ref {
        display: flex;
        display: -webkit-flex;
      }
      table {
        width: 45vw;
      }
      table tr {
        height: 4vh;
      }
      .regex-options {
        text-align: left;
        margin-top: 3vh;
        margin-left: 10px;
        margin-right: 10px;
        border-top: 1px solid #cecece;
        padding-top: 4px;
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
      }
      .regex-options code {
        margin-left: 25px;
        margin-right: 8px;
      }
    }
  }
</style>
