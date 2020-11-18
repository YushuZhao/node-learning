test('测试Hello World', () => {
    const helloworld = require('../index')
    // console.log('helloworld', helloworld)
    expect(helloworld)
        .toBe('hello world')
})