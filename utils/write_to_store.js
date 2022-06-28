async function writeToStore(params) {
  try {
    const source = await readStore()
    const mutated = Object.assign(source, params)
    await fs.writeFile(process.env.DB_PATH, JSON.stringify(mutated))
    return true
  } catch (error) {
    throw new Error(error.message)
  }
}
module.exports = writeToStore
