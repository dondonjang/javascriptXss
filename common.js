function XSSCheck(text, type) {
  //type에 따라 제거할지, 치환할지 선택
  if (type == 'remove') {
    text = text.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
  } else if (type == undefined && type == 'replace') {
    text = text.replace(/\</g, "&lt;");
    text = text.replace(/\>/g, "&gt;");
  }
  return text;
}
