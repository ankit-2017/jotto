import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from './test/testUtils'
import GuessedWord from './guessedWord'

const defaultProps = [{
    guessedWord: [{guessedWord: 'train', letterMatchCount: 3}]
}]

/**
 * Factory function to create shallowWrapper for congrates app
 * @param {object} props - props specific to congrates app
 * @param {object} state 
 * @returns {ShallowWrapper}
 */
 const setup = (props = {}, state = null) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWord {...setupProps} />)
}

