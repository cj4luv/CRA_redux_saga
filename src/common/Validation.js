// //////////////////////////////////////////////////
// 유효성 펑션
// //////////////////////////////////////////////////
export function CheckEmail(strValue) {
  const regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

  // 입력을 안했으면
  if (strValue.length === 0) {
    return false;
  }

  // 이메일 형식에 맞지않으면
  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function CheckPassword(strValue) {
  const regExp = /^[a-zA-Z0-9`~!@@#$%^&*|₩₩₩'₩";:₩/?]{8,}$/;
  // const regExp = /^[0-9]{1,}$/;

  if (strValue.length === 0) {
    return false;
  }

  if (!regExp.test(strValue)) {
    // alert('비밀번호는 숫자와 영문자 조합으로 8자리 이상 사용해야 합니다.');
    return false;
  }

  const chkNum = strValue.search(/[0-9]/g);
  const chkEng = strValue.search(/[a-z]/ig);
  const chkSpe = strValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);


  // 이 부분은 주석 풀어야됌 나중에
  if (chkNum < 0 || chkEng < 0 || chkSpe < 0) {
    // alert('비밀번호는 숫자와 영문자를 혼용하여야 합니다.');
    return false;
  }

  // if(/(\w)\1\1\1/.test(upw)){
  //     alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
  //     return false;
  // }
  //
  // if(upw.search(uid)>-1){
  //     alert('ID가 포함된 비밀번호는 사용하실 수 없습니다.');
  //     return false;
  // }
  return true;
}

export function inspectionPassword(checkedPassword, password) {
  console.log(checkedPassword, password);

  if (checkedPassword.length === 0 || password.length === 0) {
    return false;
  }

  if (checkedPassword.length !== password.length) {
    return false;
  }

  if (password !== checkedPassword) {
    return false;
  }

  return true;
}

export function CheckName(strValue) {
  const regExp = /^[가-힝a-zA-Z0-9]{1,15}$/;

  // console.log(strValue);

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function CheckBirth(strValue) {
  const regExp = /^[0-9]{6}$/;

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function CheckPhoneNumber(strValue) {
  const regExp = /^[0-9]{9,}$/;

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function CheckAge(strValue) {
  // const regExp = /^[a-zA-Z0-9]{8,}$/;
  const regExp = /^[0-9]{1,}$/;

  if (strValue.length === 0) {
    return false;
  }

  if (strValue.charAt(0) === '0') {
    return false;
  }

  if (!regExp.test(strValue)) {
    return false;
  }

  return true;
}

export function onlyEnglish(strValue) {
  const regExp = /[a-zA-Z]/; // 영문만

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function onlyEnglishAndNumber(strValue) {
  const regExp = /[a-zA-Z0-9]/; // 영문만

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}

export function onlyNumber(strValue) {
  const regExp = /[0-9]$/; // 영문만

  if (strValue.length === 0) {
    return false;
  }

  if (!strValue.match(regExp)) {
    return false;
  }

  return true;
}
