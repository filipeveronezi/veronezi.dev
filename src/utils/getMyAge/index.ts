export const getMyAge = () => {
  const myBirthday = new Date('2000-06-11')
  const now = new Date()
  const age = now.getFullYear() - myBirthday.getFullYear()

  if (now.getMonth() < myBirthday.getMonth()) {
    return age - 1
  }

  if (now.getMonth() === myBirthday.getMonth() && now.getUTCDate() < myBirthday.getUTCDate()) {
    return age - 1
  }

  return age
}
