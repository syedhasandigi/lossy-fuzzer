import { expect } from 'chai'

import { getMiddle } from './middle.js'

describe('example tests', () => {
  it('placeholder', () => {
    expect(getMiddle('')).to.equal('')
    expect(getMiddle('syed')).to.equal('ye')
  })
})
