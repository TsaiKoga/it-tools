export const cn = {
  tabs: {
    home: '首页',
    help: '帮助'
  },
  // Sidebar
  sidebar: {
    regexTool: '正则表达式工具',
    timestampConverter: '时间戳转化',
    colorBox: '颜色盒子',
    jsonParser: 'JSON 转化',
    regex: '正',
    time: '时',
    color: '色',
    json: '简'
  },
  // Regex Tool
  regex: {
    yourRegexExp: '您的正则表达式',
    yourTestStr: '需要测试的字符串',
    clearFields: '清除所有输入',
    matchResult: '匹配结果',
    noMatches: '没有匹配到内容 ...',
    matchGroups: '匹配所有分组',
    matchGroup: '匹配分组',
    cleanFields: '清除输入框',
    heresResult: '这里显示结果。',
    uHaveAnUnmatchedPats: '您有一个括号缺少一边。',
    expError: '表达式错误',
    invalidOpt: '非法选项'
  },
  regexHelp: {
    title: '正则表达式速查表',
    squareBracket: '其中一个字符: a, b, 或 c',
    squareNot: '任意字符除了: a, b, 或 c',
    squareAny: 'a 到 z 中的任意字符',
    squareRange: 'a 到 z 或 A 到 Z 中的任意字符',
    startOfLine: '行开始符',
    endOfLine: '行结束符',
    startOfStr: '字符串开始符',
    endOfStr: '字符串结束符',
    anyChar: '任意一个字符',
    anyWSpace: '任意空白字符',
    anyNWSpace: '任意非空白字符',
    anyDigit: '任意数字',
    anyNDigit: '任意非数字',
    anyWordChar: '任何词语字符 (字母, 数字, 下划线)',
    anyNWordChar: '任意非词语字符',
    anyWordB: '任意词语分界符',
    capEnclosed: '所有被括号包住的内容',
    or: 'a 或者 b',
    zeroOne: '0 或者 1 个 a',
    moreThanZero: '大于 0 个 a',
    moreThanOne: '大于 1 个 a',
    exactly3: '正好 3 个 a',
    moreThan3: '大于 3 个 a',
    between: '3 到 6 个 a',

    options: '选项',
    caseI: '不区分大小写',
    unicode: '将规则做为 Unicode 序列',
    newLine: '允许用 . 匹配新行',
    indexMatch: '只匹配目标字符串中此正则表达式的 lastIndex 属性所指示的索引（不尝试匹配任何后续索引）'
  },
  // Timestamp Converter
  timestamp: {
    unitTimeChosen: '选择时间单位',
    sec: '秒',
    microSec: '毫秒',
    reset: '重置',
    inputTimestamp: '输入时间戳',
    datetimeResult: '日期时间结果',
    timestampResult: '时间戳结果',
    inputDatetime: '输入日期时间'
  },
  // Color box
  color: {
    currentColor: '当前颜色',
    copied: '已复制',
    inputHex: '输入十六进制',
    inputRGB: '输入 RGB',
    inputHSL: '输入 HSL'
  },
  // Json Parser
  json: {
    error: '错误',
    toXML: '转为 XML',
    toJSON: '转为 JSON',
    reset: '重置',
    copy: '复制',
    seems: '貌似',
    missing: '没有 ',
    missingComma: '没有逗号',
    missingKV: '在逗号后面没有键值对.',
    missingElemInArray: '数组中缺少元素',
    missingCommaInArray: '数组中缺少逗号',
    undefinedVal: '键值对的值未定义',
    undefinedKey: '键值对的键未定义.',
    near: '错误发生在',
    notBool: '错误: 非 Boolean 值',
    notNum: '非数值number...',
    notNull: '错误：非 null 值',
    inputJsonTip: '此处输入 JSON 字符串\n\n注意: 键值对要用双引号括起来'
  }
}
