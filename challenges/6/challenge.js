/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = (htmlTemplate) => {
  const regexExtraction = /(?:(height|width):\s)(\d+)/g

  const firstMatch = regexExtraction.exec(htmlTemplate)
  const secondMatch = regexExtraction.exec(htmlTemplate)

  const returnObject = { width: 0, height: 0 }

  try {
    returnObject[firstMatch[1]] = parseInt(firstMatch[2])
  } catch {}

  try {
    returnObject[secondMatch[1]] = parseInt(secondMatch[2])
  } catch {}

  return returnObject
}

module.exports = extractSize
