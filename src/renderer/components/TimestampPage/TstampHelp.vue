<template>
  <div class="tstamp-help">
    <h2></h2>

    <div class="doc">
      <table>
        <tbody>
          <tr>
            <td class="title">Swift</td>
            <td>
              <pre><span class="cls-var">NSDate</span>().<span class="var">timeIntervalSince1970</span></pre>
            </td>
          </tr>

          <tr>
            <td class="title">Go</td>
            <td>
<pre><span class="key-method">import</span> (<span class="str">"time"</span>)
<span class="method">int32</span>(<span class="cls-var">time</span>.<span class="method">Now</span>().<span class="method">Unix</span>())</pre>
            </td>
          </tr>

          <tr>
            <td rowspan="2" class="title">Java</td>
            <td>
              <pre><div class="comment">// pure java</div>(<span class="key-method">int</span>) (<span class="cls-var">System</span>.<span class="method">currentTimeMillis</span>() / <span class="int">1000</span>)</pre>
            </td>
          </tr>
          <tr>
            <td>
              <pre><div class="comment">// joda</div>(<span class="key-method">int</span>) (<span class="cls-var">DateTime</span>.<span class="method">now</span>().<span class="method">getMillis</span>() / <span class="int">1000</span>)</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Javascript</td>
            <td>
              <pre><span class="cls-var">Math</span>.<span class="method">round</span>(<span class="key-method">new</span> <span class="cls-var">Date</span>() / <span class="int">1000</span>)</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Objective-C</td>
            <td>
              <pre>[[<span class="cls-var">NSDate</span> date] <span class="var">timeIntervalSince1970</span>]</pre>
            </td>
          </tr>

          <tr>
            <td class="title">MySQL</td>
            <td>
              <pre><span class="cls-var">SELECT</span> <span class="method">unix_timestamp</span>(<span class="method">now</span>())</pre>
            </td>
          </tr>

          <tr>
            <td rowspan="2" class="title">PHP</td>
            <td>
              <pre><div class="comment">// pure php</div><span class="method">time</span>()</pre>
            </td>
          </tr>
          <tr>
            <td>
              <pre><div class="comment">// Carbon\Carbon</div><span class="cls-var">Carbon</span>::<span class="method">now</span>()->timestamp</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Python</td>
            <td>
              <pre><span class="key-method">import</span> <span class="var">time</span>
<span class="var">time</span>.<span class='method'>time</span>()</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Ruby</td>
            <td>
              <pre><span class="cls-var">Time</span>.now.to_i</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Shell</td>
            <td>
              <pre><span class="key-method">date</span> +%s</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Groovy</td>
            <td>
              <pre>(<span class="key-method">new</span> <span class="cls-var">Date</span>().time / <span class='int'>1000</span>).<span class="method">intValue</span>()</pre>
            </td>
          </tr>

          <tr>
            <td class="title">Lua</td>
            <td>
              <pre><span class="cls-var">os.</span><span class="key-method">time()</span></pre>
            </td>
          </tr>

          <tr>
            <td class="title">.NET/C#</td>
            <td>
              <pre>(<span class="cls-var">DateTime</span>.Now.<span class="method">ToUniversalTime</span>().Ticks - <span class="int">621355968000000000</span>) / <span class="int">10000000</span></pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tstamp-help'
  }
</script>

<style lang="scss" scoped>
  $table-bg-color: #0f202d;
  $comment-font-color: #777777;
  $str-font-color: #1ABC9C;
  $method-font-color: #5DADE2;
  $int-font-color: #F5B041;
  $var-font-color: #E74C3C;
  $class-font-color: #F7DC6F;
  $key-method-font-color: #A569BD;

  .tstamp-help {
    .doc {
      display: flex;
      display: -webkit-flex;
      text-align: center;
      table {
        text-align: left;
        margin: auto auto;
        width: 80vw;
      }
      table tr td {
        padding: 1px 10px;
        background-color: $table-bg-color;
      }
      table tr td.title {
        color: hsla(0,0%,100%,.3);
        font-size: 1em;
      }
      table tr td pre {
        color: white;
        border-radius: 2px;
        padding: 2px 10px;
      }
      table tr td .comment {
        color: $comment-font-color;
      }
      table tr td .str {
        color: $str-font-color;
      }
      table tr td .method {
        color: $method-font-color;
      }
      table tr td .int {
        color: $int-font-color;
      }
      table tr td .var {
        color:  $var-font-color;
      }
      table tr td .cls-var {
        color: $class-font-color;
      }
      table tr td .key-method {
        color: $key-method-font-color;
      }
    }
  }
</style>
