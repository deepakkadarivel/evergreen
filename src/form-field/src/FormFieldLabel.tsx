import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../typography'

export default class FormFieldLabel extends PureComponent<
  any & React.ComponentProps<typeof Label>
> {
  static propTypes = {
    /**
     * Wether or not tho show an asterix after the label.
     */
    isAstrixShown: PropTypes.bool
  }

  render() {
    const { children, isAstrixShown, ...props } = this.props
    return (
      <Label display="block" {...props}>
        {children}{' '}
        {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  }
}
