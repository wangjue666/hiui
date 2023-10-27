
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-send-out-filled')

export const SendOutFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M129.002667 428.693333l3.242666-1.578666 725.333334-316.885334A42.666667 42.666667 0 0 1 917.333333 149.333333v597.333334a42.666667 42.666667 0 0 1-56.384 40.405333L675.413333 724.053333l-68.885333 160.469334c-14.08 32.810667-59.328 34.517333-76.309333 4.266666l-1.6-3.157333-116.032-250.218667-281.216-130.496c-32.234667-14.976-32.810667-59.946667-2.368-76.224z m634.154666-164.330666l-257.685333 253.866666a10.666667 10.666667 0 0 0-2.432 10.261334l43.776 148.821333a10.666667 10.666667 0 0 0 19.84 1.578667L780.586667 276.266667c5.269333-11.029333-9.109333-20.821333-17.429334-11.882667z" p-id="11126"></path></svg>
    )
  }
)

if (__DEV__) {
  SendOutFilled.displayName = 'SendOutFilled'
}
  