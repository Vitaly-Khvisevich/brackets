module.exports = function check(str, bracketsConfig){
  let str2='';
  let arr=[];
  let answer=true;
  let arr1={')':'(', ']':'[', '}':'{' };
  if(isNaN(bracketsConfig[0][0])===false){
  for(i=0; i<bracketsConfig.length; i++){
      if(bracketsConfig[i][0]==bracketsConfig[i][1]){
        arr1[bracketsConfig[i][0]]=bracketsConfig[i][0];
      }
      else{
        arr1[bracketsConfig[i][0]]='(';
        arr1[bracketsConfig[i][1]]=')';
      }
    }
   for(j=0; j<str.length; j++){
     str2=str2+arr1[str[j]];
   }
   str=str2;
   
  }
  
  for (i=0; i<str.length; i++){
    if(str[i]==' '){}
    else{
       if(str[i]=='(' ||str[i]=='[' || str[i]=='{'){
        arr.push(str[i]);
      }
      else if(str[i]=="|"){
        if(str[i]==arr[arr.length-1]){
          arr.pop();
        }
        else{
          arr.push(str[i]);
        }
      }
      else if(str[i]==')' ||str[i]==']' || str[i]=='}'){
          if(arr1[str[i]]==arr[arr.length-1]){
            arr.pop();
          }
          else{
           answer=false; 
          }
      }
      else{
        if(str[i]==arr[arr.length-1]){
          arr.pop();
        }
        else{
          arr.push(str[i]);
      }
    } 
  }
  }
  if(arr.length!==0){
    
    answer=false;
  }
return(answer);
}
