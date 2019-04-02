<template>
  <div class="regex-help">
    <div class="doc">
      <h2>{{ $t('regexHelp.title') }}</h2>
      <div class="quick-ref">
        <table>
          <tbody>

          <tr>
            <td>[abc]</td>	<td>{{ $t('regexHelp.squareBracket') }}</td>
          </tr>

          <tr>
            <td>[^abc]</td>	<td>{{ $t('regexHelp.squareNot') }}</td>
          </tr>

          <tr>
            <td>[a-z]</td>	<td>{{ $t('regexHelp.squareAny') }}</td>
          </tr>

          <tr>
            <td>[a-zA-Z]</td>	<td>{{ $t('regexHelp.squareRange') }}</td>
          </tr>

          <tr>
            <td>^</td>	<td>{{ $t('regexHelp.startOfLine') }}</td>
          </tr>

          <tr>
            <td>$</td>	<td>{{ $t('regexHelp.endOfLine') }}</td>
          </tr>

          <tr>
            <td>\A</td>	<td>{{ $t('regexHelp.startOfStr') }}</td>
          </tr>

          <tr>
            <td>\z</td>	<td>{{ $t('regexHelp.endOfStr') }}</td>
          </tr>

          <tr>
            <td>.	</td> <td>{{ $t('regexHelp.anyChar') }}</td>
          </tr>

          <tr>
            <td>\s	</td><td>{{ $t('regexHelp.anyWSpace') }}</td>
          </tr>

          <tr>
            <td>\S	</td><td>{{ $t('regexHelp.anyNWSpace') }}</td>
          </tr>

          <tr>
            <td>\d	</td><td>{{ $t('regexHelp.anyDigit') }}</td>
          </tr>

          </tbody>
        </table>

        <table>
          <tbody>

          <tr>
            <td>\D</td><td>{{ $t('regexHelp.anyNDigit') }}</td>
          </tr>

          <tr>
            <td>\w</td><td>{{ $t('regexHelp.anyWordChar') }}</td>
          </tr>

          <tr>
            <td>\W</td><td>{{ $t('regexHelp.anyNWordChar') }}</td>
          </tr>

          <tr>
            <td>\b</td><td>{{ $t('regexHelp.anyWordB') }}</td>
          </tr>

          <tr>
            <td>(...)</td><td>{{ $t('regexHelp.capEnclosed') }}</td>
          </tr>

          <tr>
            <td>(a|b)</td><td>{{ $t('regexHelp.or') }}</td>
          </tr>

          <tr>
            <td>a?</td><td>{{ $t('regexHelp.zeroOne') }}</td>
          </tr>

          <tr>
            <td>a*</td><td>{{ $t('regexHelp.moreThanZero') }}</td>
          </tr>

          <tr>
            <td>a+</td><td>{{ $t('regexHelp.moreThanOne') }}</td>
          </tr>

          <tr>
            <td>a{3}</td><td>{{ $t('regexHelp.exactly3') }}</td>
          </tr>

          <tr>
            <td>a{3,}</td><td>{{ $t('regexHelp.moreThan3') }}</td>
          </tr>

          <tr>
            <td>a{3,6}</td><td>{{ $t('regexHelp.between') }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="regex-options">
        <p>{{ $t('regexHelp.options') }}:</p>
        <p>
          <code>i</code>
           {{ $t('regexHelp.caseI') }}
           <code>u</code>
            {{ $t('regexHelp.unicode') }}
           <br/>
           <code>s</code>
            {{ $t('regexHelp.newLine') }}
           <code>y</code>
            {{ $t('regexHelp.indexMatch') }}
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
  $border-color: #cecece;
  %flex-layout {
    display: flex;
    -webkit-flex: flex;
    justify-content: flex-start;
  }

  .regex-help {
    .doc {
      h2 {
        text-align: center;
        margin-bottom: 3vh;
      }
      .quick-ref {
        @extend %flex-layout;
      }
      table {
        width: 45vw;
      }
      table tr {
        height: 4vh;
      }
      .regex-options {
        @extend %flex-layout;
        text-align: left;
        margin-top: 3vh;
        margin-left: 10px;
        margin-right: 10px;
        border-top: 1px solid $border-color;
        padding-top: 4px;
      }
      .regex-options code {
        margin-left: 25px;
        margin-right: 8px;
      }
    }
  }
</style>
