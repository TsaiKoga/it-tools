<template>
  <div class="cron-help">
    <div class="doc">
      <h2></h2>
      <div class="quick-ref">
        <div class="cron-explain">
          <table class="explain-table">
            <tbody>
              <tr>
                <td class="title">{{ $t('cronHelp.minute') }}</td>
                <td class="title">{{ $t('cronHelp.hour') }}</td>
                <td class="title">{{ $t('cronHelp.day') }}</td>
                <td class="title">{{ $t('cronHelp.month') }}</td>
                <td class="title">{{ $t('cronHelp.day') }}</td>
              </tr>

              <tr>
                <td>*	{{ $t('cronHelp.anyValue') }}</td>
                <td>*	{{ $t('cronHelp.anyValue') }}</td>
                <td>*	{{ $t('cronHelp.anyValue') }}</td>
                <td>*	{{ $t('cronHelp.anyValue') }}</td>
                <td>*	{{ $t('cronHelp.anyValue') }}</td>
              </tr>
              <tr>
                <td>,	{{ $t('cronHelp.valueListSeparator') }}</td>
                <td>,	{{ $t('cronHelp.valueListSeparator') }}</td>
                <td>,	{{ $t('cronHelp.valueListSeparator') }}</td>
                <td>,	{{ $t('cronHelp.valueListSeparator') }}</td>
                <td>,	{{ $t('cronHelp.valueListSeparator') }}</td>
              </tr>
              <tr>
                <td>-	{{ $t('cronHelp.rangeOfValues') }}</td>
                <td>-	{{ $t('cronHelp.rangeOfValues') }}</td>
                <td>-	{{ $t('cronHelp.rangeOfValues') }}</td>
                <td>-	{{ $t('cronHelp.rangeOfValues') }}</td>
                <td>-	{{ $t('cronHelp.rangeOfValues') }}</td>
              </tr>
              <tr>
                <td>/	{{ $t('cronHelp.stepValues') }}</td>
                <td>/	{{ $t('cronHelp.stepValues') }}</td>
                <td>/	{{ $t('cronHelp.stepValues') }}</td>
                <td>/	{{ $t('cronHelp.stepValues') }}</td>
                <td>/	{{ $t('cronHelp.stepValues') }}</td>
              </tr>
              <tr>
                <td>0-59 {{ $t('cronHelp.allowedValues') }}</td>
                <td>0-23 {{ $t('cronHelp.allowedValues') }}</td>
                <td>1-31 {{ $t('cronHelp.allowedValues') }}</td>
                <td>1-12 {{ $t('cronHelp.allowedValues') }}</td>
                <td>0-6 {{ $t('cronHelp.allowedValues') }}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>JAN-DEC {{ $t('cronHelp.alternativeSingleValues') }}</td>
                <td>SUN-SAT {{ $t('cronHelp.alternativeSingleValues') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cron-graph">
          <pre>
            *    *    *    *    *    *
            -    -    -    -    -    -
            |    |    |    |    |    |
            |    |    |    |    |    + {{ $t('cronHelp.year') }} [{{ $t('cronHelp.optional') }}]
            |    |    |    |    +----- {{ $t('cronHelp.dayOfWeek') }} (0 - 7) (Sunday=0 or 7)
            |    |    |    +---------- {{ $t('cronHelp.month') }} (1 - 12)
            |    |    +--------------- {{ $t('cronHelp.dayOfMonth' )}} (1 - 31)
            |    +-------------------- {{ $t('cronHelp.hour') }} (0 - 23)
            +------------------------- {{ $t('cronHelp.minute') }} (0 - 59)
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cron-help'
}
</script>

<style lang="scss" scoped>
  $border-color: #cecece;
  %flex-layout {
    display: flex;
    -webkit-flex: flex;
    flex-direction: column;
  }

  .cron-help {
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    .doc {
      h2 {
        text-align: center;
        margin-bottom: 3vh;
      }
      .quick-ref {
        @extend %flex-layout;
      }
      .cron-explain {
        display: block;
        width: 89vw;
      }
      table.explain-table {
        border: 1px solid $border-color;
        width: 86vw;
      }
      table tr {
        height: 3.7vh;
      }
      table.explain-table tr td {
        padding: 1vh 1vw;
        border: 1px solid $border-color;
      }
      table tr td.title {
        text-align: center;
        font-weight: bold;
      }
      .cron-graph {
        text-align: left;
        margin-top: 3vh;
        margin-left: 10px;
        margin-right: 10px;
        border-top: 1px solid $border-color;
        padding-top: 4vh;
      }
      .cron-graph pre {
      }
    }
  }
</style>
