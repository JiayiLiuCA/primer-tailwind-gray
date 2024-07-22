import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    gray:
      'bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-gray-900',
    gray: 'bg-gray-600 text-white hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 active:bg-gray-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-gray-600',
    white:
      'bg-white text-gray-600 hover:text-gray-700 focus-visible:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-50 active:text-gray-900/80 disabled:opacity-40 disabled:hover:text-gray-600',
  },
  outline: {
    gray:
      'border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 active:border-gray-200 active:bg-gray-50 active:text-gray-900/70 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-transparent',
    gray: 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 active:text-gray-600/70 disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-transparent',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
