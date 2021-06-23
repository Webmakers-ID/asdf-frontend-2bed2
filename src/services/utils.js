export const apiURL = "https://apps.purwalenta.com/api/"

export const myToken = "536e1137173bdf2a1452d014c0b3055e"

export const isBrowser = () => typeof window !== "undefined"

export const getParameterByName = name => {
  const url = isBrowser() && window.location.href
  name = name.replace(/[[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ""
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

export const redirectTo = url => {
  isBrowser() && window.location.replace(url)
}

export const redirectWithHistory = url => {
  isBrowser() && (window.location.href = url)
}

export const openInNewTab = url => {
  isBrowser() && window.open(url)
}

export const formatUang = nominal => {
  if (!nominal) return "0"
  nominal = Number(nominal)
  let result = ""
  let counter = 0
  while (nominal > 0) {
    if (counter > 0 && counter % 3 == 0) {
      result = "." + result
    }
    result = String(nominal % 10) + result
    nominal = Math.floor(nominal / 10)
    counter += 1
  }
  return result
}

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

export function checkImage(imageSrc, good, bad) {
  var img = new Image()
  img.onload = good
  img.onerror = bad
  img.src = imageSrc
}
