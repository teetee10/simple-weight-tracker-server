export default async function readStore() {
  try {
    const source = await fs.readFileSync(process.env.DB_PATH, 'utf8')
    const data = JSON.parse(source)
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error.message }
  }
}
