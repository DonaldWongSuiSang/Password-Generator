
function generatePassword(resultData){
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = lowerCase.toUpperCase()
  const number = "0123456789"
  const symbol  = "~!@#$%^&*()_+`-=[]\;,./<>?:'{}|`"
  let passwordCollection = ""
  let password=""

  if(resultData.lowerCase === 'on'){
    passwordCollection += lowerCase
  }

  if(resultData.upperCase === 'on'){
    passwordCollection += upperCase
  }

  if(resultData.symbols === 'on'){
    passwordCollection += symbol
  }

  if(resultData.number === 'on'){
    passwordCollection += number
  }

  passwordCollection = passwordCollection.split('')
  passwordCollection = passwordCollection.filter(
    character => !resultData.exclude.includes(character) 
  )

  for (i = 0; i<resultData.length; i++){
    password += passwordCollection[Math.floor(Math.random() * passwordCollection.length)]
  }

  if(password.includes(undefined)){
    return "You must select at least one character set!"
  }else
  return password
}

module.exports = generatePassword
