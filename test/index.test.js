import readFile from "../index";

const resultArray = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe("readFile:", () => {
  it("Has to be a function", () => {
    expect(typeof readFile).toBe("function");
  })
  it("Has to return an array with the result", async () => {
    const result = await readFile('C:\\Users\\maso\\Desktop\\projects\\alura\\nodejs\\lib-markdown\\test\\files\\textWithLinks.md')
    expect(result).toEqual(resultArray)
  })
  it("Has to return the message 'No links found'", async () => {
    const result = await readFile('C:\\Users\\maso\\Desktop\\projects\\alura\\nodejs\\lib-markdown\\test\\files\\textWithoutLinks.md')
    expect(result).toBe('No links found')
  })
  it('Has to throw an error if filepath is invalid', async () => {
    await expect(readFile('C:\\Users\\maso\\Desktop\\projects\\alura\\nodejs\\lib-markdown\\test\\files\\text')).rejects.toThrow(/The specified file could not be accessed./)
  })
  it('Has to resolve the function with success', async () => {
    await expect(readFile('C:\\Users\\maso\\Desktop\\projects\\alura\\nodejs\\lib-markdown\\test\\files\\textWithLinks.md')).resolves.toEqual(resultArray)
  })
})
