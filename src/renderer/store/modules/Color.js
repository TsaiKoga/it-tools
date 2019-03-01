const state = {
  colorMatrix: [
    [{ hex: '#F9EBEA', rgb: '249,235,234', hsl: '6,54%,95%', anim: false, name: 'pomegranate' },
      { hex: '#F2D7D5', rgb: '242,215,213', hsl: '6,54%,89%', anim: false, name: 'pomegranate' },
      { hex: '#E6B0AA', rgb: '230,176,170', hsl: '6,54%,78%', anim: false, name: 'pomegranate' },
      { hex: '#D98880', rgb: '217,136,128', hsl: '6,54%,68%', anim: false, name: 'pomegranate' },
      { hex: '#CD6155', rgb: '205,97,85', hsl: '6,54%,57%', anim: false, name: 'pomegranate' },
      { hex: '#C0392B', rgb: '192,57,43', hsl: '6,63%,46%', anim: false, name: 'pomegranate' },
      { hex: '#A93226', rgb: '169,50,38', hsl: '6,63%,41%', anim: false, name: 'pomegranate' },
      { hex: '#922B21', rgb: '146,43,33', hsl: '6,63%,35%', anim: false, name: 'pomegranate' },
      { hex: '#7B241C', rgb: '123,36,28', hsl: '6,63%,29%', anim: false, name: 'pomegranate' },
      { hex: '#641E16', rgb: '100, 30, 22', hsl: '6, 63%, 24%', anim: false, name: 'pomegranate' }],

    [{ hex: '#FDEDEC', rgb: '253,237,236', hsl: '6,78%,96%', anim: false, name: 'alizarin' },
      { hex: '#FADBD8', rgb: '250,219,216', hsl: '6,78%,91%', anim: false, name: 'alizarin' },
      { hex: '#F5B7B1', rgb: '245,183,177', hsl: '6,78%,83%', anim: false, name: 'alizarin' },
      { hex: '#F1948A', rgb: '241,148,138', hsl: '6,78%,74%', anim: false, name: 'alizarin' },
      { hex: '#EC7063', rgb: '236,112,99', hsl: '6,78%,66%', anim: false, name: 'alizarin' },
      { hex: '#E74C3C', rgb: '231,76,60', hsl: '6,78%,57%', anim: false, name: 'alizarin' },
      { hex: '#CB4335', rgb: '203,67,53', hsl: '6,59%,50%', anim: false, name: 'alizarin' },
      { hex: '#B03A2E', rgb: '176,58,46', hsl: '6,59%,43%', anim: false, name: 'alizarin' },
      { hex: '#943126', rgb: '148,49,38', hsl: '6,59%,37%', anim: false, name: 'alizarin' },
      { hex: '#78281F', rgb: '120,40,31', hsl: '6,59%,30%', anim: false, name: 'alizarin' }],

    [{ hex: '#F5EEF8', rgb: '245, 238, 248', hsl: '283, 39%, 95%', anim: false, name: 'amethyst' },
      { hex: '#EBDEF0', rgb: '235, 222, 240', hsl: '283, 39%, 91%', anim: false, name: 'amethyst' },
      { hex: '#D7BDE2', rgb: '215, 189, 226', hsl: '283, 39%, 81%', anim: false, name: 'amethyst' },
      { hex: '#C39BD3', rgb: '195, 155, 211', hsl: '283, 39%, 72%', anim: false, name: 'amethyst' },
      { hex: '#AF7AC5', rgb: '175, 122, 197', hsl: '283, 39%, 63%', anim: false, name: 'amethyst' },
      { hex: '#9B59B6', rgb: '155, 89, 182', hsl: '283, 39%, 53%', anim: false, name: 'amethyst' },
      { hex: '#884EA0', rgb: '136, 78, 160', hsl: '283, 34%, 47%', anim: false, name: 'amethyst' },
      { hex: '#76448A', rgb: '118, 68, 138', hsl: '283, 34%, 40%', anim: false, name: 'amethyst' },
      { hex: '#633974', rgb: '99, 57, 116', hsl: '283, 34%, 34%', anim: false, name: 'amethyst' },
      { hex: '#512E5F', rgb: '81, 46, 95', hsl: '283, 34%, 28%', anim: false, name: 'amethyst' }],

    [{ hex: '#F4ECF7', rgb: '244, 236, 247', hsl: '282, 39%, 95%', anim: false, name: 'wisteria' },
      { hex: '#E8DAEF', rgb: '232, 218, 239', hsl: '282, 39%, 89%', anim: false, name: 'wisteria' },
      { hex: '#D2B4DE', rgb: '210, 180, 222', hsl: '282, 39%, 79%', anim: false, name: 'wisteria' },
      { hex: '#BB8FCE', rgb: '187, 143, 206', hsl: '282, 39%, 68%', anim: false, name: 'wisteria' },
      { hex: '#A569BD', rgb: '165, 105, 189', hsl: '282, 39%, 58%', anim: false, name: 'wisteria' },
      { hex: '#8E44AD', rgb: '142, 68, 173', hsl: '282, 44%, 47%', anim: false, name: 'wisteria' },
      { hex: '#7D3C98', rgb: '125, 60, 152', hsl: '282, 44%, 42%', anim: false, name: 'wisteria' },
      { hex: '#6C3483', rgb: '108, 52, 131', hsl: '282, 44%, 36%', anim: false, name: 'wisteria' },
      { hex: '#5B2C6F', rgb: '91, 44, 111', hsl: '282, 44%, 30%', anim: false, name: 'wisteria' },
      { hex: '#4A235A', rgb: '74, 35, 90', hsl: '282, 44%, 25%', anim: false, name: 'wisteria' }],

    [{ hex: '#EAF2F8', rgb: '234, 242, 248', hsl: '204, 51%, 94%', anim: false, name: 'belize hole' },
      { hex: '#D4E6F1', rgb: '212, 230, 241', hsl: '204, 51%, 89%', anim: false, name: 'belize hole' },
      { hex: '#A9CCE3', rgb: '169, 204, 227', hsl: '204, 51%, 78%', anim: false, name: 'belize hole' },
      { hex: '#7FB3D5', rgb: '127, 179, 213', hsl: '204, 51%, 67%', anim: false, name: 'belize hole' },
      { hex: '#5499C7', rgb: '84, 153, 199', hsl: '204, 51%, 55%', anim: false, name: 'belize hole' },
      { hex: '#2980B9', rgb: '41, 128, 185', hsl: '204, 64%, 44%', anim: false, name: 'belize hole' },
      { hex: '#2471A3', rgb: '36, 113, 163', hsl: '204, 64%, 39%', anim: false, name: 'belize hole' },
      { hex: '#1F618D', rgb: '31, 97, 141', hsl: '204, 64%, 34%', anim: false, name: 'belize hole' },
      { hex: '#1A5276', rgb: '26, 82, 118', hsl: '204, 64%, 28%', anim: false, name: 'belize hole' },
      { hex: '#154360', rgb: '21, 67, 96', hsl: '204, 64%, 23%', anim: false, name: 'belize hole' }],

    [{ hex: '#EBF5FB', rgb: '235, 245, 251', hsl: '204, 70%, 95%', anim: false, name: 'peter river' },
      { hex: '#D6EAF8', rgb: '214, 234, 248', hsl: '204, 70%, 91%', anim: false, name: 'peter river' },
      { hex: '#AED6F1', rgb: '174, 214, 241', hsl: '204, 70%, 81%', anim: false, name: 'peter river' },
      { hex: '#85C1E9', rgb: '133, 193, 233', hsl: '204, 70%, 72%', anim: false, name: 'peter river' },
      { hex: '#5DADE2', rgb: '93, 173, 226', hsl: '204, 70%, 63%', anim: false, name: 'peter river' },
      { hex: '#3498DB', rgb: '52, 152, 219', hsl: '204, 70%, 53%', anim: false, name: 'peter river' },
      { hex: '#2E86C1', rgb: '46, 134, 193', hsl: '204, 62%, 47%', anim: false, name: 'peter river' },
      { hex: '#2874A6', rgb: '40, 116, 166', hsl: '204, 62%, 40%', anim: false, name: 'peter river' },
      { hex: '#21618C', rgb: '33, 97, 140', hsl: '204, 62%, 34%', anim: false, name: 'peter river' },
      { hex: '#1B4F72', rgb: '27, 79, 114', hsl: '204, 62%, 28%', anim: false, name: 'peter river' }],

    [{ hex: '#E8F8F5', rgb: '232, 248, 245', hsl: '168, 55%, 94%', anim: false, name: 'turquoise' },
      { hex: '#D1F2EB', rgb: '209, 242, 235', hsl: '168, 55%, 88%', anim: false, name: 'turquoise' },
      { hex: '#A3E4D7', rgb: '163, 228, 215', hsl: '168, 55%, 77%', anim: false, name: 'turquoise' },
      { hex: '#76D7C4', rgb: '118, 215, 196', hsl: '168, 55%, 65%', anim: false, name: 'turquoise' },
      { hex: '#48C9B0', rgb: '72, 201, 176', hsl: '168, 55%, 54%', anim: false, name: 'turquoise' },
      { hex: '#1ABC9C', rgb: '26, 188, 156', hsl: '168, 76%, 42%', anim: false, name: 'turquoise' },
      { hex: '#17A589', rgb: '23, 165, 137', hsl: '168, 76%, 37%', anim: false, name: 'turquoise' },
      { hex: '#148F77', rgb: '20, 143, 119', hsl: '168, 76%, 32%', anim: false, name: 'turquoise' },
      { hex: '#117864', rgb: '17, 120, 100', hsl: '168, 76%, 27%', anim: false, name: 'turquoise' },
      { hex: '#0E6251', rgb: '14, 98, 81', hsl: '168, 76%, 22%', anim: false, name: 'turquoise' }],

    [{ hex: '#E8F6F3', rgb: '232, 246, 243', hsl: '168, 42%, 94%', anim: false, name: 'green sea' },
      { hex: '#D0ECE7', rgb: '208, 236, 231', hsl: '168, 42%, 87%', anim: false, name: 'green sea' },
      { hex: '#A2D9CE', rgb: '162, 217, 206', hsl: '168, 42%, 74%', anim: false, name: 'green sea' },
      { hex: '#73C6B6', rgb: '115, 198, 182', hsl: '168, 42%, 61%', anim: false, name: 'green sea' },
      { hex: '#45B39D', rgb: '69, 179, 157', hsl: '168, 45%, 49%', anim: false, name: 'green sea' },
      { hex: '#16A085', rgb: '22, 160, 133', hsl: '168, 76%, 36%', anim: false, name: 'green sea' },
      { hex: '#138D75', rgb: '19, 141, 117', hsl: '168, 76%, 31%', anim: false, name: 'green sea' },
      { hex: '#117A65', rgb: '17, 122, 101', hsl: '168, 76%, 27%', anim: false, name: 'green sea' },
      { hex: '#0E6655', rgb: '14, 102, 85', hsl: '168, 76%, 23%', anim: false, name: 'green sea' },
      { hex: '#0B5345', rgb: '11, 83, 69', hsl: '168, 76%, 19%', anim: false, name: 'green sea' }],

    [{ hex: '#E9F7EF', rgb: '233, 247, 239', hsl: '145, 45%, 94%', anim: false, name: 'nephritis' },
      { hex: '#D4EFDF', rgb: '212, 239, 223', hsl: '145, 45%, 88%', anim: false, name: 'nephritis' },
      { hex: '#A9DFBF', rgb: '169, 223, 191', hsl: '145, 45%, 77%', anim: false, name: 'nephritis' },
      { hex: '#7DCEA0', rgb: '125, 206, 160', hsl: '145, 45%, 65%', anim: false, name: 'nephritis' },
      { hex: '#52BE80', rgb: '82, 190, 128', hsl: '145, 45%, 53%', anim: false, name: 'nephritis' },
      { hex: '#27AE60', rgb: '39, 174, 96', hsl: '145, 63%, 42%', anim: false, name: 'nephritis' },
      { hex: '#229954', rgb: '34, 153, 84', hsl: '145, 63%, 37%', anim: false, name: 'nephritis' },
      { hex: '#1E8449', rgb: '30, 132, 73', hsl: '145, 63%, 32%', anim: false, name: 'nephritis' },
      { hex: '#196F3D', rgb: '25, 111, 61', hsl: '145, 63%, 27%', anim: false, name: 'nephritis' },
      { hex: '#145A32', rgb: '20, 90, 50', hsl: '145, 63%, 22%', anim: false, name: 'nephritis' }],

    [{ hex: '#EAFAF1', rgb: '234, 250, 241', hsl: '145, 61%, 95%', anim: false, name: 'emerald' },
      { hex: '#D5F5E3', rgb: '213, 245, 227', hsl: '145, 61%, 90%', anim: false, name: 'emerald' },
      { hex: '#ABEBC6', rgb: '171, 235, 198', hsl: '145, 61%, 80%', anim: false, name: 'emerald' },
      { hex: '#82E0AA', rgb: '130, 224, 170', hsl: '145, 61%, 69%', anim: false, name: 'emerald' },
      { hex: '#58D68D', rgb: '88, 214, 141', hsl: '145, 61%, 59%', anim: false, name: 'emerald' },
      { hex: '#2ECC71', rgb: '46, 204, 113', hsl: '145, 63%, 49%', anim: false, name: 'emerald' },
      { hex: '#28B463', rgb: '40, 180, 99', hsl: '145, 63%, 43%', anim: false, name: 'emerald' },
      { hex: '#239B56', rgb: '35, 155, 86', hsl: '145, 63%, 37%', anim: false, name: 'emerald' },
      { hex: '#1D8348', rgb: '29, 131, 72', hsl: '145, 63%, 31%', anim: false, name: 'emerald' },
      { hex: '#186A3B', rgb: '24, 106, 59', hsl: '145, 63%, 25%', anim: false, name: 'emerald' }],

    [{ hex: '#FEF9E7', rgb: '254, 249, 231', hsl: '48, 89%, 95%', anim: false, name: 'sunflower' },
      { hex: '#FCF3CF', rgb: '252, 243, 207', hsl: '48, 89%, 90%', anim: false, name: 'sunflower' },
      { hex: '#F9E79F', rgb: '249, 231, 159', hsl: '48, 89%, 80%', anim: false, name: 'sunflower' },
      { hex: '#F7DC6F', rgb: '247, 220, 111', hsl: '48, 89%, 70%', anim: false, name: 'sunflower' },
      { hex: '#F4D03F', rgb: '244, 208, 63', hsl: '48, 89%, 60%', anim: false, name: 'sunflower' },
      { hex: '#F1C40F', rgb: '241, 196, 15', hsl: '48, 89%, 50%', anim: false, name: 'sunflower' },
      { hex: '#D4AC0D', rgb: '212, 172, 13', hsl: '48, 88%, 44%', anim: false, name: 'sunflower' },
      { hex: '#B7950B', rgb: '183, 149, 11', hsl: '48, 88%, 38%', anim: false, name: 'sunflower' },
      { hex: '#9A7D0A', rgb: '154, 125, 10', hsl: '48, 88%, 32%', anim: false, name: 'sunflower' },
      { hex: '#7D6608', rgb: '125, 102, 8', hsl: '48, 88%, 26%', anim: false, name: 'sunflower' }],

    [{ hex: '#FEF5E7', rgb: '254, 245, 231', hsl: '37, 90%, 95%', anim: false, name: 'orange' },
      { hex: '#FDEBD0', rgb: '253, 235, 208', hsl: '37, 90%, 90%', anim: false, name: 'orange' },
      { hex: '#FAD7A0', rgb: '250, 215, 160', hsl: '37, 90%, 80%', anim: false, name: 'orange' },
      { hex: '#F8C471', rgb: '248, 196, 113', hsl: '37, 90%, 71%', anim: false, name: 'orange' },
      { hex: '#F5B041', rgb: '245, 176, 65', hsl: '37, 90%, 61%', anim: false, name: 'orange' },
      { hex: '#F39C12', rgb: '243, 156, 18', hsl: '37, 90%, 51%', anim: false, name: 'orange' },
      { hex: '#D68910', rgb: '214, 137, 16', hsl: '37, 86%, 45%', anim: false, name: 'orange' },
      { hex: '#B9770E', rgb: '185, 119, 14', hsl: '37, 86%, 39%', anim: false, name: 'orange' },
      { hex: '#9C640C', rgb: '156, 100, 12', hsl: '37, 86%, 33%', anim: false, name: 'orange' },
      { hex: '#7E5109', rgb: '126, 81, 9', hsl: '37, 86%, 27%', anim: false, name: 'orange' }],

    [{ hex: '#FDF2E9', rgb: '253, 242, 233', hsl: '28, 80%, 95%', anim: false, name: 'carrot' },
      { hex: '#FAE5D3', rgb: '250, 229, 211', hsl: '28, 80%, 90%', anim: false, name: 'carrot' },
      { hex: '#F5CBA7', rgb: '245, 203, 167', hsl: '28, 80%, 81%', anim: false, name: 'carrot' },
      { hex: '#F0B27A', rgb: '240, 178, 122', hsl: '28, 80%, 71%', anim: false, name: 'carrot' },
      { hex: '#EB984E', rgb: '235, 152, 78', hsl: '28, 80%, 61%', anim: false, name: 'carrot' },
      { hex: '#E67E22', rgb: '230, 126, 34', hsl: '28, 80%, 52%', anim: false, name: 'carrot' },
      { hex: '#CA6F1E', rgb: '202, 111, 30', hsl: '28, 74%, 46%', anim: false, name: 'carrot' },
      { hex: '#AF601A', rgb: '175, 96, 26', hsl: '28, 74%, 39%', anim: false, name: 'carrot' },
      { hex: '#935116', rgb: '147, 81, 22', hsl: '28, 74%, 33%', anim: false, name: 'carrot' },
      { hex: '#784212', rgb: '120, 66, 18', hsl: '28, 74%, 27%', anim: false, name: 'carrot' }],

    [{ hex: '#FBEEE6', rgb: '251, 238, 230', hsl: '24, 71%, 94%', anim: false, name: 'pumpkin' },
      { hex: '#F6DDCC', rgb: '246, 221, 204', hsl: '24, 71%, 88%', anim: false, name: 'pumpkin' },
      { hex: '#EDBB99', rgb: '237, 187, 153', hsl: '24, 71%, 77%', anim: false, name: 'pumpkin' },
      { hex: '#E59866', rgb: '229, 152, 102', hsl: '24, 71%, 65%', anim: false, name: 'pumpkin' },
      { hex: '#DC7633', rgb: '220, 118, 51', hsl: '24, 71%, 53%', anim: false, name: 'pumpkin' },
      { hex: '#D35400', rgb: '211, 84, 0', hsl: '24, 100%, 41%', anim: false, name: 'pumpkin' },
      { hex: '#BA4A00', rgb: '186, 74, 0', hsl: '24, 100%, 36%', anim: false, name: 'pumpkin' },
      { hex: '#A04000', rgb: '160, 64, 0', hsl: '24, 100%, 31%', anim: false, name: 'pumpkin' },
      { hex: '#873600', rgb: '135, 54, 0', hsl: '24, 100%, 26%', anim: false, name: 'pumpkin' },
      { hex: '#6E2C00', rgb: '110, 44, 0', hsl: '24, 100%, 22%', anim: false, name: 'pumpkin' }],

    [{ hex: '#FDFEFE', rgb: '253, 254, 254', hsl: '192, 15%, 99%', anim: false, name: 'clouds' },
      { hex: '#FBFCFC', rgb: '251, 252, 252', hsl: '192, 15%, 99%', anim: false, name: 'clouds' },
      { hex: '#F7F9F9', rgb: '247, 249, 249', hsl: '192, 15%, 97%', anim: false, name: 'clouds' },
      { hex: '#F4F6F7', rgb: '244, 246, 247', hsl: '192, 15%, 96%', anim: false, name: 'clouds' },
      { hex: '#F0F3F4', rgb: '240, 243, 244', hsl: '192, 15%, 95%', anim: false, name: 'clouds' },
      { hex: '#ECF0F1', rgb: '236, 240, 241', hsl: '192, 15%, 94%', anim: false, name: 'clouds' },
      { hex: '#D0D3D4', rgb: '208, 211, 212', hsl: '192, 5%, 82%', anim: false, name: 'clouds' },
      { hex: '#B3B6B7', rgb: '179, 182, 183', hsl: '192, 3%, 71%', anim: false, name: 'clouds' },
      { hex: '#979A9A', rgb: '151, 154, 154', hsl: '192, 2%, 60%', anim: false, name: 'clouds' },
      { hex: '#7B7D7D', rgb: '123, 125, 125', hsl: '192, 1%, 49%', anim: false, name: 'clouds' }],

    [{ hex: '#F8F9F9', rgb: '248, 249, 249', hsl: '204, 8%, 98%', anim: false, name: 'silver' },
      { hex: '#F2F3F4', rgb: '242, 243, 244', hsl: '204, 8%, 95%', anim: false, name: 'silver' },
      { hex: '#E5E7E9', rgb: '229, 231, 233', hsl: '204, 8%, 90%', anim: false, name: 'silver' },
      { hex: '#D7DBDD', rgb: '215, 219, 221', hsl: '204, 8%, 86%', anim: false, name: 'silver' },
      { hex: '#CACFD2', rgb: '202, 207, 210', hsl: '204, 8%, 81%', anim: false, name: 'silver' },
      { hex: '#BDC3C7', rgb: '189, 195, 199', hsl: '204, 8%, 76%', anim: false, name: 'silver' },
      { hex: '#A6ACAF', rgb: '166, 172, 175', hsl: '204, 5%, 67%', anim: false, name: 'silver' },
      { hex: '#909497', rgb: '144, 148, 151', hsl: '204, 4%, 58%', anim: false, name: 'silver' },
      { hex: '#797D7F', rgb: '121, 125, 127', hsl: '204, 3%, 49%', anim: false, name: 'silver' },
      { hex: '#626567', rgb: '98, 101, 103', hsl: '204, 3%, 40%', anim: false, name: 'silver' }],

    [{ hex: '#F4F6F6', rgb: '244, 246, 246', hsl: '184, 9%, 96%', anim: false, name: 'concrete' },
      { hex: '#EAEDED', rgb: '234, 237, 237', hsl: '184, 9%, 92%', anim: false, name: 'concrete' },
      { hex: '#D5DBDB', rgb: '213, 219, 219', hsl: '184, 9%, 85%', anim: false, name: 'concrete' },
      { hex: '#BFC9CA', rgb: '191, 201, 202', hsl: '184, 9%, 77%', anim: false, name: 'concrete' },
      { hex: '#AAB7B8', rgb: '170, 183, 184', hsl: '184, 9%, 69%', anim: false, name: 'concrete' },
      { hex: '#95A5A6', rgb: '149, 165, 166', hsl: '184, 9%, 62%', anim: false, name: 'concrete' },
      { hex: '#839192', rgb: '131, 145, 146', hsl: '184, 6%, 54%', anim: false, name: 'concrete' },
      { hex: '#717D7E', rgb: '113, 125, 126', hsl: '184, 5%, 47%', anim: false, name: 'concrete' },
      { hex: '#5F6A6A', rgb: '95, 106, 106', hsl: '184, 5%, 40%', anim: false, name: 'concrete' },
      { hex: '#4D5656', rgb: '77, 86, 86', hsl: '184, 5%, 32%', anim: false, name: 'concrete' }],

    [{ hex: '#F2F4F4', rgb: '242, 244, 244', hsl: '184, 6%, 95%', anim: false, name: 'asbestos' },
      { hex: '#E5E8E8', rgb: '229, 232, 232', hsl: '184, 6%, 91%', anim: false, name: 'asbestos' },
      { hex: '#CCD1D1', rgb: '204, 209, 209', hsl: '184, 6%, 81%', anim: false, name: 'asbestos' },
      { hex: '#B2BABB', rgb: '178, 186, 187', hsl: '184, 6%, 72%', anim: false, name: 'asbestos' },
      { hex: '#99A3A4', rgb: '153, 163, 164', hsl: '184, 6%, 62%', anim: false, name: 'asbestos' },
      { hex: '#7F8C8D', rgb: '127, 140, 141', hsl: '184, 6%, 53%', anim: false, name: 'asbestos' },
      { hex: '#707B7C', rgb: '112, 123, 124', hsl: '184, 5%, 46%', anim: false, name: 'asbestos' },
      { hex: '#616A6B', rgb: '97, 106, 107', hsl: '184, 5%, 40%', anim: false, name: 'asbestos' },
      { hex: '#515A5A', rgb: '81, 90, 90', hsl: '184, 5%, 34%', anim: false, name: 'asbestos' },
      { hex: '#424949', rgb: '66, 73, 73', hsl: '184, 5%, 27%', anim: false, name: 'asbestos' }],

    [{ hex: '#EBEDEF', rgb: '235, 237, 239', hsl: '210, 12%, 93%', anim: false, name: 'wet asphalt' },
      { hex: '#D6DBDF', rgb: '214, 219, 223', hsl: '210, 12%, 86%', anim: false, name: 'wet asphalt' },
      { hex: '#AEB6BF', rgb: '174, 182, 191', hsl: '210, 12%, 71%', anim: false, name: 'wet asphalt' },
      { hex: '#85929E', rgb: '133, 146, 158', hsl: '210, 12%, 57%', anim: false, name: 'wet asphalt' },
      { hex: '#5D6D7E', rgb: '93, 109, 126', hsl: '210, 15%, 43%', anim: false, name: 'wet asphalt' },
      { hex: '#34495E', rgb: '52, 73, 94', hsl: '210, 29%, 29%', anim: false, name: 'wet asphalt' },
      { hex: '#2E4053', rgb: '46, 64, 83', hsl: '210, 29%, 25%', anim: false, name: 'wet asphalt' },
      { hex: '#283747', rgb: '40, 55, 71', hsl: '210, 29%, 22%', anim: false, name: 'wet asphalt' },
      { hex: '#212F3C', rgb: '33, 47, 60', hsl: '210, 29%, 18%', anim: false, name: 'wet asphalt' },
      { hex: '#1B2631', rgb: '27, 38, 49', hsl: '210, 29%, 15%', anim: false, name: 'wet asphalt' }],

    [{ hex: '#EAECEE', rgb: '234, 236, 238', hsl: '210, 9%, 92%', anim: false, name: 'midnight blue' },
      { hex: '#D5D8DC', rgb: '213, 216, 220', hsl: '210, 9%, 85%', anim: false, name: 'midnight blue' },
      { hex: '#ABB2B9', rgb: '171, 178, 185', hsl: '210, 9%, 70%', anim: false, name: 'midnight blue' },
      { hex: '#808B96', rgb: '128, 139, 150', hsl: '210, 9%, 55%', anim: false, name: 'midnight blue' },
      { hex: '#566573', rgb: '86, 101, 115', hsl: '210, 14%, 39%', anim: false, name: 'midnight blue' },
      { hex: '#2C3E50', rgb: '44, 62, 80', hsl: '210, 29%, 24%', anim: false, name: 'midnight blue' },
      { hex: '#273746', rgb: '39, 55, 70', hsl: '210, 29%, 21%', anim: false, name: 'midnight blue' },
      { hex: '#212F3D', rgb: '33, 47, 61', hsl: '210, 29%, 18%', anim: false, name: 'midnight blue' },
      { hex: '#1C2833', rgb: '28, 40, 51', hsl: '210, 29%, 16%', anim: false, name: 'midnight blue' },
      { hex: '#17202A', rgb: '23, 32, 42', hsl: '210, 29%, 13%', anim: false, name: 'midnight blue' }]
  ],
  currentColor: { hex: '', rgb: '', hsl: '', name: '', index: 0 },
  toggleColorForm: false,
  colorHex: '',
  colorRgb: '',
  colorHsl: ''
}

const mutations = {
  SET_CURRENT_COLOR (state, obj) {
    state.currentColor = obj
  },
  ACTIVE_COLOR (state, payload) {
    state.colorMatrix[payload.row][payload.col]['anim'] = true
  },
  DISACTIVE_COLOR (state, payload) {
    state.colorMatrix[payload.row][payload.col]['anim'] = false
  },
  TOGGLE_FORM (state) {
    state.toggleColorForm = !state.toggleColorForm
  },
  SET_HEX_COLOR (state, value) {
    state.colorHex = value
  },
  SET_RGB_COLOR (state, payload) {
    try {
      let rgbArray = state.colorRgb.split(',')
      if (payload.sym === 'r') {
        rgbArray[0] = payload.value
      } else if (payload.sym === 'g') {
        rgbArray[1] = payload.value
      } else if (payload.sym === 'b') {
        rgbArray[2] = payload.value
      } else {
        rgbArray = []
      }
      state.colorRgb = rgbArray.join(',')
    } catch (err) {
      console.log(err)
    }
  },
  SET_HSL_COLOR (state, payload) {
    try {
      let hslArray = state.colorHsl.split(',')
      if (payload.sym === 'h') {
        hslArray[0] = payload.value
      } else if (payload.sym === 's') {
        hslArray[1] = payload.value + '%'
      } else if (payload.sym === 'l') {
        hslArray[2] = payload.value + '%'
      } else {
        hslArray = []
      }
      state.colorHsl = hslArray.join(',')
      console.log(state.colorHsl)
    } catch (err) {
      console.log(err)
    }
  }
}

const actions = {
  setCurrentColor ({ commit }, obj) {
    commit('SET_CURRENT_COLOR', obj)
  },
  activeColor ({ commit }, payload) {
    commit('ACTIVE_COLOR', payload)
  },
  disactiveColor ({ commit }, payload) {
    commit('DISACTIVE_COLOR', payload)
  },
  toggleForm ({ commit }) {
    commit('TOGGLE_FORM')
  },
  setHexColor ({ commit }, payload) {
    commit('SET_HEX_COLOR', payload.target.value)
  },
  setRgbColor ({ commit }, payload) {
    commit('SET_RGB_COLOR', payload)
  },
  setHslColor ({ commit }, payload) {
    commit('SET_HSL_COLOR', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
