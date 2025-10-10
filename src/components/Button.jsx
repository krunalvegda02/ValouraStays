import React from 'react'
import { ArrowRight } from 'lucide-react'
import Theme from '../Constants/Theme'

const Button = ({ 
  children, 
  icon = true, 
  className = '',
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  onClick,
  disabled = false,
  size = 'medium',
  ...props 
}) => {
  // Variant styles (using Theme.colors)
  const variants = {
    primary: {
      base: `bg-[${Theme.colors.background}] text-[${Theme.colors.text}] border border-transparent`,
      hover: `hover:bg-[${Theme.colors.text}] hover:text-[${Theme.colors.text}] hover:border-[${Theme.colors.lightText}]`
    },
    secondary: {
      base: `bg-[${Theme.colors.text}] text-white border border-transparent`,
      hover: `hover:bg-[${Theme.colors.lightText}] hover:text-[${Theme.colors.lightText}] hover:border-[${Theme.colors.text}]`
    },
    outline: {
      base: `bg-transparent text-[${Theme.colors.text}] border border-white`,
      hover: `hover:bg-[${Theme.colors.text}] hover:text-[${Theme.colors.lightText}] hover:border-[${Theme.colors.text}]`
    }
  }

  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm gap-2',
    medium: 'px-6 py-3 text-base gap-3',
    large: 'px-8 py-4 text-lg gap-3'
  }

  // Icon sizes
  const iconSizes = {
    small: 14,
    medium: 16,
    large: 18
  }

  const currentVariant = variants[variant]

  return (
    <div
      className={`
        ${currentVariant.base}
        ${!disabled && currentVariant.hover}
        ${sizeClasses[size]}

        font-semibold 
        transition-all 
        duration-300 
        transform 
        hover:scale-105 
        active:scale-95 
        shadow-lg 
        hover:shadow-xl
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        flex 
        items-center 
        justify-center 
        group
        select-none
        ${className}
      `.trim()}
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          if (!disabled && onClick) onClick()
        }
      }}
      {...props}
    >
      {children}
      
      {icon && (
        <div className={`
          bg-white
          text-[${Theme.colors.text}]
          flex 
          items-center 
          justify-center 
          rounded-full 
          transition-all 
          duration-300 
          group-hover:bg-[${Theme.colors.text}]
          ${size === 'large' ? 'p-1.5' : size === 'small' ? 'p-1' : 'p-1'}
        `}>
          <ArrowRight 
            size={iconSizes[size]}
            className={`
              transition-all 
              duration-300 
              group-hover:translate-x-0.5 
              group-hover:scale-110
            `} 
          />
        </div>
      )}
    </div>
  )
}

export default Button
