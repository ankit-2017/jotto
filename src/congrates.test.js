import React from 'react'
import Congrates from './congrates'
import { shallow } from 'enzyme'
import { findByTestAttr } from './test/testUtils'
import { checkProps } from './test/testUtils'

const defaultProps = { success: false }

/**
 * Factory function to create shallowWrapper for congrates app
 * @param {object} props - props specific to congrates app
 * @param {object} state 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrates {...setupProps} />)
}

test('Render without error', () => {
    const wrapper = setup()
    const congratesApp = findByTestAttr(wrapper, 'component-congrates')
    expect(congratesApp.length).toBe(1)
})

test('Render no text when `success` props is false', () => {
    const wrapper = setup({ success: false })
    const message = findByTestAttr(wrapper, 'congrates-message')
    expect(message.exists()).toBeFalsy()
})

test('Render non-empty success message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrates-message')
    expect(message.text().length).not.toBe(0)
})

test('do not throw warning with expected props', () => {
    const expectedProps = { success: false }
    checkProps(Congrates, expectedProps)
})
