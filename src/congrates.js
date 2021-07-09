import PropTypes from 'prop-types'

export default function Congrates(props) {
    return (
        <div data-test="component-congrates">
            {
                props.success ?
                    (
                        <span data-test="congrates-message">
                            Congratulations! you guessed the correct word.
                        </span>
                    )
                    : ''
            }

        </div>
    )
}

Congrates.propTypes = {
    success: PropTypes.bool.isRequired,
}