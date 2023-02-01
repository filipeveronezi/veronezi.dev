import { describe, expect, it, vitest } from 'vitest'
import { getMyAge } from '.'

describe('[util] Get my age', () => {
  it('should get age correctly if today is some months before my birthday', () => {
    vitest.useFakeTimers().setSystemTime(new Date('2023-01-01'))
    const age = getMyAge()

    expect(age).toBe(22)
  })

  it('should get age correctly if today is some days before my birthday', () => {
    vitest.useFakeTimers().setSystemTime(new Date('2023-06-09'))
    const age = getMyAge()

    expect(age).toBe(22)
  })

  it('should get age correctly if today is my birthday', () => {
    vitest.useFakeTimers().setSystemTime(new Date('2023-06-11'))
    const age = getMyAge()

    expect(age).toBe(23)
  })

  it('should get age correctly if today is some days after my birthday', () => {
    vitest.useFakeTimers().setSystemTime(new Date('2023-06-13'))
    const age = getMyAge()

    expect(age).toBe(23)
  })

  it('should get age correctly if today is some months after my birthday', () => {
    vitest.useFakeTimers().setSystemTime(new Date('2023-12-31'))
    const age = getMyAge()

    expect(age).toBe(23)
  })
})
