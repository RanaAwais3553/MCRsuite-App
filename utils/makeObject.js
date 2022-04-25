const makeObject = (
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  data12,
  data13,
  data14
) => {
  var result = "";
  var freq = {};
  //    for(let i=0;i<str.length;i++){
  freq[data1] = data1;
  freq[data2] = data2;
  if (data3) freq[data3] = data3;
  else if (data4) freq[data4] = data4;
  else if (data5) freq[data5] = data5;
  else if (data6) freq[data6] = data6;
  else if (data7) freq[data7] = data7;
  else if (data8) freq[data8] = data8;
  else if (data9) freq[data9] = data9;
  else if (data10) freq[data10] = data10;
  else if (data11) freq[data11] = data11;
  else if (data12) freq[data12] = data12;
  else if (data13) freq[data13] = data13;
  else if (data14) freq[data14] = data14;

  //  }
  return freq;
};
export default makeObject;
//console.log(myFunction("awis"));
